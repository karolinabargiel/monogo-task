import { Page } from "@playwright/test";

export default class SearchResultPage {

    constructor(public page: Page) {
    }

    searchResultsList = this.page.locator("a[rel='bookmark']");

    async clickOnItem(text: string) {
        await this.page.getByRole('link', { name: text }).click();
    }
}
