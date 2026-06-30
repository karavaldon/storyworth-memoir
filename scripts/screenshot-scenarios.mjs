import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'http://localhost:5199'
const OUT_DIR = '/tmp/memoir-screenshots'
fs.mkdirSync(OUT_DIR, { recursive: true })

const scenarios = [
  { id: 'a1-new',                    label: 'New user',                  file: 'a1-new.png' },
  { id: 'a1-first-question',         label: 'First question',            file: 'a1-first-question.png' },
  { id: 'a1-first-question-answered',label: 'First question answered',   file: 'a1-first-question-answered.png' },
  { id: 'a1-unengaged',              label: 'Unengaged',                 file: 'a1-unengaged.png' },
  { id: 'a1-five-answered',          label: 'Five answered',             file: 'a1-five-answered.png' },
  { id: 'a1-near-end',               label: 'Near end',                  file: 'a1-near-end.png' },
]

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 })

for (const scenario of scenarios) {
  console.log(`Capturing: ${scenario.id}`)

  // Load the page fresh each time
  await page.goto(BASE_URL, { waitUntil: 'networkidle0' })
  await new Promise(r => setTimeout(r, 800))

  // Click the logo to open dev menu
  await page.click('header button[title="Dev tools"]')
  await new Promise(r => setTimeout(r, 300))

  // Click the matching scenario button by visible text
  const buttons = await page.$$('button')
  for (const btn of buttons) {
    const text = await btn.evaluate(el => el.textContent?.trim() ?? '')
    if (text.toLowerCase() === scenario.label.toLowerCase()) {
      await btn.click()
      break
    }
  }

  await new Promise(r => setTimeout(r, 1200))

  const outPath = path.join(OUT_DIR, scenario.file)
  await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1440, height: 900 } })
  console.log(`  → saved ${outPath}`)
}

await browser.close()
console.log('Done.')
