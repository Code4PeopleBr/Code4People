"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding:
          "clamp(48px,7vw,72px) clamp(20px,5vw,48px) clamp(40px,5vw,56px)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 32,
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div style={{ maxWidth: 340 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontWeight: 600,
              fontSize: 18,
              letterSpacing: "-0.02em",
              marginBottom: 14,
            }}
          >
            <span style={{ color: "#F5F0E8" }}>code</span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 24,
                height: 24,
                margin: "0 3px",
                border: "1.5px solid #E84393",
                borderRadius: 6,
                color: "#E84393",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              4
            </span>
            <span style={{ color: "#F5F0E8" }}>people</span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "1.05rem",
              color: "#6E6E6E",
              margin: 0,
              lineHeight: 1.45,
            }}
          >
            Tecnologia a serviço das pessoas.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            flexWrap: "wrap",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 14,
          }}
        >
          {[
            { label: "Instagram ↗", href: "#" },
            { label: "LinkedIn ↗", href: "#" },
            { label: "GitHub ↗", href: "#" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              style={{ color: "#B5B0A8", textDecoration: "none" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#E84393")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#B5B0A8")
              }
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: 1180,
          margin: "40px auto 0",
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.05)",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 12,
          color: "#6E6E6E",
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "space-between",
        }}
      >
        <span>// Sorocaba, SP · Brasil</span>
        <span>© 2026 code4people · feito com código e propósito</span>
      </div>
    </footer>
  );
}
