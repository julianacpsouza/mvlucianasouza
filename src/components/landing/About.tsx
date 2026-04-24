import vetImage from "@/assets/vet-hero.jpg";
import { Award, GraduationCap, BadgeCheck } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-5 md:gap-16">
        <div className="reveal relative md:col-span-2">
          <div className="overflow-hidden rounded-[2rem] shadow-card">
            <img src={vetImage} alt="Retrato da veterinária" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="reveal md:col-span-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            SOBRE
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Medicina veterinária com escuta, ciência e afeto.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Formada pela Universidade Estadual Paulista (UNESP) e com mais de 8 anos de experiência clínica, a Dra. dedica seu trabalho ao atendimento humanizado em domicílio. Acredita que o ambiente familiar é peça-chave para diagnósticos precisos e tratamentos bem-sucedidos.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: GraduationCap, label: "Formação", value: "UNESP" },
              { icon: BadgeCheck, label: "Registro", value: "CRMV-SP" },
              { icon: Award, label: "Especialização", value: "Clínica de Pequenos" },
            ].map((it) => (
              <li key={it.label} className="rounded-xl border border-border bg-card p-4">
                <it.icon className="h-5 w-5 text-primary" />
                <div className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">{it.label}</div>
                <div className="font-display text-base font-semibold text-foreground">{it.value}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
