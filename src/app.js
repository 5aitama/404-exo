import Card from "./card.js";
import Section from "./section.js";

async function setup() {

    /** @type {JSONData} */
    const data = await fetch("src/data.json").then(res => res.json());

    const refactorData = [
        {
            title: "Les languages du web",
            data: data.languages,
        },

        {
            title: "Les frameworks front",
            data: data.frameworks.filter(e => e.tags.includes("front")),
        },

        {
            title: "Les frameworks back",
            data: data.frameworks.filter(e => e.tags.includes("back")),
        },

        {
            title: "Les frameworks crossplateform",
            data: data.frameworks.filter(e => e.tags.includes("crossplateform")),
        }
    ];

    let i = 0;

    for(const data of refactorData) {
        const section = new Section(data.title);

        for(const e of data.data)
            section.addItem(new Card(e));

        i++;
    }

}

setup();