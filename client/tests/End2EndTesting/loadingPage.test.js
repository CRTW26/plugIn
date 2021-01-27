const puppeteer = require('puppeteer');

let browser;
let page;

describe('loading page', () => {

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true
    });
    page = await browser.newPage();
    await page.goto('http://localhost:8080');
  });

  afterAll(() => {
    browser.close()
  })

  test('Page loads title', async () => {
    await page.waitForSelector('header');
    const html =  await page.$eval('#title', e => e.innerHTML);
    expect(html).toBe('plugIn');
  });

})
