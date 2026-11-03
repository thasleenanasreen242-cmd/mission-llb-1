import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) redirect("/login");
  const name = user.user_metadata?.full_name || user.email?.split("@")[0] || "Scholar";
  async function signOut() {
    "use server";
    const client = await createClient();
    await client.auth.signOut();
    redirect("/login");
  }
  return <main className="student-dashboard"><header className="student-header"><Link className="auth-brand" href="/">M<span>.</span> MISSION LLB / 01</Link><form action={signOut}><button className="signout-button">SIGN OUT ↗</button></form></header><section className="student-welcome"><div className="auth-kicker">STUDENT SPACE / PERSONAL DASHBOARD</div><h1>Good to have you back,<br/><span>{name}.</span></h1><p>Your learning space is ready. Build a consistent study rhythm, one topic at a time.</p></section><section className="student-grid"><article><span>01 / YOUR ACCOUNT</span><h2>Student profile</h2><p>{user.email}</p><small>Account active · Email identity verified by Supabase session</small></article><article><span>02 / LEARNING PATH</span><h2>First-year law</h2><p>Six foundational study areas will live here.</p><small>Learning library setup is the next phase</small></article><article><span>03 / YOUR PROGRESS</span><h2>Make it measurable.</h2><p>Your personal study tracker will record topics and revision progress.</p><small>Progress tracking will be enabled after the learning database is configured.</small></article></section><Link className="dashboard-back" href="/">← Return to Mission LLB</Link></main>;
}
