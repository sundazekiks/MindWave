import "./styles/style.css"
import "./styles/dashboard.css"

import { footer, header, getParams } from "./controllers/utils";
import { Dashboard } from "./modules/dashboard";
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


if (get === "dashboard" || get === "redirect to dashboard") {
    const d = new Dashboard(app)
    d.Init()
}
















