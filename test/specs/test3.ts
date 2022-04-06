const filePath = "C:\\Users\\maksi\\Downloads\\story (1).gif"

describe('Search, Checkboxes and radiobutton', () => {
    it('Actions with elements', async () => {
        await browser.url('https://www.globalsqa.com/samplepagetest/')
        await browser.maximizeWindow()
        const remoteFilePath = await browser.uploadFile(filePath)
        await (await browser.$('#g2599-name')).setValue('Maxim')
        await (await browser.$('#g2599-email')).setValue('test@test.com')
        await (await browser.$('#g2599-website')).setValue('https://www.globalsqa.com/')
        await (await browser.$('#g2599-experienceinyears')).selectByAttribute('value', '3-5')
        await (await browser.$('[value="Functional Testing"]')).click()
        await (await browser.$('[value="Manual Testing"]')).click()
        await (await browser.$('[value="Post Graduate"]')).click()
        await (await browser.$('#contact-form-comment-g2599-comment')).setValue('Some comment')
        await (await browser.$('.first_bc')).scrollIntoView()
        await (await browser.$('[type = "file"]')).setValue(remoteFilePath)
        await (await browser.$('[type="submit"]')).click()
        await browser.pause(20000)
    })
})

/*
Testerhub -> Demo testing -> D&D. EXPECTED: Кол-во элементов соответсвует кол-ву перетащенных
Testerhub -> Demo testing -> DatePicker. Получить текущую дату, добавить к ней один год/день/месяц. Прокликать до этой даты в календаре. EXPECTED: константа календаря == полученной дате в инпуте:
1. JS
2. Moment.js
*/