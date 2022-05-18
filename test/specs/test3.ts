import SetTxTandUploadImagePage from '../pageobjects/test3.page'
const filePath = "C:\\Users\\maksi\\Downloads\\story (1).gif"

describe('Search, Checkboxes and radiobutton', () => {
    it('Actions with elements', async () => {
        await SetTxTandUploadImagePage.open()
        await browser.maximizeWindow()
        const remoteFilePath = await browser.uploadFile(filePath)
        await SetTxTandUploadImagePage.setName()
        await SetTxTandUploadImagePage.setEmail()
        await SetTxTandUploadImagePage.setWebSite()
        await SetTxTandUploadImagePage.selectExperience()
        await SetTxTandUploadImagePage.selectExpertise()
        await SetTxTandUploadImagePage.selectExpertise1()
        await SetTxTandUploadImagePage.selectEducation()
        await SetTxTandUploadImagePage.writeComment()
        await SetTxTandUploadImagePage.scrollUp()
        await SetTxTandUploadImagePage.ProfilePictureBtn.setValue(remoteFilePath)
        await SetTxTandUploadImagePage.submit()
    })
})

/*
Testerhub -> Demo testing -> D&D. EXPECTED: Кол-во элементов соответсвует кол-ву перетащенных
Testerhub -> Demo testing -> DatePicker. Получить текущую дату, добавить к ней один год/день/месяц. Прокликать до этой даты в календаре. EXPECTED: константа календаря == полученной дате в инпуте:
1. JS
2. Moment.js
*/