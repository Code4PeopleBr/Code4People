"use client";

import Link from "next/link";

export default function CtaFinal() {
  return (
    <section
      id="final"
      style={{
        padding:
          "clamp(40px,8vw,90px) clamp(20px,5vw,48px) clamp(72px,11vw,140px)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          position: "relative",
          border: "1px solid rgba(232,67,147,0.35)",
          borderRadius: 24,
          padding: "clamp(48px,8vw,96px) clamp(28px,6vw,72px)",
          textAlign: "center",
          overflow: "hidden",
          background: "#141414",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 13,
            color: "#E84393",
            marginBottom: 20,
          }}
        >
          {`{ "status": "próxima edição em breve" }`}
        </div>
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.2rem,5.5vw,4rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            margin: "0 auto 22px",
            maxWidth: 760,
            color: "#F5F0E8",
          }}
        >
          Pronto para escrever a{" "}
          <span style={{ color: "#E84393" }}>próxima linha?</span>
        </h2>
        <p
          style={{
            fontSize: "clamp(1.05rem,1.6vw,1.3rem)",
            color: "#B5B0A8",
            maxWidth: 520,
            margin: "0 auto 38px",
            lineHeight: 1.5,
          }}
        >
          Junte-se ao movimento. Traga sua vontade — a comunidade traz o resto.
        </p>
        <Link
          href="#top"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            background: "#E84393",
            color: "#0D0D0D",
            fontWeight: 700,
            fontSize: 17,
            padding: "17px 34px",
            borderRadius: 12,
            transition: "transform .2s, box-shadow .2s",
            boxShadow: "0 18px 50px -14px rgba(232,67,147,0.8)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = "translateY(-2px)";
            el.style.boxShadow = "0 24px 60px -14px rgba(232,67,147,0.95)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = "";
            el.style.boxShadow = "0 18px 50px -14px rgba(232,67,147,0.8)";
          }}
        >
          Quero participar →
        </Link>
      </div>
    </section>
  );
}
