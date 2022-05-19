
class PageWithDatepicker {
    get FrameWithDatePicker() {
        return $('.demo-frame.lazyloaded')
    }
    async waitForExist() {
        await this.FrameWithDatePicker.waitForExist()
    }
    get DatePicker() {
        return $('#datepicker')
    }
    get DatePickerArrow () {
        return $('.ui-datepicker-next.ui-corner-all')
    }
    get SelectedMonth() {
        return $('.ui-datepicker-month')
    }
    get DateField() {
        return $('.hasDatepicker')
    }
    async CellInDatePicker(addDays) {
        return $(`//a[@class="ui-state-default" and .='${addDays}']`)
    }
    async open() {
        await browser.url(`${browser.config.baseUrl}/demo-site/datepicker/`)
    }
    async waitForDP() {
        await this.DatePicker.waitForDisplayed()
    }
    async clickOnDate() {
        await this.DatePicker.click()
    }
    async clickOnArrow() {
        await this.DatePickerArrow.click()
    }
}
export default new PageWithDatepicker()