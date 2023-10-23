export default class Section {

    constructor({ renderer }, selector) {
      this._renderer = renderer;
      this._container = document.querySelector(selector);
    }

    renderedItems(res) {
      res.forEach(this._renderer);
    }

    addItem(cardElement) {
      this._container.append(cardElement);
    }
  }
 
  export { Section };