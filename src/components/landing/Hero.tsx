import vetImage from "@/assets/vet-hero.jpg";
import { MessageCircle, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-soft pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-soft opacity-60 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-primary">
            <MapPin className="h-3.5 w-3.5" />
            Atendimento em Sorocaba/SP
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-foreground md:text-6xl">
            Cuidado veterinário no conforto do seu lar.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Atendimento personalizado e sem estresse para o seu pet. Mais tempo, mais atenção, zero deslocamento.
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
          <div className="mt-10 flex items-center gap-6 border-t border-border pt-6 text-xs text-muted-foreground">
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

        <div className="reveal relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-brand opacity-10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-card">
            <img
              src={vetImage}
              alt="Médica veterinária de jaleco segurando um cão pequeno"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-card">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Resposta média</div>
              <div className="font-display text-sm font-semibold text-foreground">em 15 minutos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
