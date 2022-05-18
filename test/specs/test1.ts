import WelcomePage from '../pageobjects/test1.page'
import {expect} from 'chai'

describe('Navigate between tabs', () => {
    it('navigate', async () => {
        // await StartPage.open();
        // await StartPage.NavigationPage().click();
        // await StartPage.NavigationList().click();
        // await StartPage.ListFandW().click();
        await WelcomePage.open()
        await browser.maximizeWindow()
        await WelcomePage.TesterHub.moveTo()
        //await (await browser.$('#menu-item-2823')).waitForDisplayed({timeout: 1000})
        await WelcomePage.DemoTestingSite.click()
        expect (await browser.getTitle()).to.equal('Testing Demo Site | Practice Website For Automation - Global SQA')
    })
})
