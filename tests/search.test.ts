import { test, expect } from '@playwright/test';
import HomePage from '../pages/homepage';
import SearchResultPage from '../pages/searchResultPage';
import * as data from "../test-data/search-product.json"
import ProductDetailPage from '../pages/productDetailPage';
import CartPage from '../pages/cartPage';


test.describe("Search for product, add to cart, remove from cart", async () => {

    test("Scenario_01", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE: ' + testInfo.title);

        const homePage = new HomePage(page);
        const searchResultPage = new SearchResultPage(page);
        const productDetailPage = new ProductDetailPage(page);
        const cartPage = new CartPage(page);
        await page.goto(`${baseURL}`);
        await homePage.searchForProduct(data.productName);
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
})
