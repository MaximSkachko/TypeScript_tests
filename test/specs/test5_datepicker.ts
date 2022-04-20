// function getDatePlusYear() {
//    const currentDate = new Date()
//     currentDate.setFullYear(currentDate.getFullYear() + 1)
//     return currentDate
// }
//     getDatePlusYear()

// const today = new Date()
// const addMonth = new Date(today.setMonth(today.getMonth()+1))
import {expect} from 'chai'



const day = new Date()
const month = day.getMonth()
const year = day.getFullYear()
const daysInMonth = new Date(year, month, 30).getDate(); // Не совсем понятно как это работает
const addDays = new Date().getDate() + 3
let newMonth = new Date(new Date().setMonth(new Date().getMonth() + 2)).getMonth()
let newMonth1 = new Date(new Date().setMonth(new Date().getMonth() + 1))

describe ('datepicker', () => {
    it ('how to use datepicker', async () => {
        await browser.url('https://www.globalsqa.com/demo-site/datepicker/')
        await browser.maximizeWindow()
        await (await browser.$('.demo-frame.lazyloaded')).waitForExist()
        await browser.switchToFrame(await browser.$('.demo-frame.lazyloaded'))
        await (await browser.$('#datepicker')).waitForDisplayed()
        await (await browser.$('#datepicker')).click()
        //await browser.pause(1000)
        await (await browser.$('.ui-datepicker-next.ui-corner-all')).click()
        if (daysInMonth <= addDays) {
            await (await browser.$('.ui-datepicker-next.ui-corner-all')).click()
            newMonth1 = new Date(new Date().setMonth(new Date().getMonth() + 2))
            //await browser.pause(1000)
        }
        expect(await (await browser.$('.ui-datepicker-month')).getText()).to.equal(newMonth1.toLocaleString('en', {month: 'long'}))
        await (await browser.$(`//a[@class="ui-state-default" and .='${addDays}']`)).click()
        //await browser.pause(1000)
        expect(await (await browser.$('.hasDatepicker')).getValue()).to.equal(`${(newMonth < 10) ? '0' + newMonth : newMonth}/${addDays}/${year}`)
    })
})