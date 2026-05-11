import React, { useEffect } from "react";

const skills = [
  ["Requirements Gathering", "Discovery", "requirements"],
  ["BRD / FRD Documentation", "Specification", "doc"],
  ["Agile & Scrum", "Delivery", "agile"],
  ["Azure DevOps", "Tooling", "azure"],
  ["JIRA", "Tooling", "jira"],
  ["Power BI", "Analytics", "pbi"],
  ["SQL", "Data", "sql"],
  ["UAT Coordination", "Quality", "uat"],
  ["Process Mapping", "Operations", "process"],
  ["Gap Analysis", "Strategy", "gap"],
  ["Stakeholder Management", "Leadership", "stake"],
  ["AI Workflow Design", "Automation", "ai"],
  ["CLM", "Domain", "clm"],
  ["DocuSign", "E-Signature", "sign"],
  ["Data Validation", "Quality", "data"],
  ["Workshop Facilitation", "Leadership", "work"],
];

const tools = [
  ["Azure DevOps", "A"],
  ["JIRA", "J"],
  ["Power BI", "P"],
  ["SQL", "S"],
  ["DocuSign", "D"],
  ["Adobe Sign", "a"],
  ["Figma", "F"],
  ["Excel", "E"],
  ["Agile Scrum", "g"],
  ["Visio", "V"],
];

const achievements = [
  ["01", "Promoted to Support Tech Lead within two years.", ""],
  ["02", "Reduced manual effort by 40% through structured automation.", "dark"],
  ["03", "Improved release turnaround time by 30%.", ""],
  ["04", "Zero critical post-release defects across major rollouts.", "accent"],
  ["05", "Built reusable workflow templates adopted across product tracks.", ""],
  ["06", "Delivered enterprise AI workflow solutions end-to-end.", ""],
];

const certifications = [
  ["Business Analyst", "Udemy", "B"],
  ["Manual Testing", "Udemy", "M"],
  ["Java Programming", "Globsyn", "J"],
  ["ASP.NET", "Globsyn", "A"],
];

function Icon({ name }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  const stroke = {
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    requirements: (
      <svg {...common}>
        <path d="M9 11l3 3 7-7M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" {...stroke} />
      </svg>
    ),
    doc: (
      <svg {...common}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" {...stroke} />
        <path d="M14 2v6h6M9 13h6M9 17h4" {...stroke} />
      </svg>
    ),
    agile: (
      <svg {...common}>
        <path d="M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5" {...stroke} />
      </svg>
    ),
    azure: (
      <svg {...common}>
        <path d="m4 20 6-14 4 8-4 6ZM14 14l4-12 4 18H8" {...stroke} />
      </svg>
    ),
    jira: (
      <svg {...common}>
        <rect x="3" y="3" width="7" height="7" {...stroke} />
        <rect x="14" y="3" width="7" height="7" {...stroke} />
        <rect x="3" y="14" width="7" height="7" {...stroke} />
        <rect x="14" y="14" width="7" height="7" {...stroke} />
      </svg>
    ),
    pbi: (
      <svg {...common}>
        <path d="M3 3v18h18M7 17v-6M12 17V7M17 17V9" {...stroke} />
      </svg>
    ),
    sql: (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="9" ry="3" {...stroke} />
        <path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6" {...stroke} />
      </svg>
    ),
    uat: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" {...stroke} />
        <path d="m8 12 3 3 5-6" {...stroke} />
      </svg>
    ),
    process: (
      <svg {...common}>
        <rect x="3" y="3" width="6" height="6" rx="1" {...stroke} />
        <rect x="15" y="3" width="6" height="6" rx="1" {...stroke} />
        <rect x="3" y="15" width="6" height="6" rx="1" {...stroke} />
        <rect x="15" y="15" width="6" height="6" rx="1" {...stroke} />
        <path d="M9 6h6M6 9v6M18 9v6M9 18h6" {...stroke} />
      </svg>
    ),
    gap: (
      <svg {...common}>
        <path d="M3 12h6M15 12h6" {...stroke} />
        <circle cx="12" cy="12" r="3" {...stroke} />
      </svg>
    ),
    stake: (
      <svg {...common}>
        <circle cx="9" cy="8" r="3.5" {...stroke} />
        <circle cx="17" cy="10" r="3" {...stroke} />
        <path d="M3 20a6 6 0 0 1 12 0M15 19a5 5 0 0 1 7 0" {...stroke} />
      </svg>
    ),
    ai: (
      <svg {...common}>
        <rect x="5" y="6" width="14" height="12" rx="3" {...stroke} />
        <circle cx="9" cy="12" r="1.4" fill="currentColor" />
        <circle cx="15" cy="12" r="1.4" fill="currentColor" />
        <path d="M12 3v3M9 6V4M15 6V4M2 12h2M20 12h2" {...stroke} />
      </svg>
    ),
    clm: (
      <svg {...common}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6" {...stroke} />
        <path d="m9 16 2 2 4-4" {...stroke} />
      </svg>
    ),
    sign: (
      <svg {...common}>
        <path d="M3 17s4-1 6-3 4-7 6-7 4 4 0 8c-2 2-4 2-4 2 1 1 6 1 10 0" {...stroke} />
      </svg>
    ),
    data: (
      <svg {...common}>
        <path d="M3 3h18v6H3zM3 15h18v6H3zM7 6h.01M7 18h.01M11 6h6M11 18h6" {...stroke} />
      </svg>
    ),
    work: (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" {...stroke} />
        <circle cx="5" cy="6" r="2" {...stroke} />
        <circle cx="19" cy="6" r="2" {...stroke} />
        <circle cx="5" cy="18" r="2" {...stroke} />
        <circle cx="19" cy="18" r="2" {...stroke} />
        <path d="m7 7 3 3m4 0 3-3m-10 10 3-3m4 0 3 3" {...stroke} />
      </svg>
    ),
  };

  return icons[name] || icons.requirements;
}

