export class Page {

    Page;
    elementContainer;

    constructor(page, elementContainer) {
        this.Page = page;
        this.elementContainer = elementContainer;
    }

    async init() {
        const a = await fetch(`/pages/${this.Page}.html`)
        const d = await a.text()
        this.elementContainer.innerHTML = d
    }

    onMount(element) {
        console.log(element)
    }

}