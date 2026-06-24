"use client";

import Link from "next/link";

const links = [
  { href: "/quem-somos", label: "quem somos" },
  { href: "/projetos", label: "projetos" },
  { href: "/eventos", label: "eventos" },
  { href: "/membros", label: "membros" },
  { href: "/parceiros", label: "parceiros" },
  { href: "/impacto", label: "impacto" },
];

export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        padding: "16px clamp(20px,5vw,48px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(13,13,13,0.78)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          textDecoration: "none",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontWeight: 600,
          fontSize: 18,
          letterSpacing: "-0.02em",
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
      </Link>

      <div
        data-nav-links
        style={{
          display: "flex",
          alignItems: "center",
          gap: 28,
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 13,
          letterSpacing: "0.01em",
        }}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{ color: "#6E6E6E", textDecoration: "none" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#F5F0E8")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#6E6E6E")
            }
          >
            {l.label}
          </Link>
        ))}
      </div>

      <Link
        href="#final"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          textDecoration: "none",
          background: "#E84393",
          color: "#0D0D0D",
          fontWeight: 600,
          fontSize: 14,
          padding: "9px 18px",
          borderRadius: 9,
          transition: "transform .2s, box-shadow .2s",
          boxShadow: "0 0 0 0 rgba(232,67,147,0.5)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(-1px)";
          el.style.boxShadow = "0 10px 30px -8px rgba(232,67,147,0.6)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "";
          el.style.boxShadow = "0 0 0 0 rgba(232,67,147,0.5)";
        }}
      >
        Participar
      </Link>
    </nav>
  );
}
