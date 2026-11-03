"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setMessage("");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) { setMessage(error.message); return; }
    router.replace(params.get("next")?.startsWith("/") ? params.get("next")! : "/dashboard");
    router.refresh();
  }

  return <main className="auth-shell"><section className="auth-panel"><Link className="auth-brand" href="/">M<span>.</span> MISSION LLB / 01</Link><div className="auth-kicker">STUDENT ACCESS / 01</div><h1>Welcome<br/><span>back, scholar.</span></h1><p className="auth-intro">Sign in to continue your learning journey.</p><form onSubmit={submit} className="auth-form"><label>Email address<input type="email" autoComplete="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></label><label>Password<input type="password" autoComplete="current-password" required value={password} onChange={e=>setPassword(e.target.value)} placeholder="Your password"/></label><button disabled={busy}>{busy ? "SIGNING IN…" : "SIGN IN ↗"}</button></form>{message && <p className="auth-message" role="alert">{message}</p>}<div className="auth-links"><Link href="/forgot-password">Forgot password?</Link><span>New to Mission LLB? <Link href="/signup">Create account</Link></span></div><Link className="auth-home" href="/">← Back to homepage</Link></section><aside className="auth-aside"><span>MISSION CONTROL / 01</span><div>Think sharper.<br/><b>Study smarter.</b><br/>Lead with law.</div><small>YOUR LEARNING. YOUR PACE. YOUR MISSION.</small></aside></main>;
}
