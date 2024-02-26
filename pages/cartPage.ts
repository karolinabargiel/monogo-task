import { Page } from "@playwright/test";

export default class CartPage {

    constructor(public page: Page) {
    }

    async getProductFromCart() { 
        const productName = this.page.locator("td[class='product-name'] a");
        return productName.textContent();
    }

    async setQuantityToNull() {
        await this.page.getByLabel('Quantity').click();
        await this.page.getByLabel('Quantity').fill("0");
    }

    async clickUpdateCart() {
        await this.page.locator("input[value='Update cart']").click();
    }

    async isMessageBannerVisible() { 
        const banner = this.page.locator(".woocommerce-message");
        await banner.waitFor({state:"visible"})
        return banner;
    }

    async isEmptyCartInfoVisible() { 
        const infoText = this.page.locator(".cart-empty");
        return infoText;
    }

    async getProductQty() {
        const quantity = this.page.getByLabel('Quantity').getAttribute('value');
        return quantity;
    }

    async clickRemoveItemFromCart() {
        await this.page.locator("a[aria-label='Remove this item']").click();
    }
}