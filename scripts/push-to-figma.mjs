import fs from 'fs'

const scenarios = [
  { id: 'a1-new',                     label: 'A1 — New User',                   file: '/tmp/memoir-screenshots/a1-new.png' },
  { id: 'a1-first-question',          label: 'A1 — First Question',             file: '/tmp/memoir-screenshots/a1-first-question.png' },
  { id: 'a1-first-question-answered', label: 'A1 — First Question Answered',    file: '/tmp/memoir-screenshots/a1-first-question-answered.png' },
  { id: 'a1-unengaged',               label: 'A1 — Unengaged',                  file: '/tmp/memoir-screenshots/a1-unengaged.png' },
  { id: 'a1-five-answered',           label: 'A1 — Five Answered',              file: '/tmp/memoir-screenshots/a1-five-answered.png' },
  { id: 'a1-near-end',                label: 'A1 — Near End',                   file: '/tmp/memoir-screenshots/a1-near-end.png' },
]

const data = scenarios.map(s => ({
  label: s.label,
  base64: fs.readFileSync(s.file).toString('base64'),
}))

// Output as JSON so we can embed it in the Figma plugin code
fs.writeFileSync('/tmp/memoir-figma-data.json', JSON.stringify(data))
console.log('Written to /tmp/memoir-figma-data.json')
