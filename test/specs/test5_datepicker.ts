// function getDatePlusYear() {
//    const currentDate = new Date()
//     currentDate.setFullYear(currentDate.getFullYear() + 1)
//     return currentDate
// }
//     getDatePlusYear()
//import * as moment from 'moment'

// const today = new Date()
// const addMonth = new Date(today.setMonth(today.getMonth()+1))
import {expect} from 'chai'



const day = new Date()
const month = day.getMonth()
const year = day.getFullYear()
const daysInMonth = new Date(year, month, 30).getDate(); // Не совсем понятно как это работает
const addDays = new Date().getDate() + 3
let newMonth = new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleString('en', { month: 'long' })

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
            newMonth = new Date(new Date().setMonth(new Date().getMonth() + 2)).toLocaleString('en', { month: 'long' })
            //await browser.pause(1000)
        }
        expect(await (await browser.$('.ui-datepicker-month')).getText()).to.equal(newMonth)
        await (await browser.$(`//a[@class="ui-state-default" and .='${addDays}']`)).click()
        //await browser.pause(1000)
        expect(await (await browser.$('.hasDatepicker')).getValue()).to.equal(`05/${addDays}/${year}`)
    })
})
// Получить все li (https://www.globalsqa.com/demo-site/auto-complete/#Categories). Написать цикл по массиву. Если текст равен 'annk K12', то кликнуть по нему и выйти из цикла (return/досрочно выйти из цикла если сработал if)
// https://www.globalsqa.com/demo-site/auto-complete/#ComboBox клинуть кнопку. Пролистать до последнего элемента и выбрать его. Во втором начать вводить javas, Выбрать JS