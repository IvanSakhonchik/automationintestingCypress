import Button from "../elements/button";
import Label from "../elements/label";
import InputField from "../elements/inputField";
import Dropdown from "../elements/dropdown";
import Checkbox from "../elements/checkbox";

class ElementFactory {
    static getButton(selector, name) {
        return new Button(selector, name);
    }

    static getLabel(selector, name) {
        return new Label(selector, name);
    }

    static getInputField(selector, name) {
        return new InputField(selector, name);
    }

    static getDropDown(selector, name) {
        return new Dropdown(selector, name);
    }

    static getCheckBox(selector, name) {
        return new Checkbox(selector, name);
    }
}

export default ElementFactory;