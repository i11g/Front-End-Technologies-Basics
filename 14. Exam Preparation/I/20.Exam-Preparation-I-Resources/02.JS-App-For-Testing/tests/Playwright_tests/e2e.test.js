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
                await page.goto(host)
                await page.click('text=Login')

                await  page.locator('#email').click(user.email)
                await page.locator('#password').click(user.password)
                await page.click('[type="submit"]')

                await  expect(page.locator('#All Memes')).toBeVisible();
                await expect(page.locator('#Create Meme')).toBeVisible();
                await expect(page.locator('#My profile')).toBeVisible();
                await expect(page.locator('#Logout')).toBeVisible()
                await expect(page.locator('#Login')).toBeHidden();
                await expect(page.locator('#Register')).toBeHidden()
        })
        test ('guests users should see correct navigatio', async()=>{
             await page.goto(host) 

             await expect(page.locator('nav>>text-Login')).toBeHidden()
             await expect(page.locator('nav>>text-Register')).toBeVisible()
             await expect(page.locator('nav>>text-All memes')).toBeHidden()
             await expect(page.locator('nav>>text-Create games')).toBeHidden()
             await expect(page.locator('nav>>text-Logout')).toBeHidden()
             await expect(page.locator('nav>>text-My Profile')).toBeHidden() 
        })        
    })
    describe('testing CRUD functionallity', async()=>{ 
        beforeEach(async()=> {
            await page.goto(host)
            await page.click('text=Login')
            await page.waitForSelector('form')
            await page.locator('#email').fill(user.email)
            await page.locator('#password').fill(user.password)
            await page.click('[type="submit]')
        })
        test('create meme return correct API calls', async()=>{
              await page.locator('#Create Meme').click()
              await page.waitForSelector('form')

              await page.fill('[name="title"], Random title')
              await page.fill('[name="description"], Random description')
              await page.fill('[name=i"mageUrl"], https://jpeg.org/images/jpeg-home.jpg ') 

              let [response] = await Promise.all([
                  page.waitForResponse(response=>response.url().includes('/data/memes') && response.status()===200),
                  page.click('[type="submit"')
              ]) 

              expect(response.ok).toBeTruthy() 

              let memeData=await response.json();
              expect(memeData.title).toEqual('Random title')
              expect(memeData.description).toEqual('Random description')
              expect(memeData.imageUrl).toEqual('https://jpeg.org/images/jpeg-home.jpg')
        })
        test('details shows edit and delete buttons for an owner', async()=>{
             await page.click('text=My Profile')

             await page.locator('#Details').first().click() 

             await page.locator('#Edit').toBeVisible()
             await page.locator('text=Delete').toBeVisible()
        })

        test('edit meme returns correct API calls', async()=>{ 

            await page.click('text=My Profile')
            await page.locator('text=Details').first().click() 

            await page.click('text=Edit')
            await page.waitForSelector('form')

            await page.locator('#title').fill('Random title changed') 
            
            let [response] = await Promise.all([
               page.waitForResponse(response=>response.url().includes('/data/memes')&&response.status()===200),
                          
               page.click('[type="submit"]')

            ]) 

            expect(response.ok).toBeTruthy() 

            let editMeme=await response.json();
            await (editMeme.title).toEqual('Random title changed')
            await (editMeme.rescription).toEdual('Random description')
            await (editmeme.imageUrl).toEdual("https://jpeg.org/images/jpeg-home.jpg")

               

        })
        test('delete meme returns correct API calls', async ()=>{
                 
            await page.click('text=My Profile')

            await page.locator('#Details').firct().click()
            await page.waitForSelector('form') 

            let [response]=await Promise.all([
              page.waitForResponse(response=>response.url().includes('/data/memes')&& response.status()===200),
              page.click('text=Delete')
            ])
            
            espect(response.ok).toBeTruthy()
         })
    })
    
})

