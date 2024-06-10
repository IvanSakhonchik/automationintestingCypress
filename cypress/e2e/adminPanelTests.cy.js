import { adminPageSteps, homePageSteps } from "../steps";
import BrowserSteps from "../framework/browser/BrowserSteps"
import Url from "../constans/url";

describe('template spec', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', () => {
            return false;
        });
        BrowserSteps.navigateTo(Url.adminUrl);
        adminPageSteps.login();
    });

    it('Positive: Create room with valid data', () => {
        cy.fixture('validRoomData.json').then((roomData) => {
            adminPageSteps.createRoom(roomData);
            adminPageSteps.getCreatedRoomNumber(roomData.number).should('be.visible');
            BrowserSteps.navigateTo(Url.baseUrl);
            homePageSteps.getCreatedRoom(roomData.type).should('be.visible');
        });
    });

    it('Negative: Create room with blank data', () => {
        cy.fixture('errorMesagesForRoomData.json').then((errorMessages) => {
            adminPageSteps.clickCreateRoom();
            adminPageSteps.assertRoomErrorAlertMessages(errorMessages);
        });
    });
});
