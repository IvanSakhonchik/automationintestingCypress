import BaseElement from './baseElement'

class Dropdown extends BaseElement {
    constructor(selector, name) {
        super(selector, name)
    }

    selectValue(value){
        this.get().select(value);
    }
}

export default Dropdown;