import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSplit from "@/components/HeroSplit";
import Manifesto from "@/components/Manifesto";
import ComoFunciona from "@/components/ComoFunciona";
import ParaQuemE from "@/components/ParaQuemE";
import Parceiros from "@/components/Parceiros";
import CtaFinal from "@/components/CtaFinal";
import { getSteps, getRoles, getPartners } from "@/lib/data";

export default async function HomePage() {
  const [steps, roles, partners] = await Promise.all([
    getSteps(),
    getRoles(),
    getPartners(),
  ]);

  return (
    <div
      style={{
        background: "#0D0D0D",
        color: "#F5F0E8",
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        WebkitFontSmoothing: "antialiased",
        lineHeight: 1.55,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <span id="top" />
      <Navbar />
      <HeroSplit />
      <Manifesto />
      <ComoFunciona steps={steps} />
      <ParaQuemE roles={roles} />
      <Parceiros partners={partners} />
      <CtaFinal />
      <Footer />
    </div>
  );
}
