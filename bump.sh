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
INDEX_FILE="$DIR/index.html"
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
