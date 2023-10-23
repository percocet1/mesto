export default class Section {

    constructor({ renderer }, selector) {
      this._renderer = renderer;
      this._container = document.querySelector(selector);
    }

    renderedItems(items) {
      items.forEach((item)=>{
        this._renderer(item)
      });
    }

    addItem(cardElement) {
      this._container.append(cardElement);
    }

    prependItem(cardElement){
      this._container.prepend(cardElement);
    }
}
