const puppeteer = require('puppeteer');

describe('Loading page', () => {
  test('Page loads input and map', async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 650,
        height: 2400
      },
      userAgent:  ''
    });

    await page.goto('http://localhost:8080');
    await page.waitForSelector('header');

    const html = await page.$eval('header', e => e.innerHTML);
    expect(html).toBe('<a><h1>plugIn</h1></a>');

    browser.close();
  }, 16000);
})