---
name: adding-pinpoint
description: Add Pinpoint cloud comments to a Storyworth prototype HTML file (preconfigured — comments sync to Storyworth's shared cloud automatically)
argument-hint: "<path/to/file.html> [prototype-name]"
allowed-tools: Read, Edit, Glob, Write, Bash(cp *), Bash(chmod *), Bash(git *)
---

Add Pinpoint to the prototype HTML file specified in $ARGUMENTS.

**This kit is preconfigured for Storyworth (Pinpoint v1.0.0, built 2026-06-15).** The bundled `pinpoint.js` already contains Storyworth's cloud credentials, so comments sync to Storyworth's shared Pinpoint database automatically — there is nothing to configure, no account to create, and no API key to manage.

Arguments: `<path-to-html-file> [prototype-name]`
- `$0` = path to the HTML file
- `$1` = prototype name slug (optional; derived from filename if omitted)

---

## Step 1 — Copy in `pinpoint.js`

Copy the bundled `${CLAUDE_SKILL_DIR}/pinpoint.js` into the same directory as the HTML file using `cp`, overwriting any existing file.

This bundled `pinpoint.js` is preconfigured with Storyworth's cloud credentials — **do not** replace it with a copy from anywhere else, and do not try to rebuild it.

## Step 2 — Generate a UUID scope

Generate a valid UUID v4 inline (no shell command needed). Format: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` where `x` is a random hex digit and `y` is one of `8`, `9`, `a`, or `b`. This UUID will be used as the `scope` attribute. Example: `a3f2c1d0-8e4b-4a7f-b9c2-1d3e5f7a9b0c`.

## Step 3 — Generate a timestamp

Generate a UTC ISO 8601 timestamp inline (no shell command needed). Format: `YYYY-MM-DDTHH:MM:SS`. Use this single value for `data-updated`, the `UPDATED` file, and `CHANGELOG.md`.

## Step 4 — Determine the prototype name

If `$1` is provided, use it. Otherwise, derive a slug from the HTML filename: lowercase, hyphens instead of spaces, no extension (e.g. `my-prototype.html` → `my-prototype`). Confirm the derived name with the user before proceeding if they did not supply one.

## Step 5 — Pick a corner for the pill

Pinpoint renders a small floating pill (no toolbar, no layout impact). Default corner is **bottom-right**. Scan the prototype HTML for floating UI that would collide with it:

- Look for `position: fixed` or `position: absolute` elements anchored to a viewport corner (e.g. `bottom`/`right` offsets) — Dev menus, FABs, chat bubbles, "back to top" buttons, etc. Check both `<style>` blocks and inline styles.
- Choose a free corner, preferring this order: `bottom-right`, `bottom-left`, `top-right`, `top-left`.
- If all four corners are occupied, use `bottom-right` anyway (the pill is draggable, so reviewers can move it).

Use the chosen value for `data-position` in the next step. Omit the attribute entirely when the choice is the default `bottom-right`.

## Step 6 — Add the one-line script tag

In the HTML file's `<head>`, add the following line **before any other `<script>` tags** (or at the end of `<head>` if none exist):

```html
<script src="pinpoint.js" data-prototype="<prototype-name>" data-scope="<uuid>" data-label="<prototype-name>" data-position="<corner>" data-version="v1.0.0" data-updated="<timestamp>" data-changelog='[{"version":"v1.0.0","date":"<timestamp>","changes":["Initial version"]}]'></script>
```

This is the **entire integration** — the script bootstraps itself on DOM-ready and connects to Storyworth's cloud automatically. Do **not** add a `<pinpoint-overlay>` element, and do **not** add any body padding (the pill floats above the page).

- Use the prototype name slug for `data-prototype` and `data-label` (the label can be title-cased if it reads better).
- Use the UUID from Step 2 for `data-scope` and the timestamp from Step 3 for `data-updated`.
- `data-changelog` must use **single quotes** (JSON interior uses double quotes).
- Skip this step if the file already contains a `<script src="pinpoint.js">` tag with `data-prototype`.

**Migrating an old integration:** if the file contains a `<pinpoint-overlay>` element, `toolbar-*` attributes, or a `padding-top: var(--pinpoint-toolbar-height...)` body rule, remove them — carry the existing prototype name, scope UUID, version, updated timestamp, and changelog over to the script tag's `data-*` attributes. Also check the prototype's `bump.sh`: if its `sed` commands target `toolbar-version`/`toolbar-updated`/`toolbar-changelog`, rewrite those targets to `data-version`/`data-updated`/`data-changelog` (or replace the whole file with the current template from Step 7).

## Step 7 — Create versioning files

In the prototype directory (same directory as the HTML file), create the following files. Skip any that already exist.

**`VERSION`** — contains:
```
1.0.0
```

**`UPDATED`** — contains the timestamp from Step 3:
```
<timestamp>
```

**`CHANGELOG.md`** — initial entry:
```
## v1.0.0 — <timestamp>
- Initial version
```

**`bump.sh`** — full script below, with `<HTML_FILENAME>` replaced by the actual HTML file's basename (e.g. `index.html`):

```bash
#!/bin/bash
# Bump the semantic version for this prototype
# Usage: ./bump.sh [patch|minor|major] ["Change 1" "Change 2" ...]
#
# Defaults to "patch". Updates VERSION, UPDATED, CHANGELOG.md,
# data-version, data-updated, and data-changelog on the Pinpoint
# script tag in the HTML file.
#
# Examples:
#   ./bump.sh patch "Fixed layout bug" "Updated colors"
#   ./bump.sh minor "Added new section"
#   ./bump.sh                    # patch bump, generic changelog entry

set -e

DIR="$(cd "$(dirname "$0")" && pwd)"
VERSION_FILE="$DIR/VERSION"
UPDATED_FILE="$DIR/UPDATED"
CHANGELOG_FILE="$DIR/CHANGELOG.md"
INDEX_FILE="$DIR/<HTML_FILENAME>"
BUMP_TYPE="${1:-patch}"

# Validate bump type and collect changelog lines
CHANGES=()
case "$BUMP_TYPE" in
  major|minor|patch) shift; CHANGES=("$@") ;;
  *)
    # First arg isn't a bump type — treat all args as changelog lines, default to patch
    BUMP_TYPE="patch"
    CHANGES=("$@")
    ;;
