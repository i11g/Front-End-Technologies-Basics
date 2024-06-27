const { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const host = 'http://localhost:3000'; // Application host (NOT service host - that can be anything)

let browser;
let context;
let page;

let user = {
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
        test('register with valid data returns correct API calls', async()=>{
             //arrange 
              await page.goto(host)
              await page.click('text=Register')
              await page.waitForSelector('form') 
              
              let random=Math.floor(Math.random()*1000) 
              let randomEmail=`abv${random}@abv.bg`
              user.email=randomEmail


              //act 
              await page.locator('#email').fill(user.email)
              await page.locator('#password').fill(user.password)
              await page.locator('#repeat-pass').fill(user.confirmPass) 

              let [response] = await Promise.all([
                    page.waitForResponse(response=>response.url().includes("/users/register") && response.status()==200),
                    page.click('[type="submit"]')
              ])

              let jsonData=await response.json()

              expect(response.ok).toBeTruthy()
              expect(jsonData.email).toEqual(user.email)
              expect(jsonData.password).toEqual(user.password)
        })
    })

    describe("navbar", () => {
        
    });

    describe("CRUD", () => {
        
    })
})