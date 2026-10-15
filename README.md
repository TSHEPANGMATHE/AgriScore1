# Mathla — CAPS Maths Tutor Landing Page

Landing page for Mathla, a CAPS-aligned maths practice tool for Grades 10–12,
plus a standalone sign-in page.

## Files

- `index.html` — the landing page markup (topics, dashboard, papers, quiz modal)
- `signin.html` — a separate sign in / create account page
- `styles.css` — all styles (theme variables, layout, components), shared by both pages
- `common.js` — shared behavior: theme toggle, language switching (i18n), and the
  auth helpers (`attemptSignIn`, `attemptSignUp`, `getSession`, `signOut`,
  `renderAuthArea`). Loaded by **both** pages.
- `script.js` — `index.html`-only behavior: topic data, quiz logic, the weakness
  dashboard, and the practice-paper modal
- `signin.js` — `signin.html`-only behavior: the sign-in/create-account form and
  the tab switcher

Each page links `styles.css`, then `common.js`, then its own page-specific script:

```html
<!-- index.html -->
<link rel="stylesheet" href="styles.css">
...
<script src="common.js"></script>
<script src="script.js"></script>

<!-- signin.html -->
<link rel="stylesheet" href="styles.css">
...
<script src="common.js"></script>
<script src="signin.js"></script>
```

Keep all files in the same folder — the links are relative paths. `common.js`
must load before `script.js`/`signin.js` on both pages, since they call
functions it defines (`t`, `applyLang`, `renderAuthArea`, the auth helpers).

## How the two pages talk to each other

- The nav on `index.html` has an `#authArea` slot. When signed out it shows a
  "Sign in" link to `signin.html`; when signed in (checked via
  `localStorage`) it shows the account's email and a sign-out button instead.
  `signin.html` has no such slot — it *is* the sign-in surface.
- `signin.html` accepts an optional `?redirect=somepage.html` query param and
  sends the user there after a successful sign in/sign up; it defaults to
  `index.html`.
- Both pages share the same `localStorage` keys (theme, language, accounts,
  session), since they're served from the same origin.

## Running it

No build step. Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server
```

## Notes

- Light/dark theme via `data-theme` attribute + CSS variables in `:root`.
- Multi-language text uses `data-i18n` / `data-i18n-html` attributes on elements; translations are wired up in `script.js`.
- Print styles for the practice-paper modal are in `styles.css` under `@media print`.
- Sign in / create account (email + password) is handled entirely client-side (see the "auth" section in `common.js`, and the form logic in `signin.js`): accounts and a SHA-256 password hash are stored in this browser's `localStorage`, and a session flag remembers who's signed in on this device. **This is a front-end demo, not real authentication** — there's no server, so it can't verify identity, recover a forgotten password, or let someone sign in from a second device/browser. For production use, replace the `loadUsers`/`saveUsers`/`hashPassword` functions in `common.js` with calls to a real backend (e.g. an API that verifies credentials and returns a session token).
