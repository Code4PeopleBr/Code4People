export default function ParaQuemE({ roles }: { roles: string[] }) {
  return (
    <section
      id="quem"
      style={{
        padding: "clamp(72px,11vw,150px) clamp(20px,5vw,48px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 13,
            letterSpacing: "0.04em",
            color: "#E84393",
            marginBottom: 30,
          }}
        >
          // 03 — para quem é
        </div>
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.1rem,5.5vw,4.2rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            margin: "0 0 26px",
            color: "#F5F0E8",
          }}
        >
          Você não precisa ser expert.
          <br />
          Precisa ter <span style={{ color: "#E84393" }}>vontade.</span>
        </h2>
        <p
          style={{
            fontSize: "clamp(1.05rem,1.6vw,1.3rem)",
            color: "#B5B0A8",
            maxWidth: 600,
            margin: "0 auto 44px",
            lineHeight: 1.5,
          }}
        >
          Dev sênior ou alguém que abriu o editor de código ontem. Se você quer
          usar tecnologia para mudar algo ao seu redor, seu lugar é aqui.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
          }}
        >
          {roles.map((role) => (
            <span
              key={role}
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 14,
                color: "#F5F0E8",
                padding: "10px 18px",
                border: "1px solid #262626",
                borderRadius: 999,
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
