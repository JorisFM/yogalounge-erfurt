# YogaLounge Erfurt

Website der YogaLounge Erfurt (Kathrin Seemann), gebaut mit [Astro](https://astro.build) als statische Seite für GitHub Pages.

## Lokal starten

```bash
npm install
npm run dev
```

Die Seite läuft dann unter http://localhost:4321.

## Veröffentlichen auf GitHub Pages

1. Repository auf GitHub anlegen und diesen Ordner pushen (Branch `main`).
2. Auf GitHub unter **Settings → Pages → Build and deployment** als Source **GitHub Actions** wählen.
3. Jeder Push auf `main` baut und veröffentlicht die Seite automatisch (`.github/workflows/deploy.yml`).

Der Base-Pfad (`/<repo-name>/`) wird im Workflow automatisch gesetzt.

## Domain yogalounge-erfurt.de

DNS beim Domain-Anbieter:

| Typ | Name | Wert |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | jorisfm.github.io |

Danach unter Settings → Pages die Custom Domain `yogalounge-erfurt.de` eintragen und „Enforce HTTPS“ aktivieren, sobald das Zertifikat da ist. Mit eigener Domain setzt der Workflow den Base-Pfad automatisch auf `/`.

## Inhalte pflegen

| Was | Wo |
| --- | --- |
| Adresse, Telefon, E-Mail, bsport-Links | `src/data/site.ts` |
| Kurse, Kurstexte und Wochenplan | `src/data/kurse.ts` |
| Team | `src/data/team.ts` |
| Preise | `src/pages/preise.astro` |
| Retreat | `src/pages/retreat.astro` |
| Workshops auf der Startseite | `src/pages/index.astro` (Liste `termine`) |
| Fotos | `src/assets/img/` (werden beim Build automatisch verkleinert und als WebP ausgeliefert) |

Der verbindliche, tagesaktuelle Kursplan liegt bei bsport. Der Wochenplan auf der Website zeigt den regulären Rhythmus.

## Gestaltung

- Farben: Safran `#F3A31B`, Tinte `#1B1E3A`, Kalk `#FBF9F6` (Tokens in `src/styles/global.css`)
- Schriften: Eczar (Überschriften) und Mukta (Text), lokal eingebunden über Fontsource, keine Verbindung zu Google
- Keine Cookies, kein Tracking. Die OpenStreetMap-Karte lädt erst nach Klick.
