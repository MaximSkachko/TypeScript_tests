// function getDatePlusYear() {
//    const currentDate = new Date()
//     currentDate.setFullYear(currentDate.getFullYear() + 1)
//     return currentDate
// }
//     getDatePlusYear()

// const today = new Date()
// const addMonth = new Date(today.setMonth(today.getMonth()+1))

import PageWithDatepicker from '../pageobjects/test5_datepicker.page'
import {expect} from 'chai'



const day = new Date()
const month = day.getMonth()
const year = day.getFullYear()
const daysInMonth = new Date(year, month, 30).getDate(); // Не совсем понятно как это работает
const addDays = new Date().getDate() + 3
let newMonth = new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleString('en', { month: 'long' })

describe ('datepicker', () => {
    it ('how to use datepicker', async () => {
        await PageWithDatepicker.open()
        await browser.maximizeWindow()
        await PageWithDatepicker.waitForExist()
        await browser.switchToFrame(await PageWithDatepicker.FrameWithDatePicker)
        await PageWithDatepicker.waitForDP()
        await PageWithDatepicker.clickOnDate()
        //await browser.pause(1000)
        await PageWithDatepicker.clickOnArrow()
        if (daysInMonth <= addDays) {
            await PageWithDatepicker.clickOnArrow()
            newMonth = new Date(new Date().setMonth(new Date().getMonth() + 2)).toLocaleString('en', { month: 'long' })
            //await browser.pause(1000)
        }
        expect (await PageWithDatepicker.SelectedMonth.getText()).to.equal(newMonth)
        await (await browser.$(`//a[@class="ui-state-default" and .='${addDays}']`)).click()
        //await browser.pause(1000)
        expect(await PageWithDatepicker.DateField.getValue()).to.equal(`06/${addDays}/${year}`)
    })
})