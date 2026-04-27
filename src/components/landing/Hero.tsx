import dogHome from "@/assets/gallery-5.jpg";
import { MessageCircle, MapPin } from "lucide-react";

// 🖼️ Imagem destacada do Hero (lateral). Substitua o import abaixo
// pelo caminho da sua nova foto em src/assets/ quando quiser trocar.
import heroSideImage from "@/assets/vet-portrait.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 min-h-[88vh] flex items-center">
      {/* Full-width background photo */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img
          src={dogHome}
          alt="Tutora abraçando seu cão feliz no conforto de casa"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        {/* Overlays for text legibility while preserving the warm photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/10 md:from-background/92 md:via-background/55 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="reveal max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
            <MapPin className="h-3.5 w-3.5" />
            Atendimento Veterinário em Sorocaba/SP
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-foreground md:text-6xl">
            Saúde e carinho, sem sair de casa{" "}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Atendimento veterinário humanizado, com calma e atenção exclusiva. Mais bem-estar para o seu pet e comodidade para você.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5515998624102"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-brand transition-smooth hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar Consulta via WhatsApp
            </a>
            <a
              href="#servicos"
              className="text-sm font-medium text-foreground underline-offset-4 transition-smooth hover:text-primary hover:underline"
            >
              Ver serviços →
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 border-t border-border/70 pt-6 text-xs text-muted-foreground">
            <div>
              <div className="font-display text-2xl font-semibold text-foreground">+12</div>
              anos de experiência
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-foreground">+1.2k</div>
              tutores atendidos
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-foreground">CRMV-SP</div>
              registrada
            </div>
          </div>
          </div>

          {/* 🖼️ Imagem editável do Hero — troque o import `heroSideImage` no topo do arquivo */}
          <div className="reveal hidden md:block">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-brand">
              <img
                src={heroSideImage}
                alt="Imagem de destaque"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
