import { Page } from "../controllers/page"
import { cardMaker } from "../controllers/timelineCard";
import { getLocalStorage } from "../controllers/utils";

const data = [
    {
        date: "2024-06-01",
        mood: "Happy",
        notes: "Had a great day at the park with friends!"
    },
    {
        date: "2024-06-02",
        mood: "Sad",
        notes: "Had a great day at the park with friends!"
    },
    {
        date: "2024-06-03",
        mood: "Neutral",
        notes: "Had a great day at the park with friends!"
    }
]

export class Mood extends Page {

    moodContainer;

    constructor(element) {
        super(element)
        this.moodContainer = document.createElement("div")
    }
    Init() {
        // Create the Mood History Container
        this.moodContainer.classList.add("mood-container")
        this.elementContainer.appendChild(this.moodContainer)
    }
    // TODO: Get Data
    getData() {
        return data
    }

    // Generate Timeline Function
    Timeline() {
        const data = getLocalStorage("timelineData") ? JSON.parse(getLocalStorage("timelineData")) : this.getData()
        data.forEach(item => {
            const card = cardMaker(item)
            const cardContainer = document.createElement("div")
            cardContainer.classList.add("timeline-card")
            cardContainer.innerHTML = card
            this.moodContainer.appendChild(cardContainer)
        })
    }
}