import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    name: "Fernanda Oliveira",
    text: "Atendimento maravilhoso! A Dra. Luciana é super atenciosa, carinhosa e cuida da minha cachorra Olívia com muito amor (e biscoitinhos 🐶). A Olívia já é velhinha então o atendimento em casa faz toda a diferença. Recomendo demais! Obrigada por tudo, Lu 💚",
  },
  {
    name: "Fábio Hosoi",
    text: "A Dra Luciana é extremamente competente e auxilia minha família já a alguns anos. Ela nos atende na nossa casa, o que eh ótimo para os nossos gatos que estressam demais em qquer saida. Ela tem muito jeito com os pets, no caso da minha família são gatos, e já nos orientou nas melhores e piores horas! Inclusive eh extremamente didática e consegue nos fazer compreender melhor o que está acontecendo, diferente de alguns locais onde o gato vai pela porta e depois de mto tempo chega apenas a conta e zero explicações. Recomendo a todos.",
  },
  {
    name: "Camila, tutora da Nina",
    text: "Dra Luciana a melhor vet de Sorocaba ❤️ cuida dos meus bichinhos a varios anos! So gratidao",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

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
