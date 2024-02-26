import { Page } from "@playwright/test";

export default class SearchResultPage {

    constructor(public page: Page) {
    }

    searchResultsList = this.page.locator("a[rel='bookmark']");

    async clickOnItem(text: string) {
        await this.page.getByRole('link', { name: text }).click();
    }

    async verifyNothingMatched() { 
        return this.page.getByText('Sorry, but nothing matched');
    }

    async inputSearchValue(text: string) {
        const searchField = this.page.locator("input[placeholder='Search …']");
        await searchField.waitFor({state:"visible"});
        await searchField.fill(text);
        await searchField.press('Enter');
    }
}
