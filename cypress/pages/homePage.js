import ElementFactory from "../framework/elementFactory/elementFactory"

class HomePage {
    constructor() {
        this.nameInputField = ElementFactory.getInputField('#name', 'Name Input Field')
        this.emailInputField = ElementFactory.getInputField('#email', 'Email Input Field')
        this.phoneInputField = ElementFactory.getInputField('#phone', 'Phone Input Field')
        this.subjectInputField = ElementFactory.getInputField('#subject', 'Subject Input Field')
        this.descriptionInputField = ElementFactory.getInputField('#description', 'Description Input Field')
        this.submitButton = ElementFactory.getInputField('#submitContact', 'Submit Button')
        this.errorAlertLabel = ElementFactory.getLabel('xpath://div[contains(@class,"alert alert-danger")]', "Error alert Label")
        this.thankTitleLabel = ElementFactory.getLabel('xpath://div[@class="row contact"]//h2', "Thanks title Label")
      }

    fillName(name) {
        this.nameInputField.fill(name);
        return this;
    }

    fillEmail(email) {
        this.emailInputField.fill(email);
        return this;
    }

    fillPhone(phone) {
        this.phoneInputField.fill(phone);
        return this;
    }

    fillSubject(subject) {
        this.subjectInputField.fill(subject);
        return this;
    }

    fillDescription(description) {
        this.descriptionInputField.fill(description);
        return this;
    }

    clickSubmit(){
        this.submitButton.click();
        return this;
    }

    getErrorAlertMessage(){
        return this.errorAlertLabel.getText();
    }

    getThanksTitle(){
        return this.thankTitleLabel.getText();
    }

    getRoom(roomType){
        return ElementFactory.getLabel(`xpath://h3[text()="${roomType}"]`, `${roomType} Label`).get();

    }
}

export default new HomePage;