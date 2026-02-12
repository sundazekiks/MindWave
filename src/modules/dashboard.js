import { Page } from "../controllers/page";
import { card } from "../controllers/inputCard";
import { chartCard } from "../controllers/chartCard";
import { Card } from "../controllers/quoteCard";
import { getLocalStorage } from "../controllers/utils";
export class Dashboard extends Page {

    bottomCardsContainer;
    topCardsContainer;

    constructor(element) {
        super(element)
        this.bottomCardsContainer = document.createElement("div")
        this.topCardsContainer = document.createElement("div")
    }

    Init() {
        // Append classes to container
        this.topCardsContainer.classList.add("top-container")
        this.bottomCardsContainer.classList.add("bottom-container")
        // Append them as Child
        this.elementContainer.appendChild(this.topCardsContainer)
        this.elementContainer.appendChild(this.bottomCardsContainer)

        // Append the components
        // Top 
        this.Quote()
        // Bottom
        this.Input();
        this.Chart();
    }

    getQuote() {
        const quotes = getLocalStorage("quotes")
        const quoteArray = quotes.split(".")
        let randInt = Math.floor(Math.random() * quoteArray.length)
        console.log(randInt)
        return quoteArray[randInt]
    }

    // TODO: Generate Card- Input

    Input() {
        const cardHtml = card;
        const cardContainer = document.createElement("div")
        cardContainer.classList.add("input-card");
        cardContainer.innerHTML = cardHtml;
        this.bottomCardsContainer.appendChild(cardContainer)

        // Send this to input function to get data from user
        this.CardInput(document.querySelectorAll(".icon-select"), document.getElementById("note"))
    }


    // TODO: Generate Card- Quote 
    Quote() {
        const quote = this.getQuote()
        const cardHtml = Card(quote);
        const cardContainer = document.createElement("div")
        cardContainer.classList.add("quote-card");
        cardContainer.innerHTML = cardHtml;
        this.topCardsContainer.appendChild(cardContainer)
    }

    // TODO: Generate Card- Chart
    Chart() {
        const cardHtml = chartCard;
        const cardContainer = document.createElement("div")
        cardContainer.classList.add("chart-card");
        cardContainer.innerHTML = cardHtml;
        this.bottomCardsContainer.appendChild(cardContainer)
    }

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