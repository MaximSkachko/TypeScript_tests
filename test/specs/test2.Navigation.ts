describe('Navigate between windows', () => {
    after(async () => {
        await browser.deleteSession()
    }) 
    it('Between windows', async () => {
        await browser.url('https://www.globalsqa.com/demo-site/frames-and-windows/')
        await browser.maximizeWindow()
        const windowId = await browser.getWindowHandle()
        console.log(windowId)
        await (await browser.$('=Click Here')).click()
        const windowIds = await browser.getWindowHandles()
        const newId = windowIds.filter(findelement => findelement !== windowId)
        console.log(newId)
        await browser.switchToWindow(newId[0])
        await browser.switchToWindow(windowId)
        expect (await browser.getTitle()).toEqual ('Frames and Window Dummy Testing Site - GlobalSQA')
        await browser.pause(20000)
    })
})


// Tester's Hub -> Sample Page Test -> загрузить картинку, заполнить все поля, два чекбокса, кнопка, коммент, клик submit