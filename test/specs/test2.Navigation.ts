import FramesnWindowsPage from '../pageobjects/test2.navigation.page'

describe('Navigate between windows', () => {
    after(async () => {
        await browser.deleteSession()
    }) 
    it('Between windows', async () => {
        
        await FramesnWindowsPage.open()
        await browser.maximizeWindow()
        const windowId = await browser.getWindowHandle()
        await FramesnWindowsPage.click()
        const windowIds = await browser.getWindowHandles()
        const newId = windowIds.filter(findelement => findelement !== windowId)
        await browser.switchToWindow(newId[0])
        await browser.switchToWindow(windowId)
        expect (await browser.getTitle()).toEqual ('Frames and Window Dummy Testing Site - GlobalSQA')
    })
})


// Tester's Hub -> Sample Page Test -> загрузить картинку, заполнить все поля, два чекбокса, кнопка, коммент, клик submit