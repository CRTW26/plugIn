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
    await page.waitForSelector('form');
    await page.type('#postcode', 's10 1bd');
    await page.click('[type="submit"');
    await page.waitForSelector('ul')
    const html =  await page.$eval('#stationList', e => e.innerHTML);
    expect(html).toBe('Charging points near you:');
  });

})