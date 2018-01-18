import puppeteer from 'puppeteer';

test('First Test', async () => {
	let browser = await puppeteer.launch({headless: false});
	let page = await browser.newPage();

	await page.goto('http://localhost:3000/');
	await page.waitForSelector('.App-tittle');

	const html = await page.$eval('.App-title', e => e.innerHTML);
	expect(html).toBe('Welcome to React');

	browser.close();
}, 16000);