esac

if [ ${#CHANGES[@]} -eq 0 ]; then
  CHANGES=("Version bump (no details provided)")
fi

# Read current version
if [ ! -f "$VERSION_FILE" ]; then
  echo "1.0.0" > "$VERSION_FILE"
fi

CURRENT=$(cat "$VERSION_FILE" | tr -d '[:space:]')
IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT"

case "$BUMP_TYPE" in
  major)
    MAJOR=$((MAJOR + 1))
    MINOR=0
    PATCH=0
    ;;
  minor)
    MINOR=$((MINOR + 1))
    PATCH=0
    ;;
  patch)
    PATCH=$((PATCH + 1))
    ;;
esac

NEW_VERSION="$MAJOR.$MINOR.$PATCH"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%S")

# Update VERSION and UPDATED files
echo "$NEW_VERSION" > "$VERSION_FILE"
echo "$TIMESTAMP" > "$UPDATED_FILE"

# Prepend new entry to CHANGELOG.md
CHANGELOG_ENTRY="## v$NEW_VERSION — $TIMESTAMP"
for change in "${CHANGES[@]}"; do
  CHANGELOG_ENTRY="$CHANGELOG_ENTRY
- $change"
done

if [ -f "$CHANGELOG_FILE" ]; then
  EXISTING=$(cat "$CHANGELOG_FILE")
  printf '%s\n\n%s\n' "$CHANGELOG_ENTRY" "$EXISTING" > "$CHANGELOG_FILE"
else
  printf '%s\n' "$CHANGELOG_ENTRY" > "$CHANGELOG_FILE"
