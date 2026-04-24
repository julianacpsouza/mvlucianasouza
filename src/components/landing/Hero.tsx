import dogHome from "@/assets/hero-dog-home.jpg";
import vetPortrait from "@/assets/vet-portrait.png";
import { MessageCircle, MapPin, Heart } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24">
      {/* Background photo */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img
          src={dogHome}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        {/* Soft overlay to keep text legible while preserving warmth */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30 md:from-background/92 md:via-background/70 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-12">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-primary">
            <MapPin className="h-3.5 w-3.5" />
            Atendimento em Sorocaba/SP
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-foreground md:text-6xl">
            Cuidado veterinário no conforto do seu lar.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Um atendimento próximo, atento e humano — porque seu pet merece se sentir seguro e amado mesmo durante a consulta.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5515999999999"
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
              <div className="font-display text-2xl font-semibold text-foreground">+8</div>
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

        <div className="reveal relative hidden h-[520px] md:block">
          {/* Soft halo behind portrait */}
          <div
            aria-hidden
            className="absolute inset-x-8 bottom-0 top-12 rounded-[3rem] bg-gradient-brand opacity-20 blur-3xl"
          />
          {/* Cutout portrait */}
          <img
            src={vetPortrait}
            alt="Luciana Souza, médica veterinária, sorrindo de jaleco branco"
            width={896}
            height={1344}
            className="absolute inset-x-0 bottom-0 mx-auto h-full w-auto object-contain drop-shadow-[0_25px_40px_rgba(13,150,177,0.25)]"
          />
          {/* Floating reassurance card */}
          <div className="absolute -bottom-2 left-0 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-5 py-4 shadow-card backdrop-blur">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Atendimento humano</div>
              <div className="font-display text-sm font-semibold text-foreground">Resposta em ~15 min</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
