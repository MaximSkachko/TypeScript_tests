import SearchPage from '../pageobjects/test6_selecting_part1.page'
import {expect} from 'chai'


describe ('Selecting and cycle', () => {
    it ('learning to write cycle', async () => {
        await SearchPage.open()
        await browser.maximizeWindow()
        await browser.switchToFrame(await SearchPage.FrameWithSearchField)
        await SearchPage.waitDisplaying()
        await SearchPage.setValue()
        await SearchPage.cycleFunction()
        expect(await SearchPage.SearchField.getValue()).to.equal('annk K12') 
    })
})