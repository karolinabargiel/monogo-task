import { test, expect } from '@playwright/test';
import HomePage from '../pages/homepage';
import SearchResultPage from '../pages/searchResultPage';
import * as data from "../test-data/search-product.json"
import ProductDetailPage from '../pages/productDetailPage';


test.describe("Search for product, add to cart, remove from cart", async () => {

    test("Search test", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);
        const homePage = new HomePage(page);
        const searchResultPage = new SearchResultPage(page);
        const productDetailPage = new ProductDetailPage(page);
        await page.goto(`${baseURL}`);
        await homePage.searchForProduct(data.productName);
        const searchResults = await searchResultPage.searchResultsList.all();
        await Promise.all(searchResults.map(async (result) => {
        await expect(result).toContainText(data.productName);
        }));
        searchResultPage.clickOnItem(data.productName);
        productDetailPage.setProductQty(data.productQty);
        productDetailPage.clickAddToCart;
        await expect(page.locator(".woocommerce-message")).toBeVisible();
        await page.waitForTimeout(5000);
        console.log(await page.title());
        console.log('STATUS: ' + testInfo.status);
    })
})
