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
        await browser.url(`${browser.config.baseUrl}/demo-site/frames-and-windows/`)
    }
}

export default new FramesnWindowsPage()
