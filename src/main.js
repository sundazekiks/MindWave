import "./styles/style.css"
import "./styles/dashboard.css"
import "./styles/mood.css"
import "./styles/settings.css"


import { footer, header, getParams, setLocalStorage, getLocalStorage } from "./controllers/utils";
import { Dashboard } from "./modules/dashboard";
import { Mood } from "./modules/mood";
import { Settings } from "./modules/settings";
import { quoteApi } from "./api/quoteApi";

// Date
const date = new Date();

// Main Content
const app = document.getElementById("app")

const htmlHeader = await header("/components/header.html")
const htmlFooter = await footer("/components/footer.html")

// Load in quote from API and set it to local storage
// This is to avoid multiple API calls when user goes back and forth between pages



// Injecting the Header Element
document.querySelector('#header').innerHTML = htmlHeader
// Injecting the Footer Element
document.querySelector('#footer').innerHTML = htmlFooter;

(async () => {
    if (!localStorage.getItem("quotes")) {
        await quoteApi();
    }
})();

// Embedding the pages
const get = getParams();


if (get === "dashboard" || get === "redirect to dashboard") {
    const d = new Dashboard(app)
    d.Init()
    // TODO: Move this to a better place
    document.getElementById("mood-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const selectedMood = document.querySelector('input[name="mood"]:checked');
        const note = document.getElementById("note").value;
        if (selectedMood) {
            const moodValue = selectedMood.value;
            console.log("Selected Mood:", moodValue);
            console.log("Note:", note);
            console.log("Date:", date.toString());
            // TODO: Save this data to local storage
            const timelineData = {
                mood: moodValue,
                note: note,
                date: date.toString()
            }
            getLocalStorage("timelineData") ? setLocalStorage("timelineData", JSON.stringify([...JSON.parse(getLocalStorage("timelineData")), timelineData])) : setLocalStorage("timelineData", JSON.stringify([timelineData]))
        } else {
            console.log("No mood selected");
        }
        this.reset(); // Reset the form after submission
    });
}
else if (get === "mood-history") {
    const m = new Mood(app)
    m.Init()
    m.Timeline()
}
else if (get === "settings") {
    const s = new Settings(app)
    s.Init()

}




const n = new Date();

n.setDate(n.getDate() + 7);

console.log(n.toDateString())