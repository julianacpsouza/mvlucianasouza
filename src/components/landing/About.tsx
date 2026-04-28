import vetPortrait from "@/assets/vet-portrait.png";
import { Award, GraduationCap, BadgeCheck } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-5 md:gap-16">
          <div className="reveal md:col-span-2">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-soft shadow-card aspect-[4/5]">
              <img
                src={vetPortrait}
                alt="Dra. Luciana Souza, médica veterinária"
                loading="lazy"
                width={896}
                height={1344}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <ul className="mt-6 grid gap-4 grid-cols-2 lg:grid-cols-4">
              {[
                { icon: GraduationCap, label: "Formação", value: "UNESP/Botucatu" },
                { icon: BadgeCheck, label: "Registro", value: "CRMV-SP" },
                { icon: Award, label: "Residência", value: "Infectologia" },
                { icon: GraduationCap, label: "Pós-graduação", value: "Neurologia (em andamento)" },
              ].map((it) => (
                <li key={it.label} className="rounded-xl border border-border bg-card p-4">
                  <it.icon className="h-5 w-5 text-primary" />
                  <div className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">{it.label}</div>
                  <div className="font-display text-base font-semibold text-foreground">{it.value}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal md:col-span-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            SOBRE
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Medicina veterinária com escuta, ciência e afeto.
          </h2>
          <div className="mt-6 text-base leading-relaxed text-muted-foreground space-y-4 whitespace-pre-line">
            <p>
              A medicina veterinária sempre foi minha vocação, mas a vivência prática me ensinou que ela vai muito além do amor pelos animais: é uma profissão de grandes desafios, decisões rápidas e muita responsabilidade.
            </p>
            <p>
              Durante minha trajetória profissional, atuei na linha de frente de clínicas e hospitais veterinários. Vivenciei a rotina intensa das internações e o volume alto de atendimentos. Foi justamente nesse cenário de ritmo acelerado que percebi algo importante: o ambiente hospitalar salva vidas, mas o estresse e a pressa da rotina clínica muitas vezes dificultam a conexão real com o paciente e mascaram sinais essenciais para um diagnóstico minucioso.
            </p>
            <p>
              Foi assim que me encontrei no atendimento em domicílio. Nele, posso resgatar a essência da medicina: ouvir o histórico com paciência, observar o animal em seu habitat natural e conduzir o exame físico respeitando o tempo de cada paciente.
            </p>
            <p>
              Para mim, o verdadeiro acolhimento exige excelência técnica. Sou especialista em Infectologia Veterinária e, atualmente, realizo minha pós-graduação em Neurologia, pela Bioethicus. São áreas complexas que demandam um olhar clínico rigoroso e investigativo — algo que a tranquilidade e o foco do atendimento domiciliar me permitem exercer com precisão. Meu compromisso é entregar uma medicina de ponta, garantindo o melhor cuidado sem que seu pet precise cruzar a porta de casa.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
