# AGENTS.md

Static single-file Spanish landing site for **NavLab** (a supplement contract-manufacturer / functional-foods brand). No build system, no package.json, no tests, no lint — all CSS/JS is inline in `navlab_landing.html`.

## Layout & conventions

- **`navlab_landing.html`** (repo root) is the only deliverable. Edit in place; keep self-contained (no external CSS/JS).
- **`Original_copia/navlab_landing.html`** is the untouched original. Never edit it — it's the reference backup.
- **Content language is Spanish.** Write copy in Spanish; keep the plain, active-voice tone used throughout.
- Images are referenced by repo-root-relative paths: `PRODUCTOS/*.jpg` (product photos), `_assets/*.png` (generated icons), `Isologo_NavLab.png` (official isologo).
- `_shots/` is scratch (screenshots) — safe to regenerate/delete. `_assets/` holds derived brand assets (favicon, apple-touch-icon, isologo square crops).

## Brand identity (derived from the isologo, not guessed)

- Palette: `--paper #f4f1e8`, `--paper-2 #ebe6d8`, `--ink #17140e`, `--ink-2 #6d6757`, `--forest #35654a`, `--forest-2 #1e3a2a`, `--sage #9fbd74`, `--bronze #8a5e28`, `--line #d9d2c0`.
- Fonts (Google Fonts): **Lora** display, **Raleway** body, **Space Mono** for data labels (LOTE, codes, captions).
- Positioning: **maquila B2B** (formulación exclusiva, extensión de marca, gestión de registro INVIMA, diseño de empaque) **+ marca propia** de alimentos funcionales — **Colágenos / Multivitamínicos / Antiácidos**. Products map: VitaTx (multivitamínico), Colágeno NavLab, MentaPlus (antiácido).
- The "dossier de laboratorio" motif (hairlines, mono `SEC.` codes, QC stamps, specimen plates) is intentional; numbering is only used where content is a real sequence (maquila process).

## Verification

- Render + screenshot with headless Chrome (Windows binary):
  `"/mnt/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --window-size=1440,8600 --virtual-time-budget=4000 --hide-scrollbars --screenshot="C:\...\_shots\out.png" "file:///C:/Users/ferne/Documents/Proyectos/NAVLAB/navlab_landing.html"`
- Visual QA relies on pixel analysis (node + `pngjs`/`jpeg-js`), not image viewing. Palette extraction / logo structure inspection = ASCII-render the PNG via a node script.

## Environment quirks

- **node.exe is the Windows binary**: it resolves `/tmp/...` and `/mnt/c/...` as `C:\tmp\...` / `C:\mnt\...` and fails. For node scripts touching files, use Windows paths (`C:\Users\...`) or run the script from a `/mnt/c` directory.
- **python3 has no pip / Pillow** — do image work with node (`pngjs`, `jpeg-js`), not PIL.
- Google Fonts load at runtime; screenshots need network. Images are large (0.1–0.55 MB) — add `loading="lazy"` to non-hero `<img>`.
- Accessibility floor already implemented: skip link, `:focus-visible`, `scroll-padding-top: 68px` (fixed nav), `prefers-reduced-motion`, `touch-action: manipulation`, scroll-spy nav active state. Don't regress these.
