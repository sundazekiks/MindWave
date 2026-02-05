export class Page {

    elementContainer;
    cardsContainer;

    constructor(elementContainer) {
        this.elementContainer = elementContainer;
        this.cardsContainer = document.createElement("div")
    }
}