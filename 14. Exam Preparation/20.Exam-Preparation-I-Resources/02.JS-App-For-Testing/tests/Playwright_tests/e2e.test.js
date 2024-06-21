const { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const host = 'http://localhost:3000'; // Application host (NOT service host - that can be anything)

let browser;
let context;
let page;

let user = {
    username : "",
    email : "",
    password : "123456",
    confirmPass : "123456",
};

describe("e2e tests", () => {
    beforeAll(async () => {
        browser = await chromium.launch();
    });

    afterAll(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    
    describe("authentication", () => {
        test('register makes correct API call', async()=>{
            await page.goto(host)
            await page.click('text=Register')
            await page.waitForSelector('form') 
            
            let random = Math.floor(Math.random()*1000) 
            username=`Auto_Test_${random}`
            email=`abv${random}@abv.bg`

            await page.locator('#userName').fill(user.username)
            await page.locator('#email').fill(user.email)
            await page.locator('#password').fill(user.password)
            await page.locator('#repeatPass').fill(user.confirmPass) 

            let response = await Promise.all ([
                page.waitForResponse(response=>response.url().includes('/user/register') && response.status()===200),
                page.click(['type="submit"'])
            ]) 

            expect(response.ok).toBeTruthy() 
            
            let userData=await response.json()
            
            console.log(userData) 

            expect(userData.email).toEqual(user.email)
            expect(userData.password).toEqual(user.password)            
        }) 
        test('login with valid data returrns correctAPI call', async()=>{
            await page.goto(host)
            await page.click('text=Login')
            await page.waitForSelector('form')

            
        })
        
    });

    describe("navbar", () => {
        
    });

    describe("CRUD", () => {
        
    });
});