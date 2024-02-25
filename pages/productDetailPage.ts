import { Page } from "@playwright/test";

export default class ProductDetailPage {

    constructor(public page: Page) {
    }

    async setProductQty(qty: string) {
        await this.page.getByLabel('Quantity').click();
        await this.page.getByLabel('Quantity').fill(qty);
    }

    async clickAddToCart() {
        await this.page.getByRole('button', { name: ' Add to cart' }).click();
    }
}