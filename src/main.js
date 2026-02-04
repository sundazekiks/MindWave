import "./styles/style.css"
import "./styles/dasboard.css"
import "./styles/settings.css"
import "./styles/mood-history.css"

import { footer, header, getParams } from "./controllers/utils";
import { Page } from "./controllers/page";
// Main Content
const app = document.getElementById("app")

const htmlHeader = await header("/components/header.html")
const htmlFooter = await footer("/components/footer.html")



// Injecting the Header Element
document.querySelector('#header').innerHTML = htmlHeader
// Injecting the Footer Element
document.querySelector('#footer').innerHTML = htmlFooter;

// Embedding the pages

const get = getParams();
const page = new Page(get, app)

page.init()

setTimeout(() => {
    console.log("hey there!")
    page.onMount(document.querySelector(".db-container"))
}, 5000)




