"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [busy,setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setMessage("");
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/auth/callback?next=/reset-password` });
    setBusy(false);
    setMessage(error ? error.message : "If an account exists for this email, a password reset link has been sent.");
  }
  return <main className="auth-shell"><section className="auth-panel"><Link className="auth-brand" href="/">M<span>.</span> MISSION LLB / 01</Link><div className="auth-kicker">ACCOUNT RECOVERY</div><h1>Reset your<br/><span>password.</span></h1><p className="auth-intro">Enter the email linked to your student account. We&apos;ll send you a secure reset link.</p><form onSubmit={submit} className="auth-form"><label>Email address<input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></label><button disabled={busy}>{busy ? "SENDING…" : "SEND RESET LINK ↗"}</button></form>{message && <p className="auth-message" role="status">{message}</p>}<Link className="auth-home" href="/login">← Back to sign in</Link></section><aside className="auth-aside"><span>SECURE ACCOUNT ACCESS</span><div>Your next step<br/><b>starts here.</b></div></aside></main>;
}
