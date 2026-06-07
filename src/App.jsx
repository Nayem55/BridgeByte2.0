import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════
   FADE-UP HOOK & WRAPPER
══════════════════════════════════════════ */
function useFadeUp() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeUp({ children, className = "", style = {} }) {
  const ref = useFadeUp();
  return (
    <div ref={ref} className={`fade-up ${className}`} style={style}>
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════ */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { id: "solutions", label: "Solutions" },
    { id: "why",       label: "Why Us"    },
    { id: "products",  label: "Products"  },
    { id: "process",   label: "Process"   },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[68px] backdrop-blur-xl border-b border-white/10 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(6,6,20,0.97)" : "rgba(10,10,20,0.85)",
          padding: "0 5%",
        }}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <span
            className="font-body font-semibold text-lg text-white tracking-tight"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Bridge<span className="purple-grad-text">Byte</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className="bg-transparent border-none cursor-pointer text-sm tracking-wide transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)" }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo("cta")}
          className="hidden md:block border-none rounded-lg cursor-pointer text-sm font-medium text-white tracking-wide transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
          style={{
            background: "linear-gradient(135deg,#6B3FF6,#2563EB)",
            padding: "9px 22px",
            fontFamily: "var(--font-body)",
          }}
        >
          Book a Consultation
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden bg-transparent border-none text-white text-xl cursor-pointer p-0"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="fixed top-[68px] left-0 right-0 z-40 border-b border-white/10"
          style={{ background: "#0A0A20", padding: "20px 5%" }}
        >
          <ul className="list-none m-0 p-0 grid gap-4">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="bg-transparent border-none cursor-pointer text-base"
                  style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)" }}
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollTo("cta")}
                className="w-full border-none rounded-lg cursor-pointer text-sm font-medium text-white"
                style={{
                  background: "linear-gradient(135deg,#6B3FF6,#2563EB)",
                  padding: "10px 22px",
                  fontFamily: "var(--font-body)",
                }}
              >
                Book a Consultation
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg,#0A0A14 0%,#0F0F2E 45%,#0A1628 100%)",
        padding: "100px 5% 80px",
      }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "-120px", right: "-80px",
          width: "700px", height: "700px",
          background: "radial-gradient(circle,rgba(107,63,246,0.18) 0%,transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: "-100px", left: "-60px",
          width: "500px", height: "500px",
          background: "radial-gradient(circle,rgba(37,99,235,0.14) 0%,transparent 70%)",
        }}
      />

      <div
        className="relative z-10 w-full mx-auto grid items-center gap-[60px]"
        style={{
          maxWidth: "1240px",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
        }}
      >
        {/* ── Left copy ── */}
        <FadeUp>
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full mb-8"
            style={{
              background: "rgba(107,63,246,0.15)",
              border: "1px solid rgba(107,63,246,0.35)",
              padding: "6px 16px",
            }}
          >
            <span className="w-[7px] h-[7px] rounded-full flex-shrink-0 pulse-anim" style={{ background: "#8B5CF6" }} />
            <span
              className="text-[0.75rem] font-medium uppercase tracking-[0.08em]"
              style={{ color: "#A78BFA", fontFamily: "var(--font-body)" }}
            >
              Professional Business Software
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-black text-white leading-[1.04] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.8rem,4.5vw,4.2rem)", fontFamily: "var(--font-display)" }}
          >
            <span className="block">Smarter Systems.</span>
            <span className="block">Faster Growth.</span>
            <span className="block italic grad-text" style={{ fontFamily: "var(--font-display)" }}>
              Built for Bangladesh.
            </span>
          </h1>

          <p
            className="text-[1.05rem] leading-[1.72] font-light tracking-wide mb-10"
            style={{ color: "rgba(203,213,225,0.85)", maxWidth: "480px" }}
          >
            BridgeByte builds custom Saas software, workflow automation, and business
            intelligence tools that help companies run leaner and scale faster.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-3.5 flex-wrap mb-[52px]">
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-[10px] text-[0.95rem] font-medium text-white btn-glow transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg,#6B3FF6,#2563EB)",
                padding: "14px 30px",
                fontFamily: "var(--font-body)",
              }}
            >
              Explore Solutions
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-[10px] text-[0.95rem] font-normal transition-all duration-200 hover:border-white/50"
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(255,255,255,0.18)",
                padding: "13px 28px",
                fontFamily: "var(--font-body)",
              }}
            >
              Book a Free Call
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-9 flex-wrap">
            {[
              ["150+", "Businesses Served"],
              ["98%",  "Client Retention"],
              ["40%",  "Avg. Efficiency Gain"],
            ].map(([num, label], i) => (
              <div key={label} className="flex items-center gap-9">
                {i > 0 && (
                  <div className="self-stretch min-h-[36px] w-px" style={{ background: "rgba(255,255,255,0.12)" }} />
                )}
                <div>
                  <div
                    className="font-display font-bold text-[2rem] leading-none purple-grad-text"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {num}
                  </div>
                  <div className="text-[0.78rem] font-normal mt-1 tracking-wide" style={{ color: "#94A3B8" }}>
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* ── Right: dashboard mockup ── */}
        <FadeUp>
          <div
            className="rounded-[20px] backdrop-blur-[10px]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
              padding: "28px",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-[0.88rem] font-medium text-white" style={{ fontFamily: "var(--font-body)" }}>
                Business Intelligence Hub
              </span>
              <span
                className="text-[0.7rem] font-semibold tracking-[0.06em] rounded-full px-[10px] py-[3px]"
                style={{
                  background: "rgba(74,222,128,0.15)",
                  border: "1px solid rgba(74,222,128,0.3)",
                  color: "#4ADE80",
                }}
              >
                ● LIVE
              </span>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                ["Revenue", "৳4.2M", "↑ 18.4%", false],
                ["Orders",  "284",   "↑ 6.1%",  false],
                ["Tasks Done", "1,340", "↓ 2.3%", true],
              ].map(([label, val, change, neg]) => (
                <div
                  key={label}
                  className="rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "14px",
                  }}
                >
                  <div
                    className="text-[0.7rem] font-medium uppercase tracking-[0.04em] mb-1.5"
                    style={{ color: "#94A3B8" }}
                  >
                    {label}
                  </div>
                  <div
                    className="text-[1.3rem] font-semibold text-white tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {val}
                  </div>
                  <div className="text-[0.7rem] mt-0.5" style={{ color: neg ? "#F87171" : "#4ADE80" }}>
                    {change}
                  </div>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div>
              <div
                className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] mb-2.5"
                style={{ color: "#94A3B8" }}
              >
                Department Efficiency
              </div>
              {[["Sales", 88], ["Inventory", 74], ["Support", 92]].map(([name, pct]) => (
                <div key={name} className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[0.7rem] text-right flex-shrink-0 tracking-wide"
                    style={{ color: "#94A3B8", width: "68px" }}
                  >
                    {name}
                  </span>
                  <div
                    className="flex-1 h-[6px] rounded-[3px] overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                  >
                    <div
                      className="h-full rounded-[3px]"
                      style={{ width: `${pct}%`, background: "linear-gradient(90deg,#8B5CF6,#60A5FA)" }}
                    />
                  </div>
                  <span className="text-[0.68rem] text-right" style={{ color: "#94A3B8", width: "30px" }}>
                    {pct}%
                  </span>
                </div>
              ))}
            </div>

            {/* AI insight widget */}
            <div
              className="mt-3.5 flex items-center gap-2.5 rounded-xl"
              style={{
                background: "rgba(107,63,246,0.10)",
                border: "1px solid rgba(107,63,246,0.25)",
                padding: "12px 14px",
              }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0 pulse-anim" style={{ background: "#8B5CF6" }} />
              <span className="text-[0.78rem] font-light tracking-wide" style={{ color: "#C4B5FD" }}>
                AI Insight: Reorder stock for 3 SKUs — predicted shortage in 4 days
              </span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   SOLUTIONS
══════════════════════════════════════════ */
const SOLUTIONS = [
  { icon: "🤖", title: "Saas & Automation Tools",     desc: "AI-powered insights, intelligent chatbots, document processing, and predictive analytics woven into your daily operations." },
  { icon: "⚡", title: "Workflow Automation",        desc: "Eliminate manual bottlenecks with automated task flows, approvals, notifications, and integrations across your entire stack." },
  { icon: "📦", title: "POS & Inventory Systems",    desc: "Real-time stock tracking, automated reorder alerts, and multi-location retail management with intelligent point-of-sale software." },
  { icon: "📊", title: "CRM & Sales Dashboards",     desc: "Track leads, close deals faster, and gain 360° visibility into your pipeline with custom dashboards and AI-assisted analytics." },
  { icon: "💻", title: "Custom Web & Mobile Apps",   desc: "Purpose-built applications tailored to your business — from internal tools to customer-facing platforms, built to last." },
];

function Solutions() {
  return (
    <section id="solutions" style={{ background: "#F7F7FD", padding: "96px 5%" }}>
      <div className="mx-auto" style={{ maxWidth: "1200px" }}>
        <FadeUp>
          <span
            className="block text-[0.7rem] font-semibold uppercase tracking-[0.14em] mb-4"
            style={{ color: "#6B3FF6", fontFamily: "var(--font-body)" }}
          >
            What We Build
          </span>
          <h2
            className="font-black leading-[1.06] tracking-tight mb-5 text-[#1E1B4B]"
            style={{ fontSize: "clamp(2.2rem,3.8vw,3.4rem)", fontFamily: "var(--font-display)" }}
          >
            Solutions That Drive<br />
            <em className="italic" style={{ color: "#6B3FF6" }}>Real Business Results</em>
          </h2>
          <p className="text-[1.05rem] leading-[1.74] font-light tracking-wide" style={{ color: "#5A6478", maxWidth: "560px" }}>
            From POS systems to AI automation — we build the software your business needs to operate, compete, and scale.
          </p>
        </FadeUp>

        <FadeUp
          className="grid gap-5 mt-14"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}
        >
          {SOLUTIONS.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="sol-card bg-white rounded-2xl border border-[#E8E8F4] transition-all duration-200"
              style={{ padding: "28px" }}
            >
              <div
                className="w-[46px] h-[46px] rounded-[10px] flex items-center justify-center text-[1.3rem] mb-[18px] flex-shrink-0"
                style={{ background: "linear-gradient(135deg,rgba(107,63,246,0.12),rgba(37,99,235,0.08))" }}
              >
                {icon}
              </div>
              <div
                className="text-[0.975rem] font-semibold text-[#1E1B4B] mb-2.5 tracking-tight"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {title}
              </div>
              <p className="text-[0.85rem] leading-[1.68] font-light" style={{ color: "#5A6478" }}>
                {desc}
              </p>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   WHY BRIDGEBYTE
══════════════════════════════════════════ */
const REASONS = [
  { icon: "🇧🇩", title: "Bangladesh-First Approach",    desc: "We understand the local market, regulatory environment, and the real challenges Bangladeshi businesses face every day." },
  { icon: "🧠", title: "Saas & Automation Expertise",     desc: "We don't just build apps — we embed intelligence into your workflows so your team can focus on growth, not repetitive admin." },
  { icon: "🛡️", title: "Enterprise-Grade Reliability",  desc: "Scalable architecture, robust security, and 99.9% uptime SLAs — even for fast-moving startups and SMEs." },
  { icon: "🤝", title: "Dedicated Partnership Model",   desc: "Every client gets a dedicated team. We're not a vendor — we're a long-term technology partner invested in your success." },
];

function Why() {
  return (
    <section
      id="why"
      style={{
        background: "linear-gradient(140deg,#0C0C20 0%,#0F1535 100%)",
        padding: "96px 5%",
        color: "#fff",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1200px" }}>
        <FadeUp>
          <span
            className="block text-[0.7rem] font-semibold uppercase tracking-[0.14em] mb-4"
            style={{ color: "#A78BFA", fontFamily: "var(--font-body)" }}
          >
            Why BridgeByte
          </span>
          <h2
            className="font-black leading-[1.06] tracking-tight mb-5 text-white"
            style={{ fontSize: "clamp(2.2rem,3.8vw,3.4rem)", fontFamily: "var(--font-display)" }}
          >
            The Technology Partner<br />
            <em className="italic" style={{ color: "#A78BFA" }}>Your Business Deserves</em>
          </h2>
          <p className="text-[1.05rem] leading-[1.74] font-light tracking-wide" style={{ color: "#94A3B8", maxWidth: "560px" }}>
            Local insight. World-class engineering. Real results for businesses across Bangladesh.
          </p>
        </FadeUp>

        <div
          className="grid items-start mt-[52px] gap-[60px]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))" }}
        >
          {/* Reasons list */}
          <FadeUp className="grid gap-3">
            {REASONS.map(({ icon, title, desc }) => (
              <div key={title} className="why-card flex gap-[18px] rounded-[14px] cursor-default" style={{ padding: "22px" }}>
                <div
                  className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-[1.1rem]"
                  style={{ background: "linear-gradient(135deg,rgba(107,63,246,0.25),rgba(37,99,235,0.15))" }}
                >
                  {icon}
                </div>
                <div>
                  <div className="text-[0.95rem] font-semibold text-white mb-1.5 tracking-tight" style={{ fontFamily: "var(--font-body)" }}>
                    {title}
                  </div>
                  <p className="text-[0.83rem] leading-[1.68] font-light m-0" style={{ color: "#94A3B8" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </FadeUp>

          {/* Stats + testimonial */}
          <FadeUp
            className="rounded-[20px]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              padding: "36px",
            }}
          >
            {[
              ["150+", "Projects delivered across Bangladesh"],
              ["98%",  "Client satisfaction rate"],
              ["40%",  "Average efficiency gains reported"],
            ].map(([num, label], i) => (
              <div key={label}>
                {i > 0 && <div className="h-px my-7" style={{ background: "rgba(255,255,255,0.07)" }} />}
                <div
                  className="font-black leading-none tracking-tight purple-grad-text"
                  style={{ fontSize: "3.6rem", fontFamily: "var(--font-display)" }}
                >
                  {num}
                </div>
                <div className="text-[0.84rem] font-light mt-1.5 tracking-wide" style={{ color: "#94A3B8" }}>
                  {label}
                </div>
              </div>
            ))}

            <div className="h-px my-7" style={{ background: "rgba(255,255,255,0.07)" }} />

            <div
              className="rounded-xl"
              style={{
                background: "rgba(107,63,246,0.10)",
                border: "1px solid rgba(107,63,246,0.20)",
                padding: "20px",
              }}
            >
              <p className="text-[0.88rem] leading-[1.74] font-light italic mb-3 m-0" style={{ color: "#CBD5E1" }}>
                "BridgeByte transformed how we manage our supply chain. Their POS and inventory system saved us 15 hours a week in manual work."
              </p>
              <span className="text-[0.75rem] font-semibold tracking-[0.04em]" style={{ color: "#A78BFA" }}>
                — Retail Operations Manager, Dhaka
              </span>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   PRODUCTS
══════════════════════════════════════════ */
const PRODUCTS = [
  {
    tag: "Inventory",
    title: "Smart Inventory Manager",
    desc: "Real-time stock tracking, automated reorder alerts, multi-warehouse support, and barcode integration built for Bangladeshi retail.",
    features: ["Multi-location sync", "AI-powered low-stock alerts", "Barcode scanning", "Sales analytics dashboard"],
  },
  {
    tag: "CRM",
    title: "BridgeByte CRM",
    desc: "A powerful yet simple CRM for local sales teams. Track leads, manage follow-ups, and close more deals with AI-assisted pipeline management.",
    features: ["AI lead scoring", "Pipeline automation", "WhatsApp integration", "Custom reports"],
  },
  {
    tag: "Automation",
    title: "Workflow Studio",
    desc: "Drag-and-drop workflow builder that connects your existing tools. Automate approvals, notifications, and repetitive processes — no code needed.",
    features: ["Visual flow builder", "100+ integrations", "Conditional logic", "Full audit trails"],
  },
];

function Products() {
  return (
    <section id="products" style={{ background: "#fff", padding: "96px 5%" }}>
      <div className="mx-auto" style={{ maxWidth: "1200px" }}>
        <FadeUp>
          <span
            className="block text-[0.7rem] font-semibold uppercase tracking-[0.14em] mb-4"
            style={{ color: "#6B3FF6", fontFamily: "var(--font-body)" }}
          >
            Featured Software
          </span>
          <h2
            className="font-black leading-[1.06] tracking-tight mb-5 text-[#1E1B4B]"
            style={{ fontSize: "clamp(2.2rem,3.8vw,3.4rem)", fontFamily: "var(--font-display)" }}
          >
            Products Built to<br />
            <em className="italic" style={{ color: "#6B3FF6" }}>Scale With You</em>
          </h2>
          <p className="text-[1.05rem] leading-[1.74] font-light tracking-wide" style={{ color: "#5A6478", maxWidth: "560px" }}>
            Ready-to-deploy platforms with deep customization, or fully bespoke solutions built from the ground up.
          </p>
        </FadeUp>

        <FadeUp
          className="grid gap-6 mt-[52px]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))" }}
        >
          {PRODUCTS.map(({ tag, title, desc, features }) => (
            <div
              key={title}
              className="prod-card rounded-[18px] overflow-hidden border border-[#E8E8F4] bg-white"
            >
              {/* Dark top */}
              <div style={{ background: "linear-gradient(135deg,#0A0A20,#0F1535)", padding: "28px" }}>
                <span
                  className="inline-block text-[0.68rem] font-semibold uppercase tracking-[0.1em] rounded-full mb-4"
                  style={{
                    background: "rgba(167,139,250,0.2)",
                    border: "1px solid rgba(167,139,250,0.3)",
                    color: "#A78BFA",
                    padding: "4px 12px",
                  }}
                >
                  {tag}
                </span>
                <div
                  className="text-[1.3rem] font-bold text-white mb-2.5 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </div>
                <p className="text-[0.84rem] leading-[1.68] font-light m-0" style={{ color: "rgba(255,255,255,0.52)" }}>
                  {desc}
                </p>
              </div>

              {/* Light bottom */}
              <div style={{ padding: "22px 28px" }}>
                <ul className="list-none m-0 p-0 grid gap-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[0.84rem] font-light" style={{ color: "#475569" }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "linear-gradient(135deg,#6B3FF6,#2563EB)" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="prod-link inline-flex items-center gap-1.5 text-[0.84rem] font-medium tracking-wide mt-4"
                  style={{ color: "#6B3FF6" }}
                >
                  Get started →
                </a>
              </div>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   PROCESS
══════════════════════════════════════════ */
const STEPS = [
  { num: 1, title: "Discovery Call",    desc: "We learn about your business, challenges, and goals — then map out the right solution together." },
  { num: 2, title: "Scoping & Design",  desc: "We produce a clear scope, architecture, and clickable prototype so you know exactly what you're getting." },
  { num: 3, title: "Agile Build",       desc: "Sprint-based development with regular demos and your feedback built directly into each cycle." },
  { num: 4, title: "Launch & Support",  desc: "We deploy, train your team, and stay on as your technology partner for ongoing growth and improvements." },
];

function Process() {
  return (
    <section
      id="process"
      style={{
        background: "linear-gradient(180deg,#F7F7FD 0%,#fff 100%)",
        padding: "96px 5%",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1200px" }}>
        {/* Header — centred */}
        <FadeUp className="text-center mb-[52px]" style={{ maxWidth: "600px", margin: "0 auto 52px" }}>
          <span
            className="block text-[0.7rem] font-semibold uppercase tracking-[0.14em] mb-4"
            style={{ color: "#6B3FF6", fontFamily: "var(--font-body)" }}
          >
            Our Process
          </span>
          <h2
            className="font-black leading-[1.06] tracking-tight mb-5 text-[#1E1B4B]"
            style={{ fontSize: "clamp(2.2rem,3.8vw,3.4rem)", fontFamily: "var(--font-display)" }}
          >
            From Idea to{" "}
            <em className="italic" style={{ color: "#6B3FF6" }}>Impact</em>
            <br />in 4 Steps
          </h2>
          <p className="text-[1.05rem] leading-[1.74] font-light m-0" style={{ color: "#5A6478" }}>
            A clear, collaborative process that keeps you in control at every stage.
          </p>
        </FadeUp>

        {/* Steps grid — uses CSS class defined in index.css */}
        <FadeUp className="process-grid">
          {STEPS.map(({ num, title, desc }) => (
            <div key={num} className="text-center relative z-10" style={{ padding: "0 16px" }}>
              <div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-[18px] step-ring"
                style={{ background: "linear-gradient(135deg,#6B3FF6,#2563EB)" }}
              >
                <span
                  className="text-[1.4rem] font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {num}
                </span>
              </div>
              <div
                className="text-[0.95rem] font-semibold text-[#1E1B4B] mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {title}
              </div>
              <p className="text-[0.82rem] leading-[1.65] font-light m-0" style={{ color: "#5A6478" }}>
                {desc}
              </p>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   CTA
══════════════════════════════════════════ */
function CTA() {
  return (
    <section
      id="cta"
      className="text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#07061A 0%,#0F0F30 50%,#0A1525 100%)",
        padding: "96px 5%",
      }}
    >
      {/* Orb */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "600px", height: "600px",
          background: "radial-gradient(circle,rgba(107,63,246,0.12) 0%,transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto" style={{ maxWidth: "1200px" }}>
        <FadeUp>
          <span
            className="block text-[0.7rem] font-semibold uppercase tracking-[0.14em] mb-4"
            style={{ color: "#A78BFA", fontFamily: "var(--font-body)" }}
          >
            Get Started
          </span>
          <h2
            className="font-black leading-[1.06] tracking-tight mb-5 text-white mx-auto"
            style={{ fontSize: "clamp(2.2rem,3.8vw,3.4rem)", fontFamily: "var(--font-display)", maxWidth: "700px" }}
          >
            Ready to Build{" "}
            <em className="italic" style={{ color: "#A78BFA" }}>Smarter</em>
            <br />with AI?
          </h2>
          <p
            className="text-[1.05rem] leading-[1.74] font-light mx-auto mb-[38px]"
            style={{ color: "#94A3B8", maxWidth: "500px" }}
          >
            Let's talk about what BridgeByte can build for your business. No sales pressure — just a real conversation about what's possible.
          </p>
          <div className="flex justify-center gap-3.5 flex-wrap">
            <a
              href="mailto:bridgebyte.bd@gmail.com"
              className="inline-flex items-center gap-2 rounded-[10px] text-[0.95rem] font-medium text-white btn-glow transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg,#6B3FF6,#2563EB)",
                padding: "14px 30px",
                fontFamily: "var(--font-body)",
              }}
            >
              Book a Free Consultation
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-[10px] text-[0.95rem] font-normal transition-all duration-200"
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(255,255,255,0.18)",
                padding: "13px 28px",
                fontFamily: "var(--font-body)",
              }}
            >
              Explore Solutions
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{ background: "#060612", color: "rgba(255,255,255,0.52)", padding: "56px 5% 32px" }}>
      <div className="mx-auto" style={{ maxWidth: "1200px" }}>
        <div
          className="grid gap-10 pb-10 mb-7 border-b"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div
              className="font-semibold text-lg text-white tracking-tight mb-3.5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Bridge<span className="purple-grad-text">Byte</span>
            </div>
            <p className="text-[0.82rem] leading-[1.72] font-light m-0" style={{ maxWidth: "220px" }}>
              Professional business software for growing companies in Bangladesh. We build systems that help you work smarter.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4
              className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] mb-4 m-0"
              style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body)" }}
            >
              Solutions
            </h4>
            <ul className="list-none m-0 p-0 grid gap-2">
              {["POS & Inventory", "Workflow Automation", "CRM & Dashboards", "Custom Development"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-[0.83rem] font-light transition-colors duration-150 hover:text-[#A78BFA]"
                    style={{ color: "rgba(255,255,255,0.42)" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] mb-4 m-0"
              style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body)" }}
            >
              Company
            </h4>
            <ul className="list-none m-0 p-0 grid gap-2">
              {["About Us", "Our Process", "Careers", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-[0.83rem] font-light transition-colors duration-150 hover:text-[#A78BFA]"
                    style={{ color: "rgba(255,255,255,0.42)" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] mb-4 m-0"
              style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body)" }}
            >
              Contact
            </h4>
            <ul className="list-none m-0 p-0 grid gap-2.5">
              {[["✉", "bridgebyte.bd@gmail.com"],["Ph", "+880 1814-201601"], ["📍", "Dhaka, Bangladesh"]].map(([icon, text]) => (
                <li key={text} className="flex items-center gap-2 text-[0.83rem] font-light">
                  <span className="flex-shrink-0" style={{ color: "#A78BFA" }}>{icon}</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex items-center justify-between flex-wrap gap-2.5">
          <span className="text-[0.76rem] font-light">© 2026 BridgeByte. All rights reserved.</span>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[0.76rem] transition-colors duration-150 hover:text-[#A78BFA]"
                style={{ color: "rgba(255,255,255,0.32)" }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════
   APP ROOT
══════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Why />
        <Products />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
