"use client";

import Link from "next/link";

export default function HeroSplit() {
  return (
    <header
      style={{
        position: "relative",
        padding:
          "clamp(72px,12vw,140px) clamp(20px,5vw,48px) clamp(64px,9vw,110px)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          data-split-grid
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "clamp(40px,6vw,80px)",
            alignItems: "center",
          }}
        >
          {/* Left column */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 12.5,
                letterSpacing: "0.04em",
                color: "#E84393",
                border: "1px solid rgba(255,255,255,0.11)",
                background: "rgba(255,255,255,0.03)",
                padding: "7px 14px",
                borderRadius: 999,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#E84393",
                  boxShadow: "0 0 10px #E84393",
                  display: "inline-block",
                }}
              />
              comunidade de tecnologia · Sorocaba, SP
            </div>

            <h1
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.7rem,7vw,5.4rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.03em",
                margin: "0 0 24px",
                color: "#F5F0E8",
              }}
            >
              Código com{" "}
              <span style={{ color: "#E84393" }}>propósito.</span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem,1.6vw,1.3rem)",
                color: "#B5B0A8",
                maxWidth: 520,
                margin: "0 0 38px",
                lineHeight: 1.5,
              }}
            >
              Somos uma comunidade de devs, designers e profissionais que
              acreditam que a tecnologia vai além do código, ela também é um fator
              de transformação social.
            </p>

            <div
              style={{ display: "flex", flexWrap: "wrap", gap: 14 }}
            >
              <Link
                href="/quem-somos"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  textDecoration: "none",
                  background: "#E84393",
                  color: "#0D0D0D",
                  fontWeight: 600,
                  fontSize: 16,
                  padding: "15px 28px",
                  borderRadius: 11,
                  boxShadow: "0 14px 40px -12px rgba(232,67,147,0.7)",
                  transition: "transform .2s, box-shadow .2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow =
                    "0 20px 50px -12px rgba(232,67,147,0.85)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  el.style.boxShadow =
                    "0 14px 40px -12px rgba(232,67,147,0.7)";
                }}
              >
                Quem somos →
              </Link>

              <Link
                href="/projetos"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  textDecoration: "none",
                  background: "transparent",
                  color: "#F5F0E8",
                  fontWeight: 600,
                  fontSize: 16,
                  padding: "15px 26px",
                  borderRadius: 11,
                  border: "1px solid #262626",
                  transition: "border-color .2s, background .2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#6E6E6E";
                  el.style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#262626";
                  el.style.background = "transparent";
                }}
              >
                Nossos projetos
              </Link>
            </div>
          </div>

          {/* Right column — terminal card */}
          <div style={{ animationDelay: "0.12s" }}>
            <div
              style={{
                border: "1px solid #262626",
                borderRadius: 16,
                background: "#141414",
                boxShadow:
                  "0 40px 90px -40px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.03)",
                overflow: "hidden",
                animation: "c4p-float 7s ease-in-out infinite",
              }}
            >
              {/* window chrome */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 16px",
                  borderBottom: "1px solid #262626",
                  background: "rgba(255,255,255,0.015)",
                }}
              >
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: "#E84393",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: "#C9C4BA",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: "#E84393",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    marginLeft: 10,
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: 12,
                    color: "#6E6E6E",
                  }}
                >
                  community.json
                </span>
              </div>

              <pre
                style={{
                  margin: 0,
                  padding: "22px 22px 26px",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 13.5,
                  lineHeight: 1.95,
                  color: "#B5B0A8",
                  overflowX: "auto",
                }}
              >
                {`{\n  `}
                <span style={{ color: "#E84393" }}>&quot;nome&quot;</span>
                {`: `}
                <span style={{ color: "#C9C4BA" }}>&quot;code4people&quot;</span>
                {`,\n  `}
                <span style={{ color: "#E84393" }}>&quot;tipo&quot;</span>
                {`: `}
                <span style={{ color: "#C9C4BA" }}>&quot;movimento&quot;</span>
                {`,\n  `}
                <span style={{ color: "#6E6E6E" }}>// não é uma empresa</span>
                {`\n  `}
                <span style={{ color: "#E84393" }}>&quot;local&quot;</span>
                {`: `}
                <span style={{ color: "#C9C4BA" }}>&quot;Sorocaba · SP · BR&quot;</span>
                {`,\n  `}
                <span style={{ color: "#E84393" }}>&quot;missao&quot;</span>
                {`: `}
                <span style={{ color: "#E84393" }}>&quot;código → impacto social&quot;</span>
                {`,\n  `}
                <span style={{ color: "#E84393" }}>&quot;membros&quot;</span>
                {`: [`}
                <span style={{ color: "#C9C4BA" }}>&quot;devs&quot;</span>
                {`, `}
                <span style={{ color: "#C9C4BA" }}>&quot;design&quot;</span>
                {`, `}
                <span style={{ color: "#C9C4BA" }}>&quot;curiosos&quot;</span>
                {`],\n  `}
                <span style={{ color: "#E84393" }}>&quot;open_source&quot;</span>
                {`: `}
                <span style={{ color: "#E84393" }}>true</span>
                <span
                  style={{
                    display: "inline-block",
                    width: 9,
                    height: 17,
                    background: "#E84393",
                    verticalAlign: "-3px",
                    marginLeft: 4,
                    animation: "c4p-blink 1.1s step-end infinite",
                  }}
                />
                {`\n}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
