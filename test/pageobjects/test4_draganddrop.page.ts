class DragAndDropPage {
    get FrameWithDraggableElements() {
        return $('.demo-frame.lazyloaded')
    }
    get DraggableElement() {
        return $('//img[@alt="The peaks of High Tatras"]')
    }
    get PlaceToDrop() {
        return $('#trash')
    }
    get AllElements() {
        return $$('#gallery li')
    }
    async open() {
    await browser.url(`${browser.config.baseUrl}/demo-site/draganddrop/`)
}
}

export default new DragAndDropPage()
