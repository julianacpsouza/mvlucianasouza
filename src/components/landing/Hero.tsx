import { MessageCircle, MapPin } from "lucide-react";

// 🖼️ Imagem de fundo do Hero. Substitua o import abaixo pelo caminho
// da sua nova foto em src/assets/ quando quiser trocar.
import heroBackground from "@/assets/hero-cozy-pet.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[92vh] flex items-center justify-center">
      {/* Full-width background photo */}
      <div aria-hidden className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Pet calmo e aconchegado descansando em casa"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        {/* Soft dark overlay + gradient fade for premium, cozy feel and text legibility */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-32 md:py-40 text-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
            <MapPin className="h-3.5 w-3.5" />
            Atendimento Veterinário em Sorocaba/SP
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white md:text-6xl lg:text-7xl drop-shadow-lg">
            Saúde e carinho, sem sair de casa
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg drop-shadow">
            Atendimento veterinário humanizado, com calma e atenção exclusiva. Mais bem-estar para o seu pet e comodidade para você.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/5515998624102"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-brand transition-smooth hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar Consulta via WhatsApp
            </a>
            <a
              href="#servicos"
              className="text-sm font-medium text-white underline-offset-4 transition-smooth hover:underline"
            >
              Ver serviços →
            </a>
          </div>
          <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-white/20 pt-6 text-xs text-white/80">
            <div>
              <div className="font-display text-2xl font-semibold text-white">+12</div>
              anos de experiência
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-white">+1.2k</div>
              tutores atendidos
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-white">CRMV-SP</div>
              registrada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
