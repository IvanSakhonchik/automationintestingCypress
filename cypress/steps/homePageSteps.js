import { homePage } from "../pages";

class HomePageSteps {
    fillSubmitForm(submitFormData) {
        homePage
            .fillName(submitFormData.name)
            .fillEmail(submitFormData.email)
            .fillPhone(submitFormData.phone)
            .fillSubject(submitFormData.subject)
            .fillDescription(submitFormData.description)
            .clickSubmit();
    }

    clickSubmit() {
        homePage.clickSubmit();
    }

    getCreatedRoom(roomType) {
        return homePage.getRoom(roomType);
    }

    assertValidFormMessage(submitFormData) {
        homePage.getThanksTitle().should('include', submitFormData.thanksTitle);
    }

    assertEmptyFormErrorAlertMessages(submitFormData) {
        const errorMessages = [
            submitFormData.errorNameAlertMessage,
            submitFormData.errorEmailAlertMessage,
            submitFormData.errorPhoneAlertMessage,
            submitFormData.errorSubjectAlertMessage,
            submitFormData.errorDescriptionAlertMessage,
            submitFormData.errorSubjectLengthMessage,
            submitFormData.errorPhoneLengthMessage,
            submitFormData.errorDescriptionLengthAlertMessage
        ];
        this.assertFormErrorAlertMessages(errorMessages);
    }

    assertInvalidFormErrorAlertMessages(submitFormData) {
        const errorMessages = [
            submitFormData.errorEmailDomainAlertMessage,
            submitFormData.errorSubjectLengthMessage,
            submitFormData.errorPhoneLengthMessage,
            submitFormData.errorDescriptionLengthAlertMessage
        ];
        this.assertFormErrorAlertMessages(errorMessages);
    }

    assertFormErrorAlertMessages(errorMessages) {
        errorMessages.forEach(errorMessage => {
            homePage.getErrorAlertMessage().should('include', errorMessage);
        });
    }
}

export default new HomePageSteps;