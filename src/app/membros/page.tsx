import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Membros — Code4People" };

export default function MembrosPage() {
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
          // membros
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
          As <span style={{ color: "#E84393" }}>pessoas</span> por trás.
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#B5B0A8", maxWidth: 640, lineHeight: 1.6 }}>
          Devs, designers, analistas, estudantes e muito mais. A comunidade
          Code4People é feita de pessoas com histórias diferentes e um objetivo
          em comum.
        </p>
      </main>
      <Footer />
    </div>
  );
}
