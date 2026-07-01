"use client";

function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 90"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="g1" x1="50" y1="0" x2="50" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a3e635" />
          <stop offset="55%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
      </defs>
      {/* Left leg */}
      <polygon points="50,4 4,88 21,88" fill="url(#g1)" />
      {/* Right leg */}
      <polygon points="50,4 96,88 79,88" fill="url(#g1)" />
      {/* Lightning bolt crossbar */}
      <polygon
        points="34,50 43,32 50,44 59,28 66,48 56,62 50,50 40,64"
        fill="url(#g1)"
      />
    </svg>
  );
}

function LogoWordmark() {
  return (
    <div className="flex items-center gap-3 select-none">
      <LogoIcon className="h-14 w-auto" />
      <div className="flex flex-col leading-tight">
        <span
          className="font-black uppercase tracking-widest text-white"
          style={{ fontSize: "1.1rem", letterSpacing: "0.14em" }}
        >
          Amish Auto
        </span>
        <span
          className="font-medium uppercase tracking-widest"
          style={{ fontSize: "0.62rem", letterSpacing: "0.22em", color: "var(--muted)" }}
        >
          India (OPC) Pvt Ltd
        </span>
      </div>
    </div>
  );
}

export default function MaintenancePage() {
  return (
    <div
      className="relative min-h-screen grid-bg flex flex-col overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Scan line */}
      <div className="scan-line" />

      {/* Green radial glow — centered lower */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 60%, rgba(34,197,94,0.1) 0%, transparent 65%)",
        }}
      />

      {/* ── Header ── */}
      <header className="animate-fade-in relative z-20 flex items-center justify-between px-8 py-6 md:px-14">
        <LogoWordmark />

        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium tracking-wide"
          style={{
            borderColor: "var(--border)",
            color: "var(--muted)",
            background: "rgba(255,255,255,0.025)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "var(--accent)",
              animation: "pulse-green 2s ease-in-out infinite",
            }}
          />
          Under Maintenance
        </div>
      </header>

      {/* ── Hero ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center py-10">

        {/* Large logo mark — centrepiece */}
        <div className="animate-fade-up mb-8">
          <LogoIcon className="h-32 w-auto md:h-44 drop-shadow-lg" />
        </div>

        {/* Eyebrow */}
        <div className="animate-fade-up-delay-1 flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "var(--accent)", opacity: 0.6 }} />
          <p
            className="text-xs font-semibold uppercase"
            style={{ color: "var(--accent)", letterSpacing: "0.35em" }}
          >
            Driving the Future
          </p>
          <div className="h-px w-8" style={{ background: "var(--accent)", opacity: 0.6 }} />
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up-delay-2 font-black uppercase leading-none mb-6"
          style={{
            fontSize: "clamp(2.4rem, 8.5vw, 6.5rem)",
            letterSpacing: "-0.025em",
            color: "var(--white)",
          }}
        >
          Something
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #a3e635 0%, #22c55e 50%, #15803d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Electric
          </span>{" "}
          is Coming.
        </h1>

        {/* Sub copy */}
        <p
          className="animate-fade-up-delay-3 max-w-md mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--muted)", fontSize: "1.05rem" }}
        >
          We&apos;re building a new digital home to match the future we&apos;re
          driving toward. Check back soon.
        </p>

        {/* Contact line */}
        <div
          className="animate-fade-up-delay-4 flex flex-col sm:flex-row items-center gap-4 text-sm"
          style={{ color: "var(--muted)" }}
        >
          <a
            href="mailto:atul@amishautoindia.com"
            className="flex items-center gap-2 transition-colors"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
            </svg>
            atul@amishautoindia.com
          </a>
          <span className="hidden sm:block" style={{ opacity: 0.2 }}>|</span>
          <a
            href="tel:+918618912266"
            className="flex items-center gap-2 transition-colors"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.17 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
            +91 86189 12266
          </a>
        </div>
      </main>

      {/* Divider */}
      <div className="relative z-10 px-8 md:px-14">
        <div className="h-px" style={{ background: "var(--border)" }} />
      </div>

      {/* ── Footer ── */}
      <footer className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-5 md:px-14">
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Amish Auto India (OPC) Pvt Ltd. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {[
            {
              label: "Instagram",
              href: "#",
              icon: (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
                </svg>
              ),
            },
            {
              label: "Facebook",
              href: "#",
              icon: (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              ),
            },
            {
              label: "X",
              href: "#",
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              ),
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              style={{ color: "var(--muted)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
