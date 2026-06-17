# Pinpoint for Storyworth

*Kit version v1.0.0 · built 2026-06-15*

Pinpoint adds a small floating comment pill to any HTML prototype. Click it, point at anything on the page, and leave a comment. Comments are saved to **Storyworth's shared cloud automatically** — anyone who opens the same prototype sees the same comments. There are no accounts, logins, or API keys to manage; everything this kit needs is already inside it.

## What's in this kit

```
storyworth-pinpoint-v1.0.0/
├── README.md                                ← this file
├── VERSION                                  ← Pinpoint version (v1.0.0)
├── CHANGELOG.md                             ← what changed across versions
└── .claude/
    └── skills/
        └── adding-pinpoint/
            ├── SKILL.md                     ← a Claude Code skill that wires Pinpoint in for you
            └── pinpoint.js                  ← the Pinpoint bundle, preconfigured for Storyworth
```

## Easiest path — with Claude Code

1. Copy the **`.claude/skills/adding-pinpoint`** folder from this kit into your prototype project, so it lives at `<your-project>/.claude/skills/adding-pinpoint/`. (Create the `.claude/skills/` folders if they don't exist yet; if you already have a `.claude/skills/`, just drop `adding-pinpoint` in alongside whatever's there.)
2. Open your project in Claude Code.
3. Run:
   ```
   /adding-pinpoint path/to/your-prototype.html
   ```
   Claude copies `pinpoint.js` next to your prototype, adds a single `<script>` tag, and sets up version tracking. That's the whole integration.

## Manual path — without Claude Code

1. Copy `.claude/skills/adding-pinpoint/pinpoint.js` into the same folder as your prototype's HTML file.
2. In that HTML file's `<head>`, before any other `<script>` tags, add:
   ```html
   <script src="pinpoint.js" data-prototype="your-prototype-name"></script>
   ```
   Use a unique `data-prototype` value per prototype — that name is what scopes the comments.
3. Open the HTML file in a browser. The Pinpoint pill appears in the corner.

## Updating Pinpoint later

When you receive a newer kit (a higher `v…` in the filename), update your prototypes by replacing their `pinpoint.js` with the new one — either re-run `/adding-pinpoint` (it overwrites the copy) or just copy the file over. Your comments are unaffected. See `CHANGELOG.md` for what changed, and check the running version anytime in the browser console via `Pinpoint.version`.

## Good to know

- **Comments are shared.** Everyone who opens a prototype with the same `data-prototype` name sees and adds to the same threads. Pick a distinct name per prototype.
- **The embedded key is public and safe.** Pinpoint uses a public ("anon") key — the same kind that ships inside any web app's JavaScript. It can only reach Storyworth's comment data, nothing else.
- **Offline still works.** If the cloud is ever unreachable, comments are kept locally in the browser and sync up the next time the prototype loads.
- **Reviewers install nothing.** To leave feedback, someone just opens the prototype, clicks the pill → **Comment**, clicks any element, types, and submits.
