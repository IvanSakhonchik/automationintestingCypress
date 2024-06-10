import { homePageSteps } from "../steps";
import BrowserSteps from "../framework/browser/BrowserSteps"
import Url from "../constans/url";

describe('template spec', () => {
  beforeEach(() => {
    BrowserSteps.navigateTo(Url.baseUrl);
  });

  it('Positive: Submitting the form with valid data', () => {
    cy.fixture('validSubmitFormData.json').then((submitFormData) => {
      homePageSteps.fillSubmitForm(submitFormData);
      homePageSteps.assertValidFormMessage(submitFormData);
    });
  });

  it('Negative: Submitting the form with blank fields', () => {
    homePageSteps.clickSubmit();
    cy.fixture('invalidSubmitFormData.json').then((submitFormData) => {
      homePageSteps.assertEmptyFormErrorAlertMessages(submitFormData);
    });
  });

  it('Negative: Submitting the form with invalid fields', () => {
    cy.fixture('invalidSubmitFormData.json').then((submitFormData) => {
      homePageSteps.fillSubmitForm(submitFormData);
      homePageSteps.assertInvalidFormErrorAlertMessages(submitFormData);
    });
  });
});
