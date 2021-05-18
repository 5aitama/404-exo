import ItemBase from "./itemBase.js";

export default class Section extends ItemBase {
    /** @type {HTMLDivElement} */
    _container = null;

    /**
     * Create new `Section`.
     * @param {string} title The section title
     */
    constructor(title) {
        super();

        // Create elements
        const eSection = document.createElement("div");
        const eSectionTitle = document.createElement("div");
        const eSectionTitleText = document.createElement("h1");
        const eContainer = document.createElement("div");

        // Setup attributes
        eSection.setAttribute("class", "section");
        eSectionTitle.setAttribute("class", "title");
        eContainer.setAttribute("class", "element-container");

        // Setup contents
        eSectionTitleText.innerText = title;

        // Setup hierarchies
        eSectionTitle.append(eSectionTitleText);
        eSection.append(eSectionTitle);
        eSection.append(eContainer);
        document.body.append(eSection);

        this._container = eContainer;
        this._element = eSection;
    }

    /**
     * Add an item to the section.
     * @param {ItemBase} item The item to be added
     */
    addItem(item) {
        this._container.append(item.element);
    }
}