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
    
    describe('testing authentication functionality ', async()=>{
        test('register with valid data returns correct API calls', async() =>{
              await page.goto(host)
              await  page.click('text=Register')
              await page.waitForSelector('form') 

              let random=Math.floor(Math.random()*1000) 
              let randomUserName=`RandomName_${random}`
              let randomEmail=`abv${random}@abv.bg`
              user.email=randomEmail
              user.username=randomUserName
              
              await page.locator('#username').fill(user.username)
              await page.locator('#email').fill(user.email)
              await page.locator('#password').fill(user.password)
              await page.locator('#repeatPass').fill(user.confirmPass)
             

              let [response] = await Promise.all ([
                   page.waitForResponse(response=>response.url().includes('/users/register') && response.status()===200),
                   page.click('[type="submit"]')
              ]) 

              expect(response.ok).toBeTruthy();

              let userData=await response.json()
              expect(userData.email).toBe(user.email)
              expect(userData.password).toEqual(user.password)

        })
        test('login with valid credentials return correct API calls', async()=>{
              await page.goto(host)
              await page.click('text=Login')
              await page.waitForSelector('form') 

              await page.locator('#email').fill(user.email)
              await page.locator('#password').fill(user.password)

              let [response]=await Promise.all([
                page.waitForResponse(response=>response.url().includes('/users/login')&&response.status()===200),
                page.click('[type="submit"]')
              ])

              expect(response.ok).toBeTruthy()
              let userData=await response.json();
              expect(userData.email).toBe(user.email)
              expect(userData.password).toBe(user.password)
        })
        test('logout  return correct API calls', async()=>{
               await page.goto(host)
               await page.click('text=Login')
               await page.waitForSelector('form')

               await page.locator('#email').fill(user.email)
               await page.locator('#password').fill(user.password)
               await page.click('[type="submit"]') 

               let [response]=await Promise.all([
                     page.waitForResponse(response=>response.url().includes('/users/logout')&&response.status()===204),
                     page.click('text=Logout')
               ])

               expect(response.ok).toBeTruthy()

               await page.waitForSelector('text=Login')

               await page.waitForURL(host+'/')

               expect(page.url()).toBe(host+'/')
        })
    })
    describe('testing navBar functionallity', async()=>{
        test('logged users sees correct buttons', async()=>{
                page.goto(host)
                page.click('text=Login')

                page.locator('#email').click(user.email)
                page.locator('#password').click(user.password)
                page.click('[type="submit"]')

                expect(page.locator('#All Memes')).toBeVisible();
        })
    })
    
})

