import { test, expect, Page } from '@playwright/test';
import * as data1 from "../test-data/data-scenario-01.json";
import * as data2 from "../test-data/data-scenario-02.json";
import { initializePages } from '../base/initializePages';


test.describe("Search for product, add to cart, remove from cart", async () => {

    test("Scenario_01", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);
        const { headerPage, searchResultPage, productDetailPage, cartPage } = initializePages(page);
        await page.goto(`${baseURL}`);
        await headerPage.searchForProduct(data1.productName);
        const searchResults = await searchResultPage.searchResultsList.all();
        await Promise.all(searchResults.map(async (result) => {
        await expect(result).toContainText(data1.productName);
        }));
        await searchResultPage.clickOnItem(data1.productName);
        await productDetailPage.setProductQty(data1.productQty);
        await productDetailPage.addToCart();
        await expect(await productDetailPage.isMessageBannerVisible()).toBeVisible();
        await productDetailPage.clickViewCart();
        expect(await page.title()).toBe(data1.cartPageTitle);
        expect(await cartPage.getProductFromCart()).toBe(data1.productName);
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
        await headerPage.searchForProduct(data2.dummyValue);
        await expect(await searchResultPage.verifyNothingMatched()).toBeVisible();
        await searchResultPage.inputSearchValue(data2.searchProduct);
        await searchResultPage.clickOnItem(data2.productName);
        await productDetailPage.setProductQty(data2.productQty);
        await productDetailPage.addToCart();
        await expect(await productDetailPage.isMessageBannerVisible()).toBeVisible();
        await headerPage.clickMyCartBtn();
        await cartPage.getProductQty();
        expect(await cartPage.getProductFromCart()).toBe(data2.productName);
        expect(await cartPage.getProductQty()).toBe(data2.productQty);
        await cartPage.clickRemoveItemFromCart();
        await expect(await cartPage.isEmptyCartInfoVisible()).toBeVisible();
        console.log('STATUS: ' + testInfo.status);
    })    
})
