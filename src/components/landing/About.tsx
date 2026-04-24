import vetPortrait from "@/assets/vet-portrait.png";
import petPaw from "@/assets/pet-paw-care.jpg";
import { Award, GraduationCap, BadgeCheck } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-5 md:gap-16">
        <div className="reveal relative md:col-span-2">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-soft shadow-card aspect-[4/5]">
            <img
              src={vetPortrait}
              alt="Dra. Luciana Souza, médica veterinária"
              loading="lazy"
              width={896}
              height={1344}
              className="absolute inset-x-0 bottom-0 mx-auto h-[110%] w-auto object-contain"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden w-40 overflow-hidden rounded-2xl border-4 border-background shadow-card sm:block">
            <img
              src={petPaw}
              alt="Veterinária segurando a patinha de um cãozinho"
              loading="lazy"
              width={400}
              height={400}
              className="h-32 w-full object-cover"
            />
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
