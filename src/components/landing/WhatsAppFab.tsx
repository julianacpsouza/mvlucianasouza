import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5515998624102"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 font-medium text-primary-foreground shadow-brand transition-smooth hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm sm:inline">Agendar via WhatsApp</span>
    </a>
  );
}
