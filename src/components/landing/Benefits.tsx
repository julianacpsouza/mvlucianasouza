import { HeartPulse, ShieldCheck, Clock } from "lucide-react";
import petCat from "@/assets/pet-cat-care.jpg";

const items = [
  {
    icon: HeartPulse,
    title: "Diagnóstico Fiel",
    desc: "Sem o estresse do trajeto e o medo do ambiente clínico, o pet age naturalmente. O corpo relaxado não altera batimentos ou respiração, permitindo uma avaliação muito mais segura e confiável.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente seguro",
    desc: "Seu pet não divide a sala de espera com animais doentes. O atendimento domiciliar zera o risco de exposição a vírus e parasitas de ambientes com grande circulação. Especialmente importante em casos de cães com baixa imunidade e filhotes que ainda não completaram o ciclo vacinal.",
  },
  {
    icon: Clock,
    title: "Atenção exclusiva",
    desc: "Sem relógio ou senhas de espera. A consulta dura o tempo necessário para respeitar o limite do animal, ouvir todo o histórico e orientar a família com clareza e tranquilidade.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="reveal relative">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <img
                src={petCat}
                alt="Gato sendo acariciado com carinho durante consulta veterinária em casa"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[5/4] h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-card sm:block">
              <p className="font-display text-sm font-semibold text-foreground">98% dos tutores</p>
              <p className="text-xs text-muted-foreground">recomendam o atendimento</p>
            </div>
          </div>
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Por que em domicílio?
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Atendimento pensado para o bem-estar real do seu pet.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Cada animal tem seu tempo, seu jeito e seus medos. Em casa, conseguimos respeitar esse ritmo e realizar um exame clínico detalhado, sem que o estresse do ambiente clínico altere os resultados. É a medicina veterinária exercida com calma, técnica e afeto.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <article
              key={item.title}
              className="reveal group rounded-2xl border border-border bg-card p-8 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
