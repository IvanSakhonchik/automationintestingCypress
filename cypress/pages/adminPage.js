import ElementFactory from "../framework/elementFactory/elementFactory"

class AdminPage {
    constructor() {
        this.usernameInputField = ElementFactory.getInputField('#username', 'Username Input Field');
        this.passwordInputField = ElementFactory.getInputField('#password', 'Password Input Field');
        this.loginButton = ElementFactory.getButton('#doLogin', 'Login Button');
        this.createRoomButton = ElementFactory.getButton('#createRoom', 'Create Room Button');
        this.roomNumberInputField = ElementFactory.getInputField('#roomName', 'Number Room Input Field');
        this.roomTypeDropdown = ElementFactory.getDropDown('#type', 'Room Type Dropdown');
        this.roomAccessibleDropdown = ElementFactory.getDropDown('#accessible', 'Room Accessible Dropdown');
        this.roomPriceInputField = ElementFactory.getInputField('#roomPrice', 'Room Price Input Field');
        this. wifiCheckbox = ElementFactory.getCheckBox('#wifiCheckbox', 'Wifi Checkbox');
        this.errorAlertLabel = ElementFactory.getLabel('xpath://div[contains(@class,"alert alert-danger")]', "Error alert Label")
    }

    getCreatedRoom(roomNumber){
        return ElementFactory.getLabel(`#roomName${roomNumber}`, `${roomNumber} Number`).get();
    }

    getErrorAlertMessage(){
        return this.errorAlertLabel.getText();
    }

    fillUsername(userName) {
        this.usernameInputField.fill(userName);
        return this;
    }

    fillPassword(password) {
        this.passwordInputField.fill(password);
        return this;
    }

    fillRoomNumber(roomNumber) {
        this.roomNumberInputField.fill(roomNumber);
        return this;
    }

    fillRoomPrice(roomPrice) {
        this.roomPriceInputField.fill(roomPrice);
        return this;
    }

    selectRoomType(roomType) {
        this.roomTypeDropdown.selectValue(roomType);
        return this;
    }

    selectAccessibleType(roomAccessible) {
        this.roomAccessibleDropdown.selectValue(roomAccessible);
        return this;
    }

    selectWifi(){
        this.wifiCheckbox.click();
        return this;
    }

    clickLogin() {
        this.loginButton.click();
    }

    clickCreateRoom() {
        this.createRoomButton.click();
    }
}

export default new AdminPage;