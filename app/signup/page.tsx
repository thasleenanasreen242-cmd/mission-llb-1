"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");
  const [done,setDone] = useState(false);
  const [busy,setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setMessage("");
    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
      email, password,
      options: { data: { full_name: name }, emailRedirectTo: `${window.location.origin}/auth/callback` },
    });
    setBusy(false);
    if (error) { setMessage(error.message); return; }
    if (data.session) { window.location.assign("/dashboard"); return; }
    setDone(true);
  }

  return <main className="auth-shell"><section className="auth-panel"><Link className="auth-brand" href="/">M<span>.</span> MISSION LLB / 01</Link><div className="auth-kicker">CREATE YOUR PROFILE / 01</div><h1>Start your<br/><span>next chapter.</span></h1><p className="auth-intro">Create your personal student account. It only takes a moment.</p>{done ? <div className="auth-success"><b>Check your inbox.</b><p>We sent a confirmation link to {email}. Open it to activate your account and continue to Mission LLB.</p><Link href="/login">Go to sign in →</Link></div> : <form onSubmit={submit} className="auth-form"><label>Full name<input required value={name} onChange={e=>setName(e.target.value)} autoComplete="name" placeholder="Your name"/></label><label>Email address<input type="email" required value={email} onChange={e=>setEmail(e.target.value)} autoComplete="email" placeholder="you@example.com"/></label><label>Password<input type="password" required minLength={8} value={password} onChange={e=>setPassword(e.target.value)} autoComplete="new-password" placeholder="At least 8 characters"/></label><button disabled={busy}>{busy ? "CREATING ACCOUNT…" : "CREATE ACCOUNT ↗"}</button></form>}{message && <p className="auth-message" role="alert">{message}</p>}<div className="auth-links"><span>Already registered? <Link href="/login">Sign in</Link></span></div><Link className="auth-home" href="/">← Back to homepage</Link></section><aside className="auth-aside"><span>YOUR MISSION STARTS HERE</span><div>Build the discipline.<br/><b>Develop the clarity.</b><br/>Own your progress.</div><small>ONE CONNECTED LEARNING SPACE.</small></aside></main>;
}
