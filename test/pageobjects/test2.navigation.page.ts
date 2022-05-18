

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FramesnWindowsPage {
    /**
     * define selectors using getter methods
     */
    get OpenAnotherTabButton() {
            return $('=Click Here')
    }
    async click() {
        await this.OpenAnotherTabButton.click()
    }
    async open() {
        await browser.url('https://www.globalsqa.com/demo-site/frames-and-windows/')
    }
}


export default new FramesnWindowsPage();
