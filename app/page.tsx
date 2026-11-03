"use client";

import { useState } from "react";

const subjects = [
  { code: "01", title: "Law of Contracts", meta: "CP01", detail: "Build a strong command of agreements, consideration, capacity and remedies." },
  { code: "02", title: "Law of Torts", meta: "CP02", detail: "Understand negligence, liability, defences and the principles behind civil wrongs." },
  { code: "03", title: "Constitutional Law I", meta: "CP03", detail: "Explore constitutional structure, fundamental rights and the meaning of State." },
  { code: "04", title: "Family Law I", meta: "CP04", detail: "Study marriage, divorce, maintenance, adoption and guardianship." },
  { code: "05", title: "Law of Crimes I", meta: "CP05", detail: "Learn the foundations of criminal liability, offences and general exceptions." },
  { code: "06", title: "Legal Language", meta: "OP01", detail: "Develop precision in legal terminology, interpretation and drafting." },
];

const plans = [
  { name: "Essential", price: "Free", note: "A clear place to begin", items: ["Starter learning resources", "Basic study planning", "Progress overview"], featured: false },
  { name: "Pro Scholar", price: "₹199", note: "For serious, structured preparation", items: ["Full topic-wise learning library", "Case briefs and exam frameworks", "Personal study dashboard", "Revision and progress tools"], featured: true },
  { name: "Annual Access", price: "₹1,499", note: "One plan for the academic year", items: ["Everything in Pro Scholar", "Annual study roadmap", "Downloadable revision packs", "Priority learning support"], featured: false },
];

export default function Home() {
  const [active, setActive] = useState("01");
  const [menu, setMenu] = useState(false);
  const selected = subjects.find((item) => item.code === active) ?? subjects[0];

  return (
    <main>
      <div className="topline"><span><i /> A NEW STANDARD FOR LAW STUDY</span><span>BUILT FOR THE NEXT GENERATION OF LEGAL MINDS <b>↗</b></span></div>
      <header className="header">
        <a className="identity" href="#"><span className="identity-symbol">M<span>.</span></span><span className="identity-name">MISSION<span>LLB / 01</span></span></a>
        <button className="mobile-menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? "×" : "☰"}</button>
        <nav className={menu ? "navigation navigation-open" : "navigation"}>
          <a href="#platform" onClick={() => setMenu(false)}>Platform</a><a href="#curriculum" onClick={() => setMenu(false)}>Curriculum</a><a href="#method" onClick={() => setMenu(false)}>Method</a><a href="#membership" onClick={() => setMenu(false)}>Membership</a>
        </nav>
        <a className="header-action" href="#membership">ENTER THE PLATFORM <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-main">
          <div className="overline"><span className="overline-mark">✳</span> THE FUTURE OF LEGAL LEARNING</div>
          <h1>Think sharper.<br /><span>Study smarter.</span><br />Lead with law.</h1>
          <p className="hero-description">A focused learning ecosystem for law students. Master legal concepts, understand landmark cases and prepare with a strategy built around your progress.</p>
          <div className="hero-buttons"><a className="primary-button" href="#platform">EXPLORE THE PLATFORM <span>↗</span></a><a className="secondary-button" href="#curriculum">DISCOVER THE CURRICULUM <span>↓</span></a></div>
          <div className="hero-footnote"><span className="signal" /> STRUCTURE YOUR STUDY. OWN YOUR PROGRESS.</div>
        </div>
        <div className="hero-visual" aria-label="Illustration of a legal learning dashboard">
          <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
          <div className="visual-label label-top">MISSION CONTROL <span>SYS.01 / ACTIVE</span></div>
          <div className="dashboard-card">
            <div className="dash-head"><div><span className="dash-eyebrow">YOUR LEARNING SPACE</span><h3>Good evening, Scholar<span>.</span></h3></div><div className="dash-avatar">S</div></div>
            <div className="dash-progress"><div><span>WEEKLY STUDY TARGET</span><b>72<span>%</span></b></div><div className="progress-track"><i /></div><small>4.3 of 6 hours completed this week</small></div>
            <div className="dash-next"><div className="next-icon">§</div><div><small>NEXT UP · CP02</small><b>Negligence &amp; Duty of Care</b><span>Continue learning <i>↗</i></span></div><div className="next-arrow">↗</div></div>
            <div className="dash-bottom"><span><i /> 06 SUBJECTS</span><span>PERSONAL STUDY TRACKER</span></div>
          </div>
          <div className="floating-chip chip-one"><span>↗</span><div><b>Stay on track</b><small>One goal at a time</small></div></div>
          <div className="floating-chip chip-two"><span>✳</span><div><b>Case intelligence</b><small>Principle to application</small></div></div>
          <div className="visual-index">01 <span>/</span> 04</div>
        </div>
        <div className="hero-bottom"><span>01 / ACADEMIC INTELLIGENCE</span><span>DESIGNED FOR FOCUSED LEARNING</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="metrics"><div><b>01</b><span>ONE CONNECTED<br />LEARNING SPACE</span></div><div><b>06</b><span>CORE STUDY<br />AREAS TO EXPLORE</span></div><div><b>∞</b><span>ROOM TO GROW<br />AT YOUR OWN PACE</span></div><div className="metrics-note">LESS NOISE.<br /><em>MORE KNOWLEDGE.</em></div></section>

      <section className="platform section-pad" id="platform">
        <div className="section-heading"><div><div className="section-code">[ 01 — THE PLATFORM ]</div><h2>More than notes.<br /><span>A system for progress.</span></h2></div><p>Legal education deserves more than scattered PDFs and last-minute revision. Mission LLB brings your learning journey into one organised, purposeful environment.</p></div>
        <div className="platform-grid">
          <article className="platform-card card-large"><div className="card-top"><span>01 / LEARN</span><span>↗</span></div><div className="card-graphic graphic-learn"><div className="graphic-page"><small>LEGAL PRINCIPLE / 001</small><b>Understand<br />the law.</b><i>§</i><span>CONCEPT → CASE → APPLICATION</span></div></div><h3>Concept-first learning</h3><p>Clear, structured explanations that help you understand the principle before memorising the answer.</p></article>
          <article className="platform-card"><div className="card-top"><span>02 / ANALYSE</span><span>↗</span></div><div className="card-graphic graphic-case"><div className="case-mark">“</div><div className="case-lines"><i /><i /><i /><i /></div><b>CASE<br />BRIEFS</b></div><h3>Case law, made clear</h3><p>Connect landmark judgments to the legal rules they establish.</p></article>
          <article className="platform-card"><div className="card-top"><span>03 / PLAN</span><span>↗</span></div><div className="card-graphic graphic-plan"><div className="plan-calendar"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><i>01</i><i>02</i><i>03</i><i>04</i></div><div className="plan-caption">YOUR WEEK<br /><b>IN FOCUS</b></div></div><h3>Intentional study planning</h3><p>Turn your syllabus into manageable goals, revision blocks and milestones.</p></article>
          <article className="platform-card"><div className="card-top"><span>04 / ADVANCE</span><span>↗</span></div><div className="card-graphic graphic-track"><div className="track-ring"><span>72<small>%</small></span></div><div className="track-label">PROGRESS<br />IS PERSONAL</div></div><h3>Visible progress</h3><p>Know what you have covered and where to focus your energy next.</p></article>
        </div>
      </section>

      <section className="curriculum section-pad" id="curriculum">
        <div className="curriculum-head"><div><div className="section-code section-code-light">[ 02 — CURRICULUM ]</div><h2>Build your legal<br /><span>foundation.</span></h2></div><p>Explore a structured first-year law learning pathway. Select a subject to preview its focus.</p></div>
        <div className="curriculum-layout"><div className="subject-menu">{subjects.map((item)=><button key={item.code} className={active===item.code?"subject-row selected":"subject-row"} onClick={()=>setActive(item.code)}><span>{item.code}</span><b>{item.title}</b><i>↗</i></button>)}</div><div className="subject-preview"><div className="preview-top"><span>SUBJECT PROFILE / {selected.meta}</span><span>0{selected.code}</span></div><div className="preview-main"><div className="preview-glyph">§</div><div className="preview-tag">FOUNDATIONAL STUDY AREA</div><h3>{selected.title}<span>.</span></h3><p>{selected.detail}</p><div className="preview-bottom"><span>CONCEPTS / CASES / EXAM PRACTICE</span><span>EXPLORE <b>↗</b></span></div></div></div></div>
        <div className="curriculum-disclaimer">Illustrative subject pathway. Final course availability and university-specific syllabus mapping will be confirmed before enrolment.</div>
      </section>

      <section className="method section-pad" id="method"><div className="section-code">[ 03 — THE METHOD ]</div><div className="method-heading"><h2>Progress is a<br /><span>designed habit.</span></h2><p>A repeatable cycle that transforms a large syllabus into clear, achievable steps.</p></div><div className="method-steps"><article><span>01</span><div className="method-line" /><h3>Orient</h3><p>Choose a subject and define the next outcome.</p></article><article><span>02</span><div className="method-line" /><h3>Understand</h3><p>Learn the concept and connect it to cases.</p></article><article><span>03</span><div className="method-line" /><h3>Apply</h3><p>Practise structuring answers and solving problems.</p></article><article><span>04</span><div className="method-line" /><h3>Advance</h3><p>Review progress and move to your next goal.</p></article></div></section>

      <section className="manifesto"><div className="manifesto-symbol">M<span>.</span></div><div className="manifesto-copy"><div className="section-code section-code-light">THE MISSION STATEMENT</div><h2>Knowledge is power.<br /><span>Preparation is leverage.</span></h2><p>Build the discipline. Develop the clarity. Make your ambition measurable.</p></div><div className="manifesto-side">THINK<br />BEYOND<br /><b>THE EXAM.</b></div></section>

      <section className="membership section-pad" id="membership"><div className="section-heading"><div><div className="section-code">[ 04 — MEMBERSHIP ]</div><h2>Choose your level<br /><span>of commitment.</span></h2></div><p>Start with the essentials. Upgrade when you are ready for a deeper, more complete learning experience.</p></div><div className="membership-grid">{plans.map((plan)=><article key={plan.name} className={plan.featured?"price-card price-featured":"price-card"}>{plan.featured&&<div className="recommended">RECOMMENDED</div>}<div className="price-tier">{plan.name}</div><p>{plan.note}</p><div className="price-value">{plan.price}{plan.price!=="Free"&&<small> / {plan.name==="Annual Access"?"year":"month"}</small>}</div><a className={plan.featured?"price-button price-button-light":"price-button"} href="mailto:hello@missionllb.com?subject=Mission%20LLB%20membership%20enquiry">REQUEST ACCESS <span>↗</span></a><div className="price-rule" /><div className="includes">ACCESS INCLUDES</div><ul>{plan.items.map((item)=><li key={item}><span>＋</span>{item}</li>)}</ul></article>)}</div><p className="pricing-disclaimer">Preview pricing only. Secure registration, payment processing and subscription access are not yet active. No payment is collected on this website preview.</p></section>

      <section className="closing"><div className="closing-grid" /><div className="closing-code">MISSION LLB / YOUR NEXT CHAPTER</div><h2>Make your ambition<br /><span>actionable.</span></h2><a className="primary-button" href="#membership">START WITH A PLAN <span>↗</span></a><div className="closing-coordinates">11° N / 75° E<br />BUILT FOR THE FUTURE OF LEARNING</div></section>
      <footer className="footer"><a className="identity footer-identity" href="#"><span className="identity-symbol">M<span>.</span></span><span className="identity-name">MISSION<span>LLB / 01</span></span></a><div className="footer-tagline">A MORE INTENTIONAL WAY TO STUDY LAW.</div><div className="footer-bottom"><span>© 2026 MISSION LLB 1. ALL RIGHTS RESERVED.</span><span>EDUCATIONAL PLATFORM PREVIEW</span><a href="mailto:hello@missionllb.com">CONTACT ↗</a></div></footer>
    </main>
  );
}