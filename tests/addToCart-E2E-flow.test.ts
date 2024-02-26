import { test, expect } from '@playwright/test';
import * as data from "../test-data/search-product.json"
import { initializePages } from '../base/initializePages';


test.describe("Search for product, add to cart, remove from cart", async () => {

    test("Scenario_01", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);
        const { headerPage, searchResultPage, productDetailPage, cartPage } = initializePages(page);
        await page.goto(`${baseURL}`);
        await headerPage.searchForProduct(data.productName);
        const searchResults = await searchResultPage.searchResultsList.all();
        await Promise.all(searchResults.map(async (result) => {
        await expect(result).toContainText(data.productName);
        }));
        await searchResultPage.clickOnItem(data.productName);
        await productDetailPage.setProductQty(data.productQty);
        await productDetailPage.addToCart();
        const isConfirmationVisible = await productDetailPage.isMessageBannerVisible();
        await expect(isConfirmationVisible).toBeVisible();
        await productDetailPage.clickViewCart();
        expect(await page.title()).toBe(data.cartPageTitle);
        const productInCart = await cartPage.getProductFromCart();
        expect(productInCart).toBe(data.productName);
        await cartPage.setQuantityToNull();
        await cartPage.clickUpdateCart();
        await expect(await cartPage.isMessageBannerVisible()).toBeVisible();
        await expect(await cartPage.isEmptyCartInfoVisible()).toBeVisible();

        console.log('STATUS: ' + testInfo.status);
    })

    
    test("Scenario_02", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);
        const { headerPage, searchResultPage, productDetailPage, cartPage } = initializePages(page);
        await page.goto(`${baseURL}`);
    })    
})
