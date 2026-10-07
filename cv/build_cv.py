"""Render cv/cv.html to PDF with headless Chrome.

Two variants from the same content:
  - pink   -> public/resume.pdf          (matches the website, linked from the hero)
  - formal -> cv/Luu-Trung-Kien-CV.pdf   (navy, single typeface, for corporate applications)

Usage (from the repo root, after `npm install` so the fonts exist):
    python3 cv/build_cv.py
"""
import asyncio
from pathlib import Path

from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'cv' / 'cv.html'
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
VARIANTS = {
    'pink': ROOT / 'public' / 'resume.pdf',
    'formal': ROOT / 'cv' / 'Luu-Trung-Kien-CV.pdf',
}


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path=CHROME)
        for variant, out in VARIANTS.items():
            page = await browser.new_page()
            await page.goto(SRC.as_uri(), wait_until='networkidle')
            if variant == 'formal':
                await page.evaluate("document.body.classList.add('formal')")
            await page.evaluate('document.fonts.ready')
            await page.wait_for_timeout(500)
            await page.pdf(path=str(out), format='A4', print_background=True, prefer_css_page_size=True)
            await page.close()
            print(f'wrote {out.relative_to(ROOT)} ({variant})')
        await browser.close()


asyncio.run(main())
