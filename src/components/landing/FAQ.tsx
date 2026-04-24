import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Quais bairros de Sorocaba são atendidos?",
    a: "Atendo em Campolim, Santa Rosália, Wanel Ville, Jardim Vergueiro, Parque Campolim, Jardim Europa, Trujillo e regiões próximas. Consulte deslocamento para outros bairros.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Pix, dinheiro, débito e crédito (em até 3x sem juros pela maquininha portátil).",
  },
  {
    q: "É possível atender emergências?",
    a: "O atendimento domiciliar é eletivo. Para emergências, encaminho a hospitais 24h parceiros e acompanho o caso.",
  },
  {
    q: "Quanto tempo dura uma consulta em casa?",
    a: "Em média 45 a 60 minutos, com tempo dedicado à anamnese, exame físico e orientações ao tutor.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Perguntas frequentes
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Tudo o que você precisa saber.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div key={f.q} className="reveal">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-smooth hover:bg-surface"
                >
                  <span className="font-display text-base font-semibold text-foreground md:text-lg">
                    {f.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-primary transition-smooth ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-smooth ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden px-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
