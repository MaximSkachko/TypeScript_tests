import {expect} from 'chai'

describe ('Selection', () => {
    it ('Scroll and selection', async () => {
        await browser.url('https://www.globalsqa.com/demo-site/auto-complete/#ComboBox')
        await browser.maximizeWindow()
        await browser.switchToFrame(await browser.$('.demo-frame.lazyloaded'))
        await (await browser.$('#toggle')).waitForDisplayed()
        await (await browser.$('#toggle')).click()
        await (await browser.$('#combobox')).click()
        await (await browser.$('option*=Scheme')).scrollIntoView()
        await (await browser.$('option*=Scheme')).click()
        expect(await (await browser.$('#combobox')).getValue()).to.equal('Scheme')
        await (await browser.$('.custom-combobox-input.ui-widget.ui-widget-content.ui-state-default.ui-corner-left.ui-autocomplete-input')).setValue('javas')
        await (await browser.$('#ui-id-1')).click()
        expect(await (await browser.$('.custom-combobox-input.ui-widget.ui-widget-content.ui-state-default.ui-corner-left.ui-autocomplete-input')).getValue()).to.equal('JavaScript')
        expect(await (await browser.$('#combobox')).getValue()).to.equal('JavaScript')
    })
})     
// Получить все li (https://www.globalsqa.com/demo-site/auto-complete/#Categories). Написать цикл по массиву. Если текст равен 'annk K12', то кликнуть по нему и выйти из цикла (return/досрочно выйти из цикла если сработал if)
// https://www.globalsqa.com/demo-site/auto-complete/#ComboBox клинуть кнопку. Пролистать до последнего элемента и выбрать его. Во втором начать вводить javas, Выбрать JS