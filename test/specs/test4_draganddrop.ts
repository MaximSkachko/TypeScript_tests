import {expect} from 'chai'

describe('d&d', () => {
    it('how to use drag and drop', async () => {
        await browser.url('https://www.globalsqa.com/demo-site/draganddrop/')
        await browser.maximizeWindow()
        await browser.switchToFrame(await browser.$('.demo-frame.lazyloaded'))
        const dragElem = await browser.$('//img[@alt="The peaks of High Tatras"]')
        const placeToDrop = await browser.$('#trash')
        await dragElem.dragAndDrop(placeToDrop)
        await (await browser.$('#gallery li')).waitForDisplayed()
        //await browser.pause(2000) // Думал сделать await galleryId.waitForDisplayed - не работает. Видимо из-за $$
        const galleryId = await browser.$$('#gallery li')
        await browser.pause(2000)
        expect(galleryId.length).to.equal(3)
        // expect(galleryId).to.have.property({eq:4})
        //const placeToDragandDrop = await browser.$$('#trash')
        // await draganddrop.dragAndDrop(placeToDragandDrop)
        //await (await browser.$('.ui-widget-content ui-corner-tr ui-draggable ui-draggable-handle')).dragAndDrop()
    })
})
////ul[@id='gallery']/li[@class='ui-widget-content ui-corner-tr ui-draggable ui-draggable-handle']/h5[@class='ui-widget-header']//img[@alt="The peaks of High Tatras"]