import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Projetos — Code4People" };

export default function ProjetosPage() {
  return (
    <div
      style={{
        background: "#0D0D0D",
        color: "#F5F0E8",
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <main
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "clamp(72px,12vw,140px) clamp(20px,5vw,48px)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 13,
            color: "#E84393",
            marginBottom: 24,
          }}
        >
          // projetos
        </div>
        <h1
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.5rem,6vw,4.5rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            margin: "0 0 32px",
          }}
        >
          Código que <span style={{ color: "#E84393" }}>transforma.</span>
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#B5B0A8", maxWidth: 640, lineHeight: 1.6 }}>
          Em breve, os projetos desenvolvidos pela comunidade estarão listados
          aqui. Cada um nasceu de um hackathon, de uma ideia, de vontade de
          mudar algo ao redor.
        </p>
      </main>
      <Footer />
    </div>
  );
}