function ArrowIcon({ size = 14 }) {
  return (
    <svg className="arr" width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3.5 10.5 10.5 3.5M10.5 3.5h-6M10.5 3.5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PortraitArt() {
  return (
    <svg className="avatar-svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="avatarBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#edf7f5" />
          <stop offset="1" stopColor="#e7ecf6" />
        </linearGradient>
        <linearGradient id="avatarSuit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1f2937" />
          <stop offset="1" stopColor="#111827" />
        </linearGradient>
        <pattern id="avatarDots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(15, 118, 110, .15)" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill="url(#avatarBg)" />
      <rect width="400" height="500" fill="url(#avatarDots)" />
      <circle cx="202" cy="206" r="142" fill="#dff3ee" />
      <circle cx="330" cy="78" r="28" fill="none" stroke="#b45309" strokeWidth="2" />
      <rect x="42" y="66" width="42" height="42" rx="10" fill="none" stroke="#0f766e" strokeWidth="2" />
      <path d="M58 500c8-78 56-128 142-132 86 4 134 54 142 132Z" fill="url(#avatarSuit)" />
      <path d="m176 366 24 52 24-52" stroke="#f59e0b" strokeWidth="4" fill="none" strokeLinejoin="round" />
      <rect x="178" y="308" width="44" height="66" rx="17" fill="#c89b78" />
      <ellipse cx="200" cy="222" rx="82" ry="94" fill="#d7ae8c" />
      <ellipse cx="124" cy="229" rx="9" ry="16" fill="#c89b78" />
      <ellipse cx="276" cy="229" rx="9" ry="16" fill="#c89b78" />
      <path d="M120 204c-2-54 30-91 80-92 50 1 82 38 80 92-26-37-134-37-160 0Z" fill="#111827" />
      <circle cx="172" cy="228" r="23" fill="none" stroke="#111827" strokeWidth="2.2" />
      <circle cx="228" cy="228" r="23" fill="none" stroke="#111827" strokeWidth="2.2" />
      <line x1="195" y1="228" x2="205" y2="228" stroke="#111827" strokeWidth="2.2" />
      <circle cx="172" cy="228" r="2.6" fill="#111827" />
      <circle cx="228" cy="228" r="2.6" fill="#111827" />
      <path d="M200 238l-5 24q5 6 10 0" stroke="#9b7259" strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <path d="M187 284q13 9 26 0" stroke="#7f4334" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M40 454q160-100 320 0" stroke="#0f766e" strokeWidth="2" fill="none" opacity=".35" />
    </svg>
  );
}

function PortalArt() {
  return (
    <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="portalArt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#eefaf8" />
          <stop offset="1" stopColor="#e8edf7" />
        </linearGradient>
      </defs>
      <rect width="400" height="280" fill="url(#portalArt)" />
      <g stroke="#111827" strokeWidth="1.3" fill="none" opacity=".55">
        <line x1="78" y1="142" x2="178" y2="82" />
        <line x1="78" y1="142" x2="178" y2="202" />
        <line x1="178" y1="82" x2="280" y2="120" />
        <line x1="178" y1="202" x2="280" y2="160" />
        <line x1="280" y1="120" x2="340" y2="98" />
        <line x1="280" y1="160" x2="340" y2="182" />
      </g>
      <circle cx="78" cy="142" r="16" fill="#111827" />
      <circle cx="178" cy="82" r="11" fill="#fff" stroke="#111827" strokeWidth="1.8" />
      <circle cx="178" cy="202" r="11" fill="#fff" stroke="#111827" strokeWidth="1.8" />
      <circle cx="280" cy="120" r="11" fill="#fff" stroke="#111827" strokeWidth="1.8" />
      <circle cx="280" cy="160" r="11" fill="#fff" stroke="#111827" strokeWidth="1.8" />
      <circle cx="340" cy="98" r="16" fill="#0f766e" />
      <circle cx="340" cy="182" r="16" fill="#b45309" />
      <text x="22" y="260" fontFamily="ui-monospace, monospace" fontSize="10" fill="#475569">AGENT.NETWORK / KOZMO</text>
    </svg>
  );
}

function IntakeArt() {
  return (
    <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="intakeArt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff7ed" />
          <stop offset="1" stopColor="#dff3ee" />
        </linearGradient>
      </defs>
      <rect width="400" height="280" fill="url(#intakeArt)" />
      <rect x="40" y="58" width="184" height="16" rx="5" fill="#fff" stroke="#111827" strokeWidth="1.2" />
      <rect x="40" y="84" width="140" height="16" rx="5" fill="#fff" stroke="#111827" strokeWidth="1.2" />
      <rect x="40" y="110" width="204" height="16" rx="5" fill="#fff" stroke="#111827" strokeWidth="1.2" />
      <rect x="40" y="136" width="122" height="16" rx="5" fill="#fff" stroke="#111827" strokeWidth="1.2" />
      <path d="M252 106h38m0 0-7-7m7 7-7 7" stroke="#111827" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="304" y="78" width="70" height="62" rx="12" fill="#111827" />
      <text x="339" y="116" fontFamily="Georgia, serif" fontSize="24" fill="#fff" textAnchor="middle" fontStyle="italic">AI</text>
      <line x1="339" y1="142" x2="339" y2="178" stroke="#111827" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="339" cy="204" r="23" fill="#fff" stroke="#111827" strokeWidth="1.6" />
      <path d="m328 204 8 8 15-17" stroke="#0f766e" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="22" y="260" fontFamily="ui-monospace, monospace" fontSize="10" fill="#475569">VENDOR.INTAKE / PIPELINE</text>
    </svg>
  );
}

function ContractsArt() {
  return (
    <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="280" fill="#111827" />
      <line x1="42" y1="222" x2="360" y2="222" stroke="#fff" strokeWidth="1" opacity=".28" />
      <rect x="60" y="160" width="32" height="62" fill="#0f766e" />
      <rect x="110" y="122" width="32" height="100" fill="#14b8a6" />
      <rect x="160" y="104" width="32" height="118" fill="#fff" />
      <rect x="210" y="142" width="32" height="80" fill="#94a3b8" />
      <rect x="260" y="82" width="32" height="140" fill="#b45309" />
      <rect x="310" y="62" width="32" height="160" fill="#f8fafc" />
      <path d="M60 62q40-30 80 0t120 0" stroke="#fff" strokeWidth="1.8" fill="none" opacity=".65" />
      <text x="22" y="260" fontFamily="ui-monospace, monospace" fontSize="10" fill="#fff" opacity=".65">CONTRACT.KPI / DASHBOARD</text>
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function Portfolio() {
  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in"));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    function animateCount(el) {
      const target = parseFloat(el.dataset.count || "0");
      const suffix = el.dataset.suffix || "";
      const isFloat = target % 1 !== 0;
      const duration = 1400;
      const start = performance.now();
      const wrapEm = el.querySelector("em");

      function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const value = target * eased;
        const text = `${isFloat ? value.toFixed(1) : Math.round(value)}${suffix}`;
        if (wrapEm) wrapEm.textContent = text;
        else el.textContent = text;
        if (t < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    }

    const countEls = Array.from(document.querySelectorAll("[data-count]"));
    if (!("IntersectionObserver" in window)) {
      countEls.forEach(animateCount);
      return undefined;
    }

    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    countEls.forEach((el) => countIO.observe(el));
    return () => countIO.disconnect();
  }, []);

  useEffect(() => {
    const progress = document.getElementById("progress");
    const nav = document.getElementById("nav");
    const toTop = document.getElementById("to-top");

    function onScroll() {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight;
      const percent = max ? (scrolled / max) * 100 : 0;
      if (progress) progress.style.width = `${percent}%`;
      if (nav) nav.classList.toggle("scrolled", scrolled > 8);
      if (toTop) toTop.classList.toggle("show", scrolled > 600);
    }

    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const toTop = document.getElementById("to-top");
    const ham = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    function scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function toggleMenu() {
      document.body.classList.toggle("menu-open");
    }

    function closeMenu() {
      document.body.classList.remove("menu-open");
    }

    const mobileLinks = mobileMenu ? Array.from(mobileMenu.querySelectorAll("a")) : [];
    if (toTop) toTop.addEventListener("click", scrollTop);
    if (ham) ham.addEventListener("click", toggleMenu);
    mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

    return () => {
      if (toTop) toTop.removeEventListener("click", scrollTop);
      if (ham) ham.removeEventListener("click", toggleMenu);
      mobileLinks.forEach((link) => link.removeEventListener("click", closeMenu));
      closeMenu();
    };
  }, []);

  useEffect(() => {
    const resumeBtn = document.getElementById("downloadResume");
    if (!resumeBtn) return undefined;

    async function handleResumeDownload(event) {
      event.preventDefault();
      const pdfUrl = resumeBtn.href;

      try {
        const head = await fetch(pdfUrl, { method: "HEAD" });
        if (head.ok) {
          const link = document.createElement("a");
          link.href = pdfUrl;
          link.download = "Ankit_Singh_BA_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          link.remove();
          return;
        }
      } catch {
        // The text version keeps the resume action useful when the PDF is absent.
      }

      const textResume = `ANKIT SINGH
Senior Business Analyst - Bengaluru, India
+91 84206 36288 | ankitsingh2112@gmail.com
linkedin.com/in/ankitsingh-sba

PROFILE
Senior Business Analyst with 7.5+ years across requirements discovery,
BRD/FRD documentation, Agile delivery, stakeholder management, CLM,
AI workflow design, Power BI, SQL, Azure DevOps, and UAT coordination.

SELECTED OUTCOMES
- Reduced manual effort by 40% through workflow automation.
- Improved release turnaround time by 30%.
- Managed 200+ backlog items across enterprise product tracks.
- Authored 15+ BRD/FRD documents for major releases.

EXPERIENCE
- Optimus BT - Business Analyst / Support Tech Lead (Mar 2021 - Present)
- Foiwe Info Global Solution - System Analyst (Aug 2017 - Feb 2020)

EDUCATION
B.Tech, Computer Science - Guru Nanak Institute of Technology (2013 - 2017)

CERTIFICATIONS
Business Analyst (Udemy), Manual Testing (Udemy), Java Programming (Globsyn),
ASP.NET (Globsyn)
`;
      const blob = new Blob([textResume], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Ankit_Singh_BA_Resume.txt";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    }

    resumeBtn.addEventListener("click", handleResumeDownload);
    return () => resumeBtn.removeEventListener("click", handleResumeDownload);
  }, []);

  return (
    <div>
      <div id="progress" />

      <nav className="top" id="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand" aria-label="Ankit Singh - home">
            <span className="brand-mark">A</span>
            <span>Ankit Singh</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="#contact">
            Get in touch
            <ArrowIcon size={12} />
          </a>
          <button className="hamburger" id="hamburger" aria-label="Toggle menu">
            <span />
          </button>
        </div>
        <div className="mobile-menu" id="mobileMenu">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#achievements">Achievements</a>
          <a href="#tools">Tools</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-left reveal">
              <div className="portrait-card">
                <span className="portrait-tag">
                  <span className="dot" />
                  Available - Q3 2026
                </span>
                <PortraitArt />
                <div className="portrait-meta">
                  <div>
                    <div className="name">Ankit Singh</div>
                    <div className="role">Sr. Business Analyst</div>
                  </div>
                  <div className="yrs">
                    7.5
                    <small>years</small>
                  </div>
                </div>
              </div>
              <div className="float-card float-2" aria-hidden="true">
                <div className="ico">
                  <Icon name="requirements" />
                </div>
                <div>
                  <div className="float-title">200+ backlog items</div>
                  <div className="float-sub">in Azure DevOps</div>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-kicker reveal" data-delay="1">
                Business analysis for CLM, AI workflows, and delivery teams
              </div>
              <h1 className="reveal" data-delay="1">
                Hi, I&apos;m <em>Ankit</em>.
                <br />
                I turn business chaos
                <br />
                into <span className="underlined">scalable systems</span>.
              </h1>
              <p className="hero-sub reveal" data-delay="2">
                Senior Business Analyst with <strong>7.5+ years</strong> bridging stakeholders, engineers, and outcomes across CLM platforms, AI workflow design, and enterprise delivery. Measurable wins include <strong>40% manual effort reduction</strong> and <strong>30% faster turnaround</strong>.
              </p>
              <div className="hero-roles reveal" data-delay="2">
                <span>Strategic Planning</span>
                <span>AI Workflow Design</span>
                <span>Contract Lifecycle Management</span>
                <span>Agile Delivery</span>
              </div>
              <div className="hero-cta reveal" data-delay="3">
                <a href="#work" className="btn btn-primary">
                  View Selected Work
                  <ArrowIcon />
                </a>
                <a href="./Ankit_Singh_BA_Resume.pdf" download="Ankit_Singh_BA_Resume.pdf" className="btn btn-ghost" id="downloadResume" aria-label="Download Ankit Singh resume">
                  <ResumeIcon />
                  Download Resume
                </a>
              </div>
              <div className="hero-contact reveal" data-delay="4">
                <a href="#top" aria-label="Location">
                  <span className="ico">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13Z" stroke="currentColor" strokeWidth="1.6" />
                      <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </span>
                  Bengaluru, India
                </a>
                <a href="tel:+918420636288" aria-label="Call Ankit at +91 84206 36288">
                  <span className="ico">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2.03Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  +91 84206 36288
                </a>
                <a href="mailto:ankitsingh2112@gmail.com" aria-label="Email ankitsingh2112@gmail.com">
                  <span className="ico">
                    <MailIcon size={14} />
                  </span>
                  ankitsingh2112@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/ankitsingh-sba/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile opens in a new tab">
                  <span className="ico">
                    <LinkedInIcon size={14} />
                  </span>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap">
            <div className="about-grid">
              <div className="reveal">
                <span className="eyebrow">About</span>
                <h2 className="section-title">A practitioner of <em>clarity</em>.</h2>
              </div>
              <div className="about-narrative reveal" data-delay="1">
                <p className="lead">
                  My job, simplified: take a tangled business problem, find the <em>thread that matters</em>, and pull until engineers, stakeholders, and executives see the same shape.
                </p>
                <p>
                  For seven and a half years I have worked at the edge of organizations: gathering requirements, drafting BRDs and FRDs, running discovery workshops, and shaping Agile backlogs that ship on time. I have authored <strong>15+ BRD/FRD documents</strong>, managed <strong>200+ backlog items</strong> in Azure DevOps, and led UAT across enterprise releases.
                </p>
                <p>
                  Lately the work has shifted toward <strong>AI workflow design</strong> and contract lifecycle automation: designing intake agents, mapping data, and orchestrating signature flows that replace weeks of email with minutes of structured work. I lean on Power BI for visibility, SQL for validation, and plain language for alignment.
                </p>
                <div className="stats">
                  <div className="stat">
                    <div className="num" data-count="7.5" data-suffix="+">0</div>
                    <div className="lab">Years Experience</div>
                  </div>
                  <div className="stat">
                    <div className="num" data-count="3">0</div>
                    <div className="lab">End-to-End Implementations</div>
                  </div>
                  <div className="stat">
                    <div className="num" data-count="40" data-suffix="%"><em>0</em></div>
                    <div className="lab">Manual Effort Reduction</div>
                  </div>
                  <div className="stat">
                    <div className="num" data-count="200" data-suffix="+">0</div>
                    <div className="lab">Backlog Items Managed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Core Capabilities</span>
              <h2 className="section-title">Sixteen tools, <em>one operator</em>.</h2>
              <p>Across discovery, delivery, and adoption, this is the toolkit I lean on most often.</p>
            </div>
            <div className="skills-grid">
              {skills.map(([name, category, icon], index) => (
                <div className="skill reveal" data-delay={index % 4} key={name}>
                  <div className="ico">
                    <Icon name={icon} />
                  </div>
                  <div className="name">{name}</div>
                  <div className="cat">{category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Professional Experience</span>
              <h2 className="section-title">A <em>continuous</em> arc, not a resume.</h2>
            </div>
            <div className="timeline">
              <div className="tl-item current reveal">
                <div className="tl-card">
                  <div className="tl-head">
                    <div className="tl-role"><span className="tl-co">Optimus BT</span> - Business Analyst & Support Tech Lead</div>
                    <div className="tl-meta">
                      Mar 2021 - Present
                      <span className="pill">Current</span>
                    </div>
                  </div>
                  <ul>
                    <li>Led requirements gathering across <strong>3 concurrent product tracks</strong></li>
                    <li>Authored <strong>15+ BRD/FRD documents</strong> for enterprise releases</li>
                    <li>Managed <strong>200+ backlog items</strong> in Azure DevOps</li>
                    <li>Improved team velocity by <strong>20%</strong> through structured grooming</li>
                    <li>Reduced manual effort by <strong>40%</strong> through workflow automation</li>
                    <li>Built Power BI dashboards for delivery and KPI reporting</li>
                    <li>Coordinated UAT for major releases and sign-offs</li>
                    <li>Led training and enablement for cross-functional teams</li>
                    <li>Promoted to <strong>Support Tech Lead</strong> within two years</li>
                  </ul>
                </div>
              </div>
              <div className="tl-item reveal" data-delay="1">
                <div className="tl-card">
                  <div className="tl-head">
                    <div className="tl-role"><span className="tl-co">Foiwe Info Global Solution</span> - System Analyst</div>
                    <div className="tl-meta">
                      Aug 2017 - Feb 2020
                      <span className="pill">Earlier</span>
                    </div>
                  </div>
                  <ul>
                    <li>Worked on <strong>5+ web applications</strong> in regulated environments</li>
                    <li>Managed test planning, traceability, and defect lifecycle</li>
                    <li>Created <strong>300+ test cases</strong> covering critical user flows</li>
                    <li>Resolved <strong>150+ defects</strong> in collaboration with engineering</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Featured Projects</span>
              <h2 className="section-title">Selected <em>case studies</em>.</h2>
              <p>Representative engagements drawn from real delivery work, with client specifics anonymized.</p>
            </div>
            <div className="projects-grid">
              <article className="project reveal">
                <div className="project-art">
                  <span className="num">01 / Agentic AI</span>
                  <PortalArt />
                </div>
                <div className="project-body">
                  <h3>Kozmo Portal</h3>
                  <p>Agentic AI platform: discovery workshops, roadmap planning, Agile delivery, and end-to-end workflow documentation for an enterprise rollout.</p>
                  <div className="chips">
                    <span className="chip">Discovery</span>
                    <span className="chip">Roadmap</span>
                    <span className="chip">Agile</span>
                    <span className="chip">Documentation</span>
                  </div>
                  <a href="case-study-kozmo-portal.html" className="case-link">View case study <span className="arr">-&gt;</span></a>
                </div>
              </article>

              <article className="project reveal" data-delay="1">
                <div className="project-art">
                  <span className="num">02 / AI Intake</span>
                  <IntakeArt />
                </div>
                <div className="project-body">
                  <h3>Kozmo AI & Intake Agent</h3>
                  <p>AI-powered contract automation: vendor intake workflows, fit/gap analysis, data mapping, and workflow automation across procurement.</p>
                  <div className="chips">
                    <span className="chip">AI Workflow</span>
                    <span className="chip">Fit / Gap</span>
                    <span className="chip">Data Mapping</span>
                    <span className="chip">Automation</span>
                  </div>
                  <a href="case-study-kozmo-ai-intake.html" className="case-link">View case study <span className="arr">-&gt;</span></a>
                </div>
              </article>

              <article className="project reveal" data-delay="2">
                <div className="project-art">
                  <span className="num">03 / CLM</span>
                  <ContractsArt />
                </div>
                <div className="project-body">
                  <h3>eContracts & Import Tool</h3>
                  <p>Full lifecycle CLM platform: e-signature workflows, Power BI dashboards, SQL validation, and contract KPI reporting at enterprise scale.</p>
                  <div className="chips">
                    <span className="chip">CLM</span>
                    <span className="chip">E-Signature</span>
                    <span className="chip">Power BI</span>
                    <span className="chip">SQL</span>
                  </div>
                  <a href="case-study-econtracts.html" className="case-link">View case study <span className="arr">-&gt;</span></a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="achievements">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Recognition & Outcomes</span>
              <h2 className="section-title">Outcomes worth <em>repeating</em>.</h2>
            </div>
            <div className="ach-grid">
              {achievements.map(([number, text, tone], index) => (
                <div className={`ach ${tone} reveal`} data-delay={index % 4} key={number}>
                  <span className="ach-num">{number}</span>
                  <div className="ach-text">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="tools">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Tools & Technologies</span>
              <h2 className="section-title">The everyday <em>kit</em>.</h2>
            </div>
            <div className="tools-grid">
              {tools.map(([name, glyph]) => (
                <div className="tool reveal" key={name}>
                  <div className="glyph">{glyph}</div>
                  <div className="lab">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Education & Certifications</span>
              <h2 className="section-title">Continuously <em>learning</em>.</h2>
            </div>
            <div className="edu-grid">
              <div className="reveal">
                <div className="edu-card">
                  <span className="eyebrow compact">Education</span>
                  <h3>B.Tech, Computer Science</h3>
                  <div className="school">Guru Nanak Institute of Technology</div>
                  <div className="yrs">2013 - 2017</div>
                </div>
              </div>
              <div className="certs-list reveal" data-delay="1">
                {certifications.map(([title, issuer, badge]) => (
                  <div className="cert" key={title}>
                    <div>
                      <div className="ttl">{title}</div>
                      <div className="iss">{issuer}</div>
                    </div>
                    <div className="badge">{badge}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="wrap">
            <div className="contact reveal">
              <span className="contact-eyebrow">Let&apos;s collaborate</span>
              <h2>
                Transforming business challenges into <em>scalable</em> digital solutions.
              </h2>
              <div className="contact-actions">
                <a href="mailto:ankitsingh2112@gmail.com?subject=Let%27s%20collaborate" className="btn btn-primary" aria-label="Email ankitsingh2112@gmail.com">
                  <MailIcon />
                  ankitsingh2112@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/ankitsingh-sba/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" aria-label="LinkedIn profile opens in a new tab">
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </div>
              <div className="contact-foot">
                <span>Bengaluru, India, IST</span>
                <span>Open to senior BA and product roles</span>
                <span>Copyright 2026 Ankit Singh</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="foot">
          <div className="wrap">DESIGNED AND BUILT WITH CARE - ANKIT SINGH</div>
        </footer>
      </main>

      <button id="to-top" aria-label="Back to top">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m18 15-6-6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

export default Portfolio;
