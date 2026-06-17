# Pinpoint — Changelog

Notable changes to the **Pinpoint library** — the bundle shipped inside client handoff kits. This is separate from any individual prototype's `data-version`.

## v1.0.0 — 2026-06-15
- First versioned release.
- Cloud comments via Supabase, with automatic localStorage fallback.
- Per-client handoff kits with baked-in credentials (`npm run build:kit`); each kit carries its own creds-baked `pinpoint.js`, a bundled skill, this changelog, and a `VERSION` file.
