import {expect} from 'chai'


describe ('Selecting and cycle', () => {
    it ('learning to write cycle', async () => {
        await browser.url('https://www.globalsqa.com/demo-site/auto-complete/#Categories')
        await browser.maximizeWindow()
        await browser.switchToFrame(await browser.$('.demo-frame.lazyloaded'))
        await (await browser.$('#search')).waitForDisplayed()
        await (await browser.$('#search')).setValue('a')
        let elements = await browser.$$('.ui-menu.ui-widget .ui-menu-item')
        for (let i = 0; i < elements.length; i++)
        {
          if  (await elements[i].getText() === 'annk K12')
          {
              await elements[i].click()
          }
        }
        expect(await (await browser.$('#search')).getValue()).to.equal('annk K12')
    })
})  
        

// Написать 'a'. Получить все li (https://www.globalsqa.com/demo-site/auto-complete/#Categories). Написать цикл по массиву. Если текст равен 'annk K12', то кликнуть по нему и выйти из цикла (return/досрочно выйти из цикла если сработал if)