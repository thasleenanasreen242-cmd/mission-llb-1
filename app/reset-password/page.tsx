"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");
  const [done,setDone] = useState(false);
  const [busy,setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setMessage("");
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) { setMessage(error.message); return; }
    setDone(true); setMessage("Your password has been updated.");
  }
  return <main className="auth-shell"><section className="auth-panel"><Link className="auth-brand" href="/">M<span>.</span> MISSION LLB / 01</Link><div className="auth-kicker">SECURE PASSWORD UPDATE</div><h1>Choose a<br/><span>new password.</span></h1>{done ? <div className="auth-success"><p>{message}</p><Link href="/login">Continue to sign in →</Link></div> : <form onSubmit={submit} className="auth-form"><label>New password<input type="password" required minLength={8} value={password} onChange={e=>setPassword(e.target.value)} autoComplete="new-password" placeholder="At least 8 characters"/></label><button disabled={busy}>{busy ? "UPDATING…" : "UPDATE PASSWORD ↗"}</button></form>}{message && !done && <p className="auth-message" role="alert">{message}</p>}<Link className="auth-home" href="/login">← Back to sign in</Link></section><aside className="auth-aside"><span>MISSION CONTROL / 01</span><div>Keep your<br/><b>momentum.</b></div></aside></main>;
}
