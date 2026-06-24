import type { Partner } from "@/lib/data";

export default function Parceiros({ partners }: { partners: Partner[] }) {
  return (
    <section
      id="parceiros"
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
          // 04 — parceiros e apoiadores
        </div>
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem,4vw,2.8rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: "0 0 8px",
            color: "#F5F0E8",
          }}
        >
          Quem caminha com a gente.
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "#B5B0A8",
            margin: "0 0 48px",
          }}
        >
          Empresas, coletivos e instituições que acreditam em tecnologia com
          propósito.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 14,
          }}
        >
          {partners.map((p, i) => (
            <div
              key={i}
              style={{
                height: 104,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px dashed #262626",
                borderRadius: 12,
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 9px)",
                backgroundColor: "rgba(255,255,255,0.02)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 12,
                  color: "#6E6E6E",
                }}
              >
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
