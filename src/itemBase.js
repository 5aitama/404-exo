export default class ItemBase {
    /** @type {HTMLElement} */
    _element;

    /** @param {HTMLElement} e */
    set element(e) {
        this._element = e;
    }

    get element() {
        return this._element;
    }
}