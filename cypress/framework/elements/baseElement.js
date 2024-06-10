import 'cypress-xpath';

class BaseElement {
    constructor(selector, name) {
      this.selector = selector;
      this.name = name;
    }
  
    get() {
      if (this.selector.startsWith('xpath:')) {
        return cy.xpath(this.selector.replace('xpath:', ''));
      } else {
        return cy.get(this.selector);
      }
    }
  
    click() {
      this.get().click();
    }
  
    clear() {
      this.get().clear();
    }
  
    getText() {
      return this.get().invoke('text');
    }
  }
  
  export default BaseElement;