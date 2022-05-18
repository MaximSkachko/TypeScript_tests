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
    await browser.url('https://www.globalsqa.com/demo-site/draganddrop/')
}
}

export default new DragAndDropPage()
