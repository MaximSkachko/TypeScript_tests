

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WelcomePage {
    /**
     * define selectors using getter methods
     */
    get TesterHub() {
        return $('#menu-item-2822')
    }

    get DemoTestingSite() {
        return $('#menu-item-2823')
    }
    
    async open() {
        await browser.url('https://www.globalsqa.com/')
    }
}

export default new WelcomePage();
