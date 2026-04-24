import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    name: "Mariana, tutora da Mel",
    text: "A doutora foi maravilhosa. A Mel ficou completamente tranquila no sofá, sem trauma nenhum. Não volto mais para clínica.",
  },
  {
    name: "Rafael, tutor do Thor",
    text: "Atendimento extremamente profissional e humano. Explicou cada detalhe e o Thor amou. Recomendo demais.",
  },
  {
    name: "Camila, tutora da Nina",
    text: "Vacinação importada, exame de sangue e tudo na minha sala. Diferença absurda em comparação ao estresse da clínica.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Tutores que confiam
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Histórias reais de quem já trouxe a clínica para casa.
          </h2>
        </div>

        <div className="reveal relative mt-14 rounded-3xl border border-border bg-card p-10 shadow-soft md:p-14">
          <Quote className="mx-auto h-8 w-8 text-primary" />
          <p className="mt-6 font-display text-xl leading-relaxed text-foreground md:text-2xl">
            “{items[i].text}”
          </p>
          <p className="mt-6 text-sm font-medium text-muted-foreground">— {items[i].name}</p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              aria-label="Anterior"
              onClick={() => setI((p) => (p - 1 + items.length) % items.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {items.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Ir para depoimento ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-smooth ${
                  idx === i ? "w-6 bg-primary" : "w-1.5 bg-border"
                }`}
              />
            ))}
            <button
              aria-label="Próximo"
              onClick={() => setI((p) => (p + 1) % items.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
