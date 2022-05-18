class SearchPage {
    get FrameWithSearchField() {
        return $('.demo-frame.lazyloaded')
    }
    get SearchField() {
        return $('#search')
    }
    async open() {
        await browser.url('https://www.globalsqa.com/demo-site/auto-complete/#Categories')
    }
    async waitDisplaying() {
        await this.SearchField.waitForDisplayed()
    }  
    async setValue() {
        await this.SearchField.setValue('a')
    }
}
export default new SearchPage()