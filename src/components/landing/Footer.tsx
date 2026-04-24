import { Instagram, MessageCircle, MapPin, PawPrint } from "lucide-react";

const bairros = [
  "Campolim", "Santa Rosália", "Wanel Ville", "Jardim Vergueiro",
  "Parque Campolim", "Jardim Europa", "Trujillo", "Vila Hortência",
  "Jardim Paulistano", "Vila Trujillo",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary">
                <PawPrint className="h-5 w-5" />
              </span>
              Dra. Veterinária
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Atendimento veterinário hospitalar em domicílio em Sorocaba/SP. CRMV-SP registrada.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://wa.me/5515999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-primary hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <MapPin className="h-3.5 w-3.5" /> Bairros atendidos
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {bairros.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contato</h3>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li>WhatsApp: (15) 99999-9999</li>
              <li>contato@dravet.com.br</li>
              <li>Sorocaba — SP</li>
              <li>Atendimento: Seg a Sáb, 8h–19h</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Dra. Veterinária Sorocaba. Todos os direitos reservados.</p>
          <p>CRMV-SP nº 00000</p>
        </div>
      </div>
    </footer>
  );
}
