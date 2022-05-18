import SearchPage from '../pageobjects/test6_selecting_part1.page'
import {expect} from 'chai'


describe ('Selecting and cycle', () => {
    it ('learning to write cycle', async () => {
        await SearchPage.open()
        await browser.maximizeWindow()
        await browser.switchToFrame(await SearchPage.FrameWithSearchField)
        await SearchPage.waitDisplaying()
        await SearchPage.setValue()
        let elements = await browser.$$('.ui-menu.ui-widget .ui-menu-item') // как для такого написать page object
        for (let i = 0; i < elements.length; i++)
        {
          if  (await elements[i].getText() === 'annk K12')
          {
              await elements[i].click()
          }
        }
        expect(await SearchPage.SearchField.getValue()).to.equal('annk K12') 
    })
})