import { Page } from "@playwright/test";

export default class ProductDetailPage {

    constructor(public page: Page) {
    }

    async setProductQty(qty: string) {
        await this.page.getByLabel('Quantity').click();
        await this.page.getByLabel('Quantity').fill(qty);
    }

    async addToCart() {
        this.page.locator("//button[normalize-space()='Add to cart']").click();
    }

    async isMessageBannerVisible() { 
        const banner = this.page.locator(".woocommerce-message");
        await banner.waitFor({state:"visible"})
        return banner;
    }

    async clickViewCart() {
        await this.page.locator("//a[normalize-space()='View cart']").click();
    }
}