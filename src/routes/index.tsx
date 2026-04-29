import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { Services } from "@/components/landing/Services";
import { About } from "@/components/landing/About";
import { Testimonials } from "@/components/landing/Testimonials";
import { Gallery } from "@/components/landing/Gallery";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";
import { useReveal } from "@/components/landing/useReveal";

export function HomePage() {
  useReveal();
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Benefits />
      <Services />
      <About />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
