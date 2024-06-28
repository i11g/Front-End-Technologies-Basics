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
        test('registration with valid data returns correct API calls', async ()=>{
                 //arrange      
                  await page.goto(host)
                  await page.click('text=Register')
                  await page.waitForSelector('form')
                  let random=Math.floor(Math.random()*1000) 
                  let randomEmail=`abv${random}&abv.bg`
                  user.email=randomEmail

                  //act
                  await page.locator('#email').fill(user.email)
                  await page.locator('#password').fill(user.password)
                  await page.locator('#repeatPassword').fill(user.confirmPass) 

                  let [response]=await Promise.all([
                      page.waitForResponse(response=>response.url().includes('/users/register')&&response.status()===200),
                      page.click('[type="submit"]')
                  ]) 
                  //assert
                  let userData=await response.json()
                  expect(response.ok).toBeTruthy()
                  expect(userData.email).toEqual(user.email)
                  expect(userData.password).toBe(user.password)
                 
        })
        test('login registration makes correct API calls', async()=>{
               //arrange   
               await page.goto(host)
               await page.click('text=Login')
               await page.waitForSelector('form')
               //act
               await page.locator('#email').fill(user.email)
               await page.locator('#password').fill(user.password)

               let [response]=await Promise.all([
                page.waitForResponse(response=>response.url().includes('/users/login')&&response.status()===200),
                page.click('[type="submit"]')
            ]) 
            
            let userData=await response.json()
            //assert
            expect(response.ok).toBeTruthy()
            expect(userData.email).toEqual(user.email)
            expect(userData.password).toBe(user.password)
        })
        test('logout returns correct API calls', async()=>{
             //arrange   
             await page.goto(host)
             await page.click('text=Login')
             await page.waitForSelector('form')
             //act
             await page.locator('#email').fill(user.email)
             await page.locator('#password').fill(user.password)
             await page.click('[type="submit"]')

             let [response]=await Promise.all([
              page.waitForResponse(response=>response.url().includes('/users/logout')&&response.status()===204),
              page.click('nav>>text=Logout')
                  ]) 
            
            
            expect(response.ok).toBeTruthy()
            await page.waitForSelector('nav>>text=Login')
            expect(page.url()).toBe(host + '/')
        })
    });

    describe("navbar", () => {
        test('navigation for loged-in users is correct', async()=>{
            //arrange& act  
            await page.goto(host)
            await page.click('text=Login')
            await page.waitForSelector('form')
            //act
            await page.locator('#email').fill(user.email)
            await page.locator('#password').fill(user.password)
            await page.click('[type="submit"]')
            //assert
            await expect(page.locator('nav>> text=Theater')).toBeVisible()
            await expect(page.locator('nav >> text=Create Event')).toBeVisible();
            await expect(page.locator('nav>> text=Profile')).toBeVisible()
            await expect(page.locator('nav>> text=Logout')).toBeVisible()

            await expect(page.locator('nav>> text=Register')).toBeHidden()
            await expect(page.locator('nav>> text=Login')).toBeHidden()

        })  
        test('guesr user navigation is correct', async()=>{
            //arrange
            await page.goto(host)
            //assert
            await expect(page.locator('nav>> text=Register')).toBeVisible()
            await expect(page.locator('nav>> text=Login')).toBeVisible()
            await expect(page.locator('nav>> text=Theater')).toBeVisible()

            await expect(page.locator('nav >> text=Create Event')).toBeHidden();
            await expect(page.locator('nav>> text=Profile')).toBeHidden()
            await expect(page.locator('nav>> text=Logout')).toBeHidden()
        }) 
        
    });

    describe("CRUD", () => { 
        beforeEach(async()=>{
            await page.goto(host)
            await page.click('text=Login')
            await page.waitForSelector('form')            
            await page.locator('#email').fill(user.email)
            await page.locator('#password').fill(user.password)
            await page.click('[type="submit"]')
            })
        test('create event returns correctAPI calls', async()=>{
            //arrange 
             await page.click('text=Create Event')
             await page.waitForSelector('form')
             //act
             await page.fill('[name="title"]', 'Random title')
             await page.fill('[name="date"]', 'Random date')
             await page.fill('[name="author"]', 'Random author')
             await page.fill('[name="description"]', 'Random description')
             await page.fill('[name="imageUrl"]', '/images/Pretty-Woman.jpg') 
            
             let [response]=await Promise.all([
                page.waitForResponse(response=>response.url().includes('/data/theaters')&&response.status()===200),
                page.click('[type="submit"]')
               ]) 

               let createdata=await response.json()

               expect(response.ok).toBeTruthy()
               expect(createdata.title).toEqual('Random title')
               expect(createdata.date).toEqual('Random date')
               expect(createdata.author).toEqual('Random author')
               expect(createdata.description).toEqual('Random description')
               expect(createdata.imageUrl).toEqual('/images/Pretty-Woman.jpg')
        })
        test('edited event returns correct API calls', async()=>{
                 //arrange     
                 await page.click('text=Profile')
                 await page.locator('text=Details').first().click()
                 await page.click('text=Edit')
                 await page.waitForSelector('form') 

                 //act
                 await page.locator('#title').fill("Edited random title")

                 let [response]=await Promise.all([
                    page.waitForResponse(response=>response.url().includes('/data/theaters')&&response.status()===200),
                    page.click('[type="submit"]')
                   ]) 

               //assert
               let createdata=await response.json()

               expect(response.ok).toBeTruthy()
               expect(createdata.title).toEqual('Edited random title')
               expect(createdata.date).toEqual('Random date')
               expect(createdata.author).toEqual('Random author')
               expect(createdata.description).toEqual('Random description')
               expect(createdata.imageUrl).toEqual('/images/Pretty-Woman.jpg')
        })
        test('delete event returns correct API calls', async()=>{
                 //arrange     
                 await page.click('text=Profile')
                 await page.locator('text=Details').first().click()
                 //act
                 let [response]=await Promise.all([
                    page.waitForResponse(response=>response.url().includes('/data/theaters')&&response.status()===200),
                    page.on('dialog', dialog=>dialog.accept()),
                    page.click('text=Delete')
                   ]) 
               expect(response.ok).toBeTruthy()
        })
        
    })
})