"use client";

import type { Step } from "@/lib/data";

export default function ComoFunciona({ steps }: { steps: Step[] }) {
  return (
    <section
      id="como"
      style={{
        padding: "clamp(72px,11vw,150px) clamp(20px,5vw,48px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 13,
            letterSpacing: "0.04em",
            color: "#E84393",
            marginBottom: 18,
          }}
        >
          // 02 — como funciona
        </div>
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2rem,4.5vw,3.4rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            margin: "0 0 14px",
            color: "#F5F0E8",
          }}
        >
          Da inscrição à entrega.
        </h2>
        <p
          style={{
            fontSize: "clamp(1rem,1.5vw,1.2rem)",
            color: "#B5B0A8",
            maxWidth: 560,
            margin: "0 0 56px",
          }}
        >
          Cinco etapas. Um fluxo. Pensado como código — porque é exatamente
          assim que a gente trabalha.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))",
            gap: 18,
          }}
        >
          {steps.map((step) => (
            <StepCard key={step.n} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: Step }) {
  return (
    <div
      style={{
        border: "1px solid #262626",
        borderRadius: 14,
        background: "#141414",
        overflow: "hidden",
        transition: "transform .25s, border-color .25s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.borderColor = "#6E6E6E";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "";
        el.style.borderColor = "#262626";
      }}
    >
      {/* window chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          padding: "11px 14px",
          borderBottom: "1px solid #262626",
          background: "rgba(255,255,255,0.015)",
        }}
      >
        <span
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#E84393",
            opacity: 0.85,
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#262626",
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#262626",
            display: "inline-block",
          }}
        />
        <span
          style={{
            marginLeft: 8,
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 11.5,
            color: "#6E6E6E",
          }}
        >
          {step.file}
        </span>
      </div>

      <pre
        style={{
          margin: 0,
          padding: "18px 18px 20px",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 12.5,
          lineHeight: 1.85,
          color: "#B5B0A8",
          overflowX: "auto",
        }}
      >
        {`{\n  `}
        <span style={{ color: "#E84393" }}>&quot;etapa&quot;</span>
        {`: `}
        <span style={{ color: "#E84393" }}>{step.n}</span>
        {`,\n  `}
        <span style={{ color: "#E84393" }}>&quot;fase&quot;</span>
        {`: `}
        <span style={{ color: "#C9C4BA" }}>&quot;{step.fase}&quot;</span>
        {`,\n  `}
        <span style={{ color: "#E84393" }}>&quot;quem&quot;</span>
        {`: `}
        <span style={{ color: "#C9C4BA" }}>&quot;{step.quem}&quot;</span>
        {`,\n  `}
        <span style={{ color: "#E84393" }}>&quot;saida&quot;</span>
        {`: `}
        <span style={{ color: "#C9C4BA" }}>&quot;{step.saida}&quot;</span>
        {`\n}`}
      </pre>
    </div>
  );
}
