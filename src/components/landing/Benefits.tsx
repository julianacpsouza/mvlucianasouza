import { HeartPulse, ShieldCheck, Clock } from "lucide-react";

const items = [
  {
    icon: HeartPulse,
    title: "Zero estresse",
    desc: "Sem caixas de transporte, deslocamentos ou salas de espera. Seu pet permanece em ambiente familiar.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente seguro",
    desc: "Proteção contra doenças infectocontagiosas comuns em clínicas e ambientes coletivos.",
  },
  {
    icon: Clock,
    title: "Atenção exclusiva",
    desc: "Consultas mais longas, com tempo para observar o comportamento do animal em casa.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Por que em domicílio?
          </span>
          <h2 className="mt-4 whitespace-pre-line font-display text-3xl font-semibold text-foreground md:text-4xl">
            {"Um atendimento pensado para o\nbem-estar real do seu pet."}
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
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
