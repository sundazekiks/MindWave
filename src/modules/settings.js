import { Page } from "../controllers/page";
import { themeOptionElement, notificationOptionElement, accountOptionElement, privacyOptionElement, aboutOptionElement } from "../controllers/optionTemps";
import { setLocalStorage } from "../controllers/utils";
const settings = ["Theme", "Notifications", "Account", "Privacy", "About"]

export class Settings extends Page {

    settingsContainer;

    constructor(element) {
        super(element)
        this.settingsContainer = document.createElement("div")
    }

    // TODO: Get Data 

    // TODO: Generate Settings
    Init() {
        this.settingsContainer.className = "settings-container"
        this.elementContainer.appendChild(this.settingsContainer)
        const opts = settings.map(option => this.optionTemplate(option)).join("")
        this.settingsContainer.innerHTML = opts;
        this.configureOption();

    }

    optionTemplate(option) {

        return `<div class="option ${option.toLowerCase()}">
                    <h3>${option}</h3>
                </div>
        `
    }

    configureOption() {
        document.querySelector(".theme").appendChild(themeOptionElement());
        document.querySelector(".notifications").appendChild(notificationOptionElement());
        document.querySelector(".account").appendChild(accountOptionElement());
        document.querySelector(".privacy").appendChild(privacyOptionElement());
        document.querySelector(".about").appendChild(aboutOptionElement());

        document.getElementById("theme-color-picker").addEventListener("input", (event) => {
            const selectedColor = event.target.value;
            document.querySelector(":root").style.setProperty("--bg-custom", selectedColor);
            setLocalStorage("themeColor", selectedColor)
        })


    }

}