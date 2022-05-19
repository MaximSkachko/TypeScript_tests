class SearchPage {
    get FrameWithSearchField() {
        return $('.demo-frame.lazyloaded')
    }
    get SearchField() {
        return $('#search')
    }
    async open() {
        await browser.url(`${browser.config.baseUrl}/demo-site/auto-complete/#Categories`)
    }
    async waitDisplaying() {
        await this.SearchField.waitForDisplayed()
    }  
    async setValue() {
        await this.SearchField.setValue('a')
    }
    async cycleFunction() {
        let elements = await browser.$$('.ui-menu.ui-widget .ui-menu-item') // как для такого написать page object
        for (let i = 0; i < elements.length; i++)
        {
          if  (await elements[i].getText() === 'annk K12')
          {
              await elements[i].click()
          }
        }
    }
}
export default new SearchPage()