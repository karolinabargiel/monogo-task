import { Page } from "@playwright/test";

export default class HeaderPage {

    constructor(public page: Page) {
    }

    async searchForProduct(text: string) {
        await this.page.click("#search-field-top-bar");
        await this.page.locator("#search-field-top-bar").fill(text);
        await this.page.click("#search-top-bar-submit");
    }

}