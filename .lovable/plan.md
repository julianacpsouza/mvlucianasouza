## Plano revisado de SEO — com seus ajustes incorporados

### ⚠️ Sobre a identidade visual
Você mencionou anexar a identidade visual, mas **não recebi nenhum arquivo** nesta mensagem (apenas texto). Para aplicar logo no favicon e cores/tipografia em outros pontos, **reenvie os arquivos** (logo PNG/SVG, paleta, manual de marca). Por ora, o plano abaixo:
- usa o **ícone PawPrint atual** como favicon temporário (criando um SVG simples) **OU** posso aguardar você reenviar a logo antes de implementar essa parte.

---

### 1. Meta tags (`index.html`)

**Title** — sem CRMV (você tem razão, fica longo demais):
```
Veterinária em Domicílio Sorocaba | Luciana Souza
```
(57 caracteres — dentro do limite ideal do Google)

**Meta description** — substituí "especialista em infectologia" por foco em benefício + ação. Sugestão:
```
Atendimento veterinário humanizado no conforto do seu lar em Sorocaba/SP. Consultas, vacinas e exames sem estresse para o seu pet. Agende pelo WhatsApp.
```
*Por que mudei:* "especialista em infectologia" é jargão técnico que não gera clique do tutor comum. O termo é mais útil em conteúdo de blog (E-E-A-T) do que em meta description, onde o objetivo é converter o clique. Mantemos a credibilidade técnica nos textos da seção Sobre e nos schemas JSON-LD (que o Google lê para autoridade).

**Twitter tags** — vou **remover** as `twitter:*` já que você não tem conta. As tags `og:*` cobrem WhatsApp, Instagram DM, Telegram, LinkedIn e até o próprio X usa og: como fallback. Sem prejuízo.

**Favicon** — duas opções:
- (a) Aguardar você reenviar a logo e usá-la
- (b) Implementar agora um favicon SVG temporário com o PawPrint na cor primária da marca (#5e2626), e trocar depois

**og:image** — usar `gallery-2.jpg` (cuidado felino, transmite carinho/proximidade) ou `gallery-4.jpg` (atendimento em ação, mais "explicativa"). **Minha recomendação: gallery-4.jpg**, porque mostra o serviço acontecendo — quem vê o link compartilhado entende imediatamente o que é. Confirma essa escolha?

**Adicionar também:**
- `<html lang="pt-BR">` ✓ (já está)
- `<link rel="canonical" href="https://mvlucianasouza.lovable.app/">`
- `geo.region`, `geo.placename` para SEO local
- **JSON-LD `VeterinaryCare`** com nome, CRMV, telefone, área de atendimento (Sorocaba), horários, redes sociais (apenas Instagram)

---

### 2. Seção Sobre (`About.tsx`)

**Pós-graduação em andamento — mantenho, sim.** Recomendação: deixar explícito que está em curso, isso reforça atualização contínua (sinal positivo de E-E-A-T para Google) e é honesto. Texto sugerido para o card:
```
Pós-graduação: Neurologia (em andamento)
```
*(que já é exatamente o que está no código atual — então não muda nada nos cards)*

**Endereço** — confirmado, não vamos colocar. No JSON-LD usaremos `areaServed: "Sorocaba, SP"` em vez de `address`, que é o correto para serviço móvel/domiciliar. O Google entende e ranqueia normalmente para buscas locais ("veterinário domicílio Sorocaba").

**Texto da seção Sobre** — você já corrigiu, mantemos como está.

---

### 3. FAQ (`FAQ.tsx`)

- ✅ **Remover** a pergunta sobre formas de pagamento (você não pediu, mas relendo: você pediu para tirar "valor da consulta" — essa pergunta não existe hoje no FAQ; existe só "formas de pagamento". **Confirma se é essa que devo remover, ou eu entendi errado?**)

Relendo seu pedido: "tire o valor da consulta (vamos colocar isso depois em blog)". Como **não há pergunta sobre valor no FAQ atual**, vou assumir que você quis dizer: **não adicionar** uma pergunta sobre preço (que eu havia sugerido no plano anterior). Mantenho então as 4 perguntas atuais intactas.

**Nova pergunta sugerida** (com bom volume de busca local):
```
P: Atendimento veterinário em casa é seguro para filhotes e pets idosos?
R: Sim — é justamente o público que mais se beneficia. Filhotes sem ciclo
vacinal completo evitam exposição a vírus em salas de espera, e pets
idosos não passam pelo estresse do trajeto, que pode descompensar
condições cardíacas, renais ou articulares.
```
*Por que essa:* "veterinário para filhote" e "veterinário para cachorro idoso" são buscas frequentes em Sorocaba e a resposta reforça dois benefícios-chave do serviço.

---

### 4. Sobre as seções extras

**"Por que escolher veterinário em casa"** — você está certa, **é redundante** com a seção "Por que em domicílio" (Benefits) que já existe e já cobre os 3 pilares (Diagnóstico Fiel, Ambiente Seguro, Atenção Exclusiva). **Removendo essa sugestão do plano.**

**Seção dedicada de bairros** — recomendo **SIM criar**, mesmo já existindo no footer. Motivos:
- O footer aparece só pra quem rola até o fim (poucos usuários)
- Para SEO local, ter uma seção com `<h2>` "Bairros atendidos em Sorocaba" + lista visível no corpo da página vale **muito mais** do que uma lista no rodapé
- Permite expandir a lista (hoje são 8 bairros — vou sugerir adicionar mais 6-8 do raio de atendimento)
- Cada bairro vira uma palavra-chave indexada ("veterinário domicílio Campolim", "veterinário Wanel Ville", etc.)

**Nova seção "Áreas atendidas"** — entre Galeria e FAQ, com:
- H2: "Atendimento veterinário em domicílio em Sorocaba"
- Texto curto de contexto (1 parágrafo com bairros principais inline)
- Grid visual com os bairros (ícone de pin + nome)
- CTA: "Seu bairro não está na lista? Consulte pelo WhatsApp"

E **mantenho o footer como está** (a duplicação não prejudica e até reforça).

---

### 📋 Resumo do que vai mudar

| Arquivo | Mudança |
|---|---|
| `index.html` | Title novo, description nova, remover twitter:*, adicionar canonical, geo tags, og:image (gallery-4), JSON-LD VeterinaryCare, favicon (a definir) |
| `src/components/landing/About.tsx` | Sem mudanças (textos OK, pós-graduação fica como está) |
| `src/components/landing/FAQ.tsx` | Adicionar 1 pergunta sobre filhotes/idosos |
| `src/components/landing/AreasAtendidas.tsx` | **Novo arquivo** — seção de bairros |
| `src/App.tsx` | Importar e renderizar `<AreasAtendidas />` entre Gallery e FAQ |
| `src/components/landing/Footer.tsx` | Sem mudanças |

---

### ❓ Preciso confirmar antes de implementar:

1. **Identidade visual**: reenviar arquivos (logo, paleta) ou implementar favicon temporário com PawPrint?
2. **og:image**: confirma `gallery-4.jpg` (atendimento em ação) ou prefere outra da galeria?
3. **FAQ valor**: confirmo que **não adiciono** pergunta sobre preço (vai pro blog), e mantenho as 4 atuais + a nova sobre filhotes/idosos. Correto?
4. **Lista de bairros expandida**: posso pesquisar e sugerir mais 6-8 bairros do entorno de Sorocaba para incluir, ou você prefere passar a lista exata que ela atende?
