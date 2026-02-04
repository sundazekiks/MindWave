import "./style.css"
import { footer, header } from "./controllers/utils";

const htmlHeader = await header("/components/header.html")
const htmlFooter = await footer("/components/footer.html")
// Injecting the Header Element
document.querySelector('#header').innerHTML = htmlHeader
// Injecting the Footer Element
document.querySelector('#footer').innerHTML = htmlFooter;


