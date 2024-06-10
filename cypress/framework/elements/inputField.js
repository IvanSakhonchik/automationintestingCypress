import BaseElement from './baseElement'

class InputField extends BaseElement {
  constructor(selector, name) {
    super(selector, name)
  }

  fill(text) {
    this.get().type(text);
  }
}

export default InputField;