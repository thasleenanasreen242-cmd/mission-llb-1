"use client";

import { useState } from "react";

const subjects = [
  { code: "CP01", name: "Law of Contracts", detail: "Offer, acceptance, consideration, capacity and remedies", tag: "Core paper" },
  { code: "CP02", name: "Law of Torts", detail: "Negligence, liability, defences and consumer protection", tag: "Core paper" },
  { code: "CP03", name: "Constitutional Law I", detail: "Constitutional foundations, rights and the State", tag: "Core paper" },
  { code: "CP04", name: "Family Law I", detail: "Marriage, divorce, maintenance, adoption and guardianship", tag: "Core paper" },
  { code: "CP05", name: "Law of Crimes I", detail: "General principles, offences and criminal liability", tag: "Core paper" },
  { code: "OP01", name: "Legal Language", detail: "Legal vocabulary, interpretation, drafting and research", tag: "Optional paper" },
];

const plans = [
  { name: "Starter", price: "Free", period: "forever", description: "Build a steady study habit.", features: ["Limited topic library", "Basic study planner", "Weekly revision checklist", "Community updates"], action: "Start for free", featured: false },
  { name: "Scholar", price: "₹199", period: "per month", description: "A complete study companion.", features: ["Full subject-wise notes", "Case law briefs and examples", "PYQ-focused preparation", "Personal progress dashboard", "Revision reminders"], action: "Choose Scholar", featured: true },
  { name: "Annual", price: "₹1,499", period: "per year", description: "Stay prepared all academic year.", features: ["Everything in Scholar", "Annual study roadmap", "Downloadable revision packs", "Priority learning support", "Save more than monthly"], action: "Choose Annual", featured: false },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubject, setActiveSubject] = useState("CP02");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const selected = subjects.find((subject) => subject.code === activeSubject) ?? subjects[1];

  return (
    <main>
      <div className="announcement">A smarter way to prepare for your law exams <span>Explore Mission LLB ↓</span></div>
      <header className="site-header">
        <a className="brand" href="#"><span className="brand-mark">M</span><span>MISSION <b>LLB 1</b><small>LEARN WITH PURPOSE</small></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Why Mission LLB</a>
          <a href="#subjects" onClick={() => setMenuOpen(false)}>Subjects</a>
          <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#plans" onClick={() => setMenuOpen(false)}>Plans</a>
        </nav>
        <a className="nav-cta" href="#plans">Get started <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> BUILT FOR LAW STUDENTS</div>
          <h1>Your law degree.<br /><em>Your strategy.</em><br />Your mission.</h1>
          <p className="hero-lede">Make every study session count. Learn the law with clear notes, important cases and a plan that keeps you moving forward.</p>
          <div className="hero-actions"><a className="button button-dark" href="#plans">Start your journey <span>↗</span></a><a className="text-link" href="#features">Discover the platform <span>↓</span></a></div>
          <div className="hero-proof"><div className="proof-avatars"><i>LL</i><i>⚖</i><i>✦</i></div><span>Focused learning. Consistent progress.</span></div>
        </div>
        <div className="hero-art">
          <div className="art-glow" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="law-seal"><span>THE PURSUIT OF</span><strong>JUSTICE</strong><b>⚖</b><small>KNOWLEDGE · DISCIPLINE · PURPOSE</small></div>
          <div className="floating-note note-top"><span className="note-icon">✦</span><div><b>Study with direction</b><small>One topic at a time</small></div></div>
          <div className="floating-note note-bottom"><span className="note-check">✓</span><div><b>Progress, not pressure</b><small>Build your momentum</small></div></div>
          <div className="art-caption">THE NEXT CHAPTER STARTS HERE <span>01 / 06</span></div>
        </div>
      </section>

      <section className="ticker"><span>LEARN WITH CLARITY</span><b>✳</b><span>REVISE WITH PURPOSE</span><b>✳</b><span>PREPARE WITH CONFIDENCE</span><b>✳</b><span>MAKE YOUR MARK</span></section>

      <section className="section intro-section" id="features">
        <div className="section-kicker">01 — THE MISSION</div>
        <div className="intro-grid"><h2>Law school is demanding.<br /><em>Your study system<br />should make it simpler.</em></h2><div className="intro-copy"><p>Mission LLB 1 brings your learning resources and exam preparation into one focused space. No scattered materials. No studying without direction. Just a practical system to help you understand, remember and apply the law.</p><a className="under-link" href="#how">See how it works <span>↗</span></a></div></div>
        <div className="feature-grid">
          <article className="feature-card"><span className="feature-number">01</span><div className="feature-icon">▤</div><h3>Understand the subject</h3><p>Structured notes that break complex legal topics into clear, manageable concepts.</p></article>
          <article className="feature-card"><span className="feature-number">02</span><div className="feature-icon">§</div><h3>Learn through cases</h3><p>Case briefs that connect legal principles with landmark judicial decisions.</p></article>
          <article className="feature-card"><span className="feature-number">03</span><div className="feature-icon">◷</div><h3>Plan your revision</h3><p>Turn your syllabus into a realistic study plan with milestones and revision time.</p></article>
          <article className="feature-card"><span className="feature-number">04</span><div className="feature-icon">↗</div><h3>Track your progress</h3><p>See what you have covered, what needs attention and what comes next.</p></article>
        </div>
      </section>

      <section className="subjects-section" id="subjects"><div className="section subject-inner"><div className="section-kicker light-kicker">02 — YOUR LEARNING SPACE</div><div className="subject-heading"><h2>One syllabus.<br /><em>A clearer way through.</em></h2><p>Explore your subjects and build a stronger foundation, topic by topic.</p></div>
        <div className="subject-browser"><div className="subject-list">{subjects.map((subject) => <button key={subject.code} className={activeSubject === subject.code ? "subject-tab active" : "subject-tab"} onClick={() => setActiveSubject(subject.code)}><span>{subject.code}</span><b>{subject.name}</b><span className="tab-arrow">↗</span></button>)}</div><div className="subject-detail"><div className="detail-top"><span>{selected.code} / SUBJECT OVERVIEW</span><span className="detail-star">✳</span></div><div className="detail-content"><span className="subject-tag">{selected.tag}</span><h3>{selected.name}</h3><p>{selected.detail}.</p><div className="detail-bottom"><span>LEARN AT YOUR PACE</span><span className="detail-symbol">§</span></div></div></div></div>
        <p className="subject-note">Subject names shown as an illustrative first-year law curriculum. Available courses and materials will be confirmed before enrolment.</p>
      </div></section>

      <section className="section how-section" id="how"><div className="section-kicker">03 — THE METHOD</div><div className="how-heading"><h2>Small steps.<br /><em>Meaningful progress.</em></h2><p>A simple learning cycle designed to help you stay consistent throughout the semester.</p></div><div className="steps"><article><span>01</span><div className="step-line" /><h3>Choose your subject</h3><p>Start with the paper or topic you need to work on today.</p></article><article><span>02</span><div className="step-line" /><h3>Learn the concept</h3><p>Use focused notes and case explanations to understand the law.</p></article><article><span>03</span><div className="step-line" /><h3>Practise and revise</h3><p>Work through questions and revisit topics on your schedule.</p></article><article><span>04</span><div className="step-line" /><h3>Track your growth</h3><p>Mark progress and keep your next learning goal in sight.</p></article></div></section>

      <section className="quote-band"><span className="quote-mark">“</span><blockquote>Success in law is not just about what you know.<br /><em>It is about how consistently you prepare.</em></blockquote><span className="quote-credit">THE MISSION LLB MINDSET</span></section>

      <section className="section pricing-section" id="plans"><div className="section-kicker">04 — MEMBERSHIP</div><div className="pricing-heading"><div><h2>Choose your<br /><em>way forward.</em></h2></div><p>Start with the essentials or unlock a more complete study experience. Choose the plan that fits your goals.</p></div><div className="plans-grid">{plans.map((plan) => <article className={plan.featured ? "plan-card featured-plan" : "plan-card"} key={plan.name}>{plan.featured && <div className="popular-label">MOST POPULAR</div>}<div className="plan-name">{plan.name}</div><p className="plan-description">{plan.description}</p><div className="plan-price">{plan.price}<small>{plan.period}</small></div><a className={plan.featured ? "button button-light" : "button button-outline"} href="mailto:hello@missionllb.com?subject=Mission%20LLB%20membership%20enquiry">{plan.action} <span>↗</span></a><div className="plan-divider" /><div className="includes-label">WHAT'S INCLUDED</div><ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul></article>)}</div><p className="pricing-note">Illustrative launch pricing. Membership features, payment processing and subscription access will be activated after setup. No payment is collected on this preview website.</p></section>

      <section className="faq-section"><div className="section faq-grid"><div><div className="section-kicker light-kicker">05 — GOOD TO KNOW</div><h2>A few things<br /><em>you may be wondering.</em></h2><p>More details about the Mission LLB learning experience.</p></div><div className="faq-list">{[{q:"Who is Mission LLB 1 for?",a:"It is being designed for law students who want structured study materials, a practical revision plan and a more organised way to prepare for examinations."},{q:"Will the platform cover my university syllabus?",a:"The first version is planned around a structured first-year law curriculum. Exact university-specific syllabus mapping and course availability will be confirmed before enrolment."},{q:"Can I study on my phone?",a:"Yes. The website is designed to work across mobile, tablet and desktop screens."},{q:"How do subscriptions work?",a:"The membership options shown are planned launch tiers. Secure accounts, subscription billing and paid content access will be enabled only after the required services are connected."}].map((item,i)=><div className="faq-item" key={item.q}><button onClick={()=>setFaqOpen(faqOpen===i?null:i)}><span>{item.q}</span><b>{faqOpen===i?"−":"+"}</b></button>{faqOpen===i&&<p>{item.a}</p>}</div>)}</div></div></section>

      <section className="final-cta"><div className="section-kicker">YOUR NEXT CHAPTER</div><h2>Make your preparation<br /><em>part of your progress.</em></h2><a className="button button-dark" href="#plans">Explore membership <span>↗</span></a><div className="cta-watermark">M</div></section>
      <footer className="footer"><a className="brand footer-brand" href="#"><span className="brand-mark">M</span><span>MISSION <b>LLB 1</b><small>LEARN WITH PURPOSE</small></span></a><p>Built for focused learners. Made for the journey ahead.</p><div className="footer-bottom"><span>© 2026 Mission LLB 1. All rights reserved.</span><span>Educational platform preview · Terms and policies to be published</span><a href="mailto:hello@missionllb.com">Contact ↗</a></div></footer>
    </main>
  );
}