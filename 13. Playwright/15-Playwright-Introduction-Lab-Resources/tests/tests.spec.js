const {test, expect} =require('@playwright/test'); 

test('Navigatong to Playwright', async({page})=> {
    await page.goto('https://playwright.dev/')
    const title=await page.title();
    expect(title).toBe('Playwright')
})