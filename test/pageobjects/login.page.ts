import { ChainablePromiseElement } from 'webdriverio';

import Page from '../test2/My page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class StartPage {
    /**
     * define selectors using getter methods
     */
    get NavigationPage(): any {
        return $('#menu-item-2822');
    }

    get NavigationList(): any {
        return $('#menu-item-2823');
    }

    get ListFandW(): any {
        return $('#menu-item-2999');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username: string, password: string) {
        await this.NavigationPage().click();
        await this.NavigationList().click();
        await this.ListFandW().click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
}

export default new StartPage();
