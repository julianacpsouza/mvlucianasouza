import { useEffect, useState } from "react";
import { PawPrint } from "lucide-react";

const links = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-4 ${!scrolled ? "bg-[#5e2626]/[0%] text-white" : ""}`}>
        <a href="#" className={`flex items-center gap-2 font-display text-lg font-semibold ${!scrolled ? "text-white" : "text-foreground"}`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary">
            <PawPrint className="h-5 w-5" />
          </span>
          Luciana Souza | Médica Veterinária
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-smooth hover:text-primary ${!scrolled ? "text-white" : "text-muted-foreground"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5515998624102"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-brand transition-smooth hover:opacity-90 sm:inline-flex"
        >
          Agendar Consulta
        </a>
      </div>
    </header>
  );
}
