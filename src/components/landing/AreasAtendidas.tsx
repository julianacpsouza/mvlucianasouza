import { MapPin, MessageCircle } from "lucide-react";

const bairros = [
  "Campolim",
  "Parque Campolim",
  "Jardim Portal da Colina",
  "Santa Rosália",
  "Wanel Ville",
  "Jardim Vergueiro",
  "Jardim Europa",
  "Jardim Simus",
  "Trujillo",
  "Vila Trujillo",
  "Jardim Saira",
  "Jardim Faculdade",
  "Vila Hortência",
  "Vila Jardini",
  "Centro",
  "Além Ponte",
];

export function AreasAtendidas() {
  return (
    <section id="areas-atendidas" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Áreas atendidas
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Atendimento veterinário em domicílio em Sorocaba
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Atendo tutores em diversos bairros de Sorocaba e região, com foco
            em <strong>Campolim</strong>, <strong>Wanel Ville</strong>,{" "}
            <strong>Santa Rosália</strong>, <strong>Jardim Vergueiro</strong> e
            entorno. Cada visita é agendada com hora marcada para garantir
            atenção exclusiva ao seu pet.
          </p>
        </div>

        <ul className="reveal mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {bairros.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground transition-smooth hover:border-primary/40"
            >
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              {b}
            </li>
          ))}
        </ul>

        <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-8 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            Seu bairro não está na lista?
          </p>
          <p className="max-w-xl text-sm text-muted-foreground">
            Consulte a disponibilidade e o valor de deslocamento pelo WhatsApp.
            Atendo bairros vizinhos sob agendamento.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5515998624102"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-brand transition-smooth hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}