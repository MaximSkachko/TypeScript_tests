import ComboboxPage from '../pageobjects/test6_selecting_part2.page'
import {expect} from 'chai'

describe ('Selection', () => {
    it ('Scroll and selection', async () => {
        await ComboboxPage.open()
        await browser.maximizeWindow()
        await browser.switchToFrame(await ComboboxPage.Frame)
        await ComboboxPage.wait()
        await ComboboxPage.clickBtn()
        await ComboboxPage.expandDropDown()
        await ComboboxPage.scrollDown()
        await ComboboxPage.clickOnScheme()
        expect (await ComboboxPage.DropDownSelectOne.getValue()).to.equal('Scheme')
        await ComboboxPage.setValue()
        await ComboboxPage.clickOnItem()
        expect (await ComboboxPage.ComoboboxField.getValue()).to.equal('JavaScript')
        expect (await ComboboxPage.DropDownSelectOne.getValue()).to.equal('JavaScript')
    })
})   
  
// https://www.globalsqa.com/demo-site/auto-complete/#ComboBox клинуть кнопку. Пролистать до последнего элемента и выбрать его. Во втором начать вводить javas, Выбрать JS

// let sum = 0
// for (let i = 1; i <= 100; i++)  {
//     sum += i
// }
// alert(sum)