fi

# Update data-version on the Pinpoint script tag
sed -i '' "s/data-version=\"v[0-9]*\.[0-9]*\.[0-9]*\"/data-version=\"v$NEW_VERSION\"/" "$INDEX_FILE"

# Update data-updated on the Pinpoint script tag
if grep -q 'data-updated=' "$INDEX_FILE"; then
  sed -i '' "s/data-updated=\"[^\"]*\"/data-updated=\"$TIMESTAMP\"/" "$INDEX_FILE"
fi

# Rebuild data-changelog JSON from CHANGELOG.md
CHANGELOG_JSON="["
FIRST_ENTRY=true
ENTRY_VERSION=""
ENTRY_DATE=""
ENTRY_CHANGES=""

while IFS= read -r line; do
  if [[ "$line" =~ ^##\ (v[0-9]+\.[0-9]+\.[0-9]+)\ —\ (.+)$ ]]; then
    if [ -n "$ENTRY_VERSION" ]; then
      if [ "$FIRST_ENTRY" = true ]; then
        FIRST_ENTRY=false
      else
        CHANGELOG_JSON="$CHANGELOG_JSON,"
      fi
      CHANGELOG_JSON="$CHANGELOG_JSON{\"version\":\"$ENTRY_VERSION\",\"date\":\"$ENTRY_DATE\",\"changes\":[$ENTRY_CHANGES]}"
    fi
    ENTRY_VERSION="${BASH_REMATCH[1]}"
    ENTRY_DATE="${BASH_REMATCH[2]}"
    ENTRY_CHANGES=""
  elif [[ "$line" =~ ^-\ (.+)$ ]]; then
    CHANGE_TEXT="${BASH_REMATCH[1]}"
    CHANGE_TEXT=$(echo "$CHANGE_TEXT" | sed 's/\\/\\\\/g; s/"/\\"/g')
    if [ -n "$ENTRY_CHANGES" ]; then
      ENTRY_CHANGES="$ENTRY_CHANGES,"
    fi
    ENTRY_CHANGES="$ENTRY_CHANGES\"$CHANGE_TEXT\""
  fi
done < "$CHANGELOG_FILE"

# Don't forget the last entry
if [ -n "$ENTRY_VERSION" ]; then
  if [ "$FIRST_ENTRY" = true ]; then
    FIRST_ENTRY=false
  else
    CHANGELOG_JSON="$CHANGELOG_JSON,"
  fi
  CHANGELOG_JSON="$CHANGELOG_JSON{\"version\":\"$ENTRY_VERSION\",\"date\":\"$ENTRY_DATE\",\"changes\":[$ENTRY_CHANGES]}"
fi

CHANGELOG_JSON="$CHANGELOG_JSON]"

# Update data-changelog on the Pinpoint script tag
ESCAPED_JSON=$(echo "$CHANGELOG_JSON" | sed 's/[&]/\\&/g')
if grep -q "data-changelog=" "$INDEX_FILE"; then
  sed -i '' "s|data-changelog='[^']*'|data-changelog='$ESCAPED_JSON'|" "$INDEX_FILE"
fi

echo "v$NEW_VERSION"
```

After writing `bump.sh`, make it executable:
```
chmod +x <prototype-directory>/bump.sh
```

## Step 8 — Confirm

Report what was changed:
- That `pinpoint.js` was copied in (or was already present)
- The prototype name, scope UUID, timestamp, and pill corner (`data-position`) used
- Which steps were skipped (if any) because they were already in place
- That versioning files were created: `VERSION` (1.0.0), `UPDATED`, `CHANGELOG.md`, and `bump.sh`
- That comments save to Storyworth's shared cloud automatically, and are visible to anyone who opens this prototype with the same `data-prototype` name
- How to use `bump.sh` manually for a meaningful changelog entry:
  ```
  ./bump.sh patch "Description of change"
  ./bump.sh minor "New feature"
  ./bump.sh major "Breaking change"
  ```
