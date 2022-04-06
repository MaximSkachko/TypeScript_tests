describe('Navigate between tabs', () => {
    it('navigate', async () => {
        // await StartPage.open();
        // await StartPage.NavigationPage().click();
        // await StartPage.NavigationList().click();
        // await StartPage.ListFandW().click();
        await browser.url(`https://www.globalsqa.com/`)
        await browser.maximizeWindow()
        await (await browser.$('#menu-item-2822')).moveTo()
        //await (await browser.$('#menu-item-2823')).waitForDisplayed({timeout: 1000})
        await (await browser.$('#menu-item-2823')).click()
        expect (await browser.getTitle()).toEqual ('Frames and Window Dummy Testing Site - GlobalSQA')
    })
})
