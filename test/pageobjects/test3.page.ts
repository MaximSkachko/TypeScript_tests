class SetTxTandUploadImagePage {
    get NameInputField() {
        return $('#g2599-name');
    }

    get EmailInput() {
        return $('#g2599-email')
    }

    get WebSiteInput() {
        return $('#g2599-website')
    }

    get ExperienceDropDown() {
        return $('#g2599-experienceinyears')
    }

    get ExpertiseCheckBox() {
        return $('[value="Functional Testing"]')
    }

    get ExpertiseCheckBox1() {
        return $('[value="Manual Testing"]')
    }

    get EducationRadioButton() {
        return $('[value="Post Graduate"]')
    }

    get CommentField() {
        return $('#contact-form-comment-g2599-comment')
    }

    get breadCrumbsHome() {
        return $('.first_bc')
    }

    get ProfilePictureBtn() {
        return $('[type = "file"]')
    }

    get SubmitBtn() {
        return $('[type="submit"]')
    }
    async setName() {
        await this.NameInputField.setValue('Maxim')
    }

    async setEmail() {
        await this.EmailInput.setValue('test@test.com')
    }

    async selectExperience() {
        await this.ExperienceDropDown.selectByAttribute('value', '3-5')
    }

    async setWebSite() {
        await this.WebSiteInput.setValue('https://www.globalsqa.com/')
    }

    async selectExpertise() {
        await this.ExpertiseCheckBox.click()
    }

    async selectExpertise1() {
        await this.ExpertiseCheckBox1.click()
    }

    async selectEducation() {
        await this.EducationRadioButton.click()
    }

    async writeComment() {
        await this.CommentField.setValue('Some comment')
    }

    async scrollUp() {
        await this.breadCrumbsHome.scrollIntoView()
    }

    async submit() {
        await this.SubmitBtn.click()
    }
    
    async open() {
        await browser.url('https://www.globalsqa.com/samplepagetest/')
    }
}

export default new SetTxTandUploadImagePage();
