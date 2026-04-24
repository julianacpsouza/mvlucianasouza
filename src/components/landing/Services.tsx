import { Stethoscope, Syringe, FlaskConical, Cpu, Sparkles } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Consultas clínicas", desc: "Avaliações completas e check-ups preventivos." },
  { icon: Syringe, title: "Vacinação", desc: "Protocolos internacionais com vacinas importadas." },
  { icon: FlaskConical, title: "Coleta de exames", desc: "Sangue, urina e demais materiais laboratoriais." },
  { icon: Cpu, title: "Microchipagem", desc: "Identificação para viagens nacionais e internacionais." },
  { icon: Sparkles, title: "Bem-estar e manejo", desc: "Orientações nutricionais e comportamentais." },
];

export function Services() {
  return (
    <section id="servicos" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal grid items-end gap-6 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Serviços prestados
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Cuidado completo, sempre na sua casa.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground">
            Cada visita inclui anamnese completa, exame físico detalhado e plano terapêutico individualizado para o seu animal.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-smooth hover:border-primary/40"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
