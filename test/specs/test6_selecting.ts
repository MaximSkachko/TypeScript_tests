import {expect} from 'chai'




describe ('Selecting and cycle', () => {
    it ('learning to write cycle', async () => {
        await browser.url('https://www.globalsqa.com/demo-site/datepicker/')
        await browser.maximizeWindow()
// Получить все li (https://www.globalsqa.com/demo-site/auto-complete/#Categories). Написать цикл по массиву. Если текст равен 'annk K12', то кликнуть по нему и выйти из цикла (return/досрочно выйти из цикла если сработал if)
// https://www.globalsqa.com/demo-site/auto-complete/#ComboBox клинуть кнопку. Пролистать до последнего элемента и выбрать его. Во втором начать вводить javas, Выбрать JS