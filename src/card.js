import ItemBase from "./itemBase.js";

export default class Card extends ItemBase {

    /**
     * Create new `Card`
     * @param {JSONElement} data The json element data.
     */
    constructor(data, isStatic = false) {
        super();

        // Create elements
        const eRoot     = document.createElement("div");
        const eTitle    = document.createElement("h1");
        const eContent  = document.createElement("div");
        const eImage    = document.createElement("img");
        const eText     = document.createElement("p");
        const eButton   = document.createElement("button");

        // Setup attributes
        eRoot.setAttribute("class", `element${isStatic ? " red" : ""}`);
        eRoot.setAttribute("style", `background-color:${data.color}`);
        eContent.setAttribute("class", "content");
        eContent.setAttribute("style", `border-color:${data.secondColor}`);
        eImage.setAttribute("src", `/imgs/${data.logo}`);
        eText.toggleAttribute("hide");
        eButton.setAttribute("style", `background-color:${data.color}`)

        // Setup contents
        eTitle.innerText = data.name;
        eText.innerText = data.description;
        eButton.innerText = isStatic ? "" : "voire la description";

        // Setup actions
        eButton.onclick = () => {
            eText.toggleAttribute("hide");
            if(isStatic) {
                eButton.toggleAttribute("hide");
            }
        }

        // Setup hierarchies
        eContent.append(eImage);
        eContent.append(eText);
        eContent.append(eButton);
        eRoot.append(eTitle);
        eRoot.append(eContent);

        this.element = eRoot;
    }
}