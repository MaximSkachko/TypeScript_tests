class ComboboxPage {
    get Frame() {
        return $('.demo-frame.lazyloaded')
    }
    get ShowUnderlyingBtn() {
        return $('#toggle')
    }
    get DropDownSelectOne() {
        return $('#combobox')
    }
    get optionScheme() {
        return $('option*=Scheme')
    }
    get secondDropdown() {
        return $('.custom-combobox-input.ui-widget.ui-widget-content')
    }
    get SelectedItem() {
        return $('#ui-id-1')
    }
    get ComoboboxField() {
        return $('.custom-combobox-input.ui-widget.ui-widget-content')
    }
    async open() {
        await browser.url(`${browser.config.baseUrl}/demo-site/auto-complete/#ComboBox`)
    }
    async wait() {
        await this.ShowUnderlyingBtn.waitForDisplayed()
    }
    async clickBtn() {
        await this.ShowUnderlyingBtn.click()
    }
    async expandDropDown() {
        await this.DropDownSelectOne.click()
    }
    async scrollDown() {
        await this.optionScheme.scrollIntoView()
    }
    async clickOnScheme() {
        await this.optionScheme.click()
    }
    async setValue() {
        await this.secondDropdown.setValue('javas')
    }
    async clickOnItem() {
        await this.SelectedItem.click()
    }
}
export default new ComboboxPage()