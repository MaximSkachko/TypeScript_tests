import DragAndDropPage from '../pageobjects/test4_draganddrop.page'
import {expect} from 'chai'

describe('d&d', () => {
    it('how to use drag and drop', async () => {
        await DragAndDropPage.open()
        await browser.maximizeWindow()
        await browser.switchToFrame(await DragAndDropPage.FrameWithDraggableElements)
        const dragElem = await DragAndDropPage.DraggableElement
        const placeToDrop = await DragAndDropPage.PlaceToDrop
        await dragElem.dragAndDrop(placeToDrop)
        await browser.pause(2000)
        const galleryId = await DragAndDropPage.AllElements
        expect(galleryId.length).to.equal(3)
    })
})