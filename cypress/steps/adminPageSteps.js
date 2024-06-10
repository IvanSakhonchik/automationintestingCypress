import { adminPassword, adminUsername } from "../constans/config";
import { adminPage } from "../pages";

class AdminPageSteps {
    login() {
        adminPage.fillUsername(adminUsername)
                 .fillPassword(adminPassword)
                 .clickLogin();
    }

    createRoom(roomData) {
        adminPage.fillRoomNumber(roomData.number)
                 .selectRoomType(roomData.type)
                 .selectAccessibleType(roomData.accessible)
                 .fillRoomPrice(roomData.price)
                 .selectWifi()
                 .clickCreateRoom();
    }

    clickCreateRoom() {
        adminPage.clickCreateRoom();
    }

    getCreatedRoomNumber(roomNumber){
        return adminPage.getCreatedRoom(roomNumber);
    }

    assertRoomErrorAlertMessages(errorMessages) {
        adminPage.getErrorAlertMessage().should('include', errorMessages.roomName);
        adminPage.getErrorAlertMessage().should('include', errorMessages.price);
    }
}

export default new AdminPageSteps;