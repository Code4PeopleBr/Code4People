export default function Manifesto() {
  return (
    <section
      id="manifesto"
      style={{
        padding: "clamp(72px,11vw,150px) clamp(20px,5vw,48px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 13,
            letterSpacing: "0.04em",
            color: "#E84393",
            marginBottom: 36,
          }}
        >
          // 01 — manifesto
        </div>
        <p
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 500,
            fontSize: "clamp(1.6rem,3.8vw,3.05rem)",
            lineHeight: 1.28,
            letterSpacing: "-0.02em",
            margin: 0,
            color: "#6E6E6E",
          }}
        >
          Não acreditamos em tecnologia pela tecnologia. Cada linha de código
          carrega uma escolha:{" "}
          <span style={{ color: "#F5F0E8" }}>
            incluir ou excluir, aproximar ou afastar.
          </span>{" "}
          A Code4People nasceu da convicção de que o melhor da tecnologia
          acontece quando ela é colocada{" "}
          <span style={{ color: "#E84393" }}>a serviço das pessoas</span> — não
          do mercado, não do hype. Aqui,{" "}
          <span style={{ color: "#E84393" }}>código vira ponte</span>, e quem
          programa vira agente de transformação.
        </p>
      </div>
    </section>
  );
}
