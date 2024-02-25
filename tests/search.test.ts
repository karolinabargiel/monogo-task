import { test, expect } from '@playwright/test';
import HomePage from '../pages/homepage';


const productName = "Little Black Top";

test.describe("Search for product, add to cart, remove from cart", async () => {

    test("Search test", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);
        const homePage = new HomePage(page);
        await page.goto(`${baseURL}`);
        await homePage.searchForProduct(productName);
        console.log('STATUS: ' + testInfo.status);
    })
})
