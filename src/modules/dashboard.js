import { Page } from "../controllers/page";
import { card } from "../controllers/inputCard";
import { chartCard } from "../controllers/chartCard";
import { Card } from "../controllers/quoteCard";
import { getLocalStorage } from "../controllers/utils";
import { dateRetracker } from "../controllers/dateRetracker";

const tempQuotes = `
    Breathe in, breathe out, Let the storm pass through, Even the darkest clouds Can’t hide the sky so blue.
    Small steps count, No need to race, Healing takes its time, And you’ll find your pace.
    When the night feels heavy, And your mind won’t rest, Remember: even shadows Need the sun to crest.
    A whisper of hope Can start a roaring flame, Kindness to yourself Is never done in vain.
    Sit with your feelings, Let them flow and be, You are not broken, You are simply free.
`
const colors = {
    "happy": "#63d33a",
    "sad": "#1E90FF",
    "angry": "#FF4500",
    "confused": "#8A2BE2",
    "smile": "#e7f91e"
}

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
        const quotes = getLocalStorage("quotes") || tempQuotes;
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
        this.GenerateChart()
    }


    // TODO: Get Input
    CardInput(elementArray, inputElement) {
        console.log(elementArray)
        console.log(inputElement)
    }

    // TODO:  Generate Chart
    GenerateChart() {
        // Append the chart element to the card
        const chart = document.createElement("div")
        const legend = document.createElement("div")
        legend.classList.add("legend")
        chart.classList.add("pie-chart")
        document.querySelector(".chart").appendChild(chart)
        document.querySelector(".chart").appendChild(legend)

        // Get the data from local storage and filter it based on the date retracker, then generate the chart based on the filtered data
        const data = this.filtereData();


        const total = Object.values(data).reduce((acc, val) => acc + val, 0);

        const chartSegments = Object.keys(data).map(mood => {
            const value = data[mood];
            const percentage = `${(value / total) * 100}%`;
            return {
                mood,
                percentage,
                color: colors[mood]
            }
        })


        let accumulated = 0;
        const gradientSegments = chartSegments.map(segment => {
            const start = accumulated;
            const end = accumulated + parseFloat(segment.percentage);
            accumulated = end;  // update accumulated for next segment
            return `${segment.color} ${start}% ${end}%`;
        });




        // Insert the legend items
        chartSegments.forEach((item) => {
            const legendItemContainer = document.createElement("div");
            const legendColor = document.createElement("div");
            const legendLabel = document.createElement("p");
            const span = document.createElement("span");

            legendColor.style.backgroundColor = item.color;
            legendColor.classList.add("legend-color");
            legendLabel.textContent = `${item.mood.split("")[0].toUpperCase() + item.mood.slice(1)}`;
            legendLabel.classList.add("legend-label");
            span.textContent = `${Math.round(parseFloat(item.percentage))}%`;
            legendLabel.appendChild(span);

            legendItemContainer.appendChild(legendColor);
            legendItemContainer.appendChild(legendLabel);
            legendItemContainer.classList.add("legend-item");

            legend.appendChild(legendItemContainer);
        })






        document.querySelector(".pie-chart").style.background = `conic-gradient(${gradientSegments.join(", ")})`;

    }

    filterData() {
        const data = JSON.parse(getLocalStorage("timelineData")) || [];

        const filteredData = data.filter(entry => {
            const entryDate = new Date("Thu Feb 12 2026 17:14:14 GMT-0500 (Eastern Standard Time)");
            return new Date(entry.date) < entryDate;
        })
        console.log(filteredData)
    }

    // Filter Date for Pie Chart
    filtereData() {
        // this is where the date retracker will come in, it will check the date and filter out the data that is not within the week range
        dateRetracker();

        const freshStartDate = new Date(getLocalStorage("startTracker"));
        const data = JSON.parse(getLocalStorage("timelineData")) || [];

        const filteredData = data.filter(entry => {
            const entryDate = new Date(entry.date);
            return entryDate >= freshStartDate;
        })

        // A counter for each mood 
        const moodItemsCount = {}

        filteredData.forEach(entry => {
            moodItemsCount[entry.mood] = (moodItemsCount[entry.mood] || 0) + 1;
        })

        return moodItemsCount;
    }

}