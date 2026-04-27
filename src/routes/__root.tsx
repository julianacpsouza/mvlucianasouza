import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Luciana Souza | Médica Veterinária — Atendimento Domiciliar em Sorocaba" },
      { name: "description", content: "Atendimento veterinário no conforto do seu lar em Sorocaba/SP. Consultas, vacinas, exames e microchipagem sem estresse para o seu pet." },
      { name: "author", content: "Clínica Veterinária Domiciliar Sorocaba" },
      { property: "og:title", content: "Luciana Souza | Médica Veterinária — Atendimento Domiciliar em Sorocaba" },
      { property: "og:description", content: "Atendimento veterinário no conforto do seu lar em Sorocaba/SP. Consultas, vacinas, exames e microchipagem sem estresse para o seu pet." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Luciana Souza | Médica Veterinária — Atendimento Domiciliar em Sorocaba" },
      { name: "twitter:description", content: "Atendimento veterinário no conforto do seu lar em Sorocaba/SP. Consultas, vacinas, exames e microchipagem sem estresse para o seu pet." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/09006e0e-74ab-421c-b8b8-854bcb8bbd4d/id-preview-5bfe3126--efe9ce1a-c27f-4535-9ea4-10d4c81152b0.lovable.app-1777301544828.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/09006e0e-74ab-421c-b8b8-854bcb8bbd4d/id-preview-5bfe3126--efe9ce1a-c27f-4535-9ea4-10d4c81152b0.lovable.app-1777301544828.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
