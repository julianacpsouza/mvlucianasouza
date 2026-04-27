import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

// 📸 Edite este array para trocar/adicionar fotos do carrossel.
// Basta substituir o `src` pelo caminho da nova imagem em src/assets/
// e atualizar o `alt` para acessibilidade.
const photos = [
  { src: gallery1, alt: "Foto 1 — Pet em casa" },
  { src: gallery2, alt: "Foto 2 — Cuidado felino" },
  { src: gallery3, alt: "Foto 3 — Cuidado com a patinha" },
  { src: gallery4, alt: "Foto 4 — Atendimento veterinário" },
  { src: gallery5, alt: "Foto 5 — Cão feliz em casa" },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Galeria
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Momentos de carinho e cuidado
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Um pouco do nosso dia a dia com os pets e seus tutores.
          </p>
        </div>

        <div className="reveal mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {photos.map((p, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface shadow-soft"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-smooth group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
