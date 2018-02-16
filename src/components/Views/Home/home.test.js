import puppeteer from 'puppeteer';

test('First Test', async () => {
	let browser = await puppeteer.launch({headless: false});
	let page = await browser.newPage();

	await page.goto('http://localhost:3000/');
	await page.waitForSelector('#pwd-container');

	await page.type('#email', 'admin@mail.com');
	const valueEmail = await page.evaluate(() => document.querySelector('#email').value );
	expect(valueEmail).toBe('admin@mail.com');

	await page.type('#password', 'password');
	const valuePassword = await page.evaluate(() => document.querySelector('#password').value );
	expect(valuePassword).toBe('password');
	
	//const submitBtn = await page.evaluate(() => document.getElementById('#submit').click() );
	//await page.click('#submit');

	await browser.close();

}, 16000);
