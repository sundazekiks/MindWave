import { Page } from "../controllers/page";
import { card } from "../controllers/quoteCard";

export class Dashboard extends Page {

    constructor(element) {
        super(element)
    }

    // TODO: Generate Card- Quote

    Quote() {
        const cardHtml = card;
        const cardContainer = document.createElement("div")
        cardContainer.classList.add("quote-card");
        cardContainer.innerHTML = cardHtml;

        this.elementContainer.appendChild(cardContainer)
        // Send this to input function to get data from user
        this.CardInput(document.querySelectorAll(".icon-select"), document.getElementById("note"))
    }


    // TODO: Generate Card- Input 

    // TODO: Generate Card- Chart

    // TODO: Populate Cards

    // TODO: Generate Quote

    // TODO: Get data

    // TODO: Get Input
    CardInput(elementArray, inputElement) {
        console.log(elementArray)
        console.log(inputElement)
    }

    // TODO:  Generate Chart

}