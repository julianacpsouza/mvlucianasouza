import { Stethoscope, Syringe, FlaskConical, Cpu, Sparkles } from "lucide-react";
import petDog from "@/assets/pet-cat-care.jpg";

const services = [
  { icon: Stethoscope, title: "Consultas clínicas", desc: "Avaliação rigorosa e check-up preventivo realizados com calma, no tempo e no ambiente do seu pet." },
  { icon: Syringe, title: "Vacinação", desc: "Proteção com vacinas importadas de alto padrão. " },
  { icon: FlaskConical, title: "Coleta de exames", desc: "Sangue, urina e demais materiais laboratoriais." },
  { icon: Cpu, title: "Microchipagem", desc: "Identificação para viagens nacionais e internacionais." },
  { icon: Sparkles, title: "Certificado para viagem", desc: "Emissão de atestados de saúde e orientações para o transporte nacional e internacional (CVI)." },
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
            Uma avaliação que vai além do básico. Cada consulta inclui uma escuta atenta do histórico de saúde, um exame físico minucioso e um plano de tratamento criado exclusivamente para a realidade do seu pet.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="reveal relative overflow-hidden rounded-[2rem] shadow-card lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <img
              src={petDog}
              alt="Cãozinho feliz sendo acariciado em casa"
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-[4/5] h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="font-display text-xl font-semibold text-background">
                Quem cuida com carinho, cura com confiança.
              </p>
              <p className="mt-2 text-sm text-background/80">
                Cada visita é pensada para o conforto do seu melhor amigo.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
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
      </div>
    </section>
  );
}
