const notificationOptions = ["On", "Off"];
const accountOptions = ["Change Password", "Two-Factor Authentication", "Linked Accounts"];
const privacyOptions = ["Public", "Friends Only", "Private"];
const aboutOptions = ["Version", "Contact Support", "Terms of Service", "Privacy Policy"];

export const themeOptionElement = () => {
    const container = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("p");
    container.classList.add("theme-option-container");

    input.setAttribute("type", "color");
    input.setAttribute("id", "theme-color-picker");
    label.textContent = "Choose Theme Color";
    label.setAttribute("for", "theme-color-picker");

    container.appendChild(label);
    container.appendChild(input);

    return container;

}

export const notificationOptionElement = () => {
    const container = document.createElement("select");

    const notificationOptionTemplate = `
        ${notificationOptions.map(option => `<option value="${option.toLowerCase()}">${option}</option>`).join("")}
    `
    container.innerHTML = notificationOptionTemplate;
    return container;

}

export const accountOptionElement = () => {
    const container = document.createElement("select");

    const accountOptionTemplate = `
        ${accountOptions.map(option => `<option value="${option.toLowerCase().replace(/\s/g, "-")}">${option}</option>`).join("")}
    `
    container.innerHTML = accountOptionTemplate;
    return container;

}

export const privacyOptionElement = () => {
    const container = document.createElement("select");

    const privacyOptionTemplate = `
        ${privacyOptions.map(option => `<option value="${option.toLowerCase().replace(/\s/g, "-")}">${option}</option>`).join("")}
    `
    container.innerHTML = privacyOptionTemplate;
    return container;

}

export const aboutOptionElement = () => {
    const container = document.createElement("select");

    const aboutOptionTemplate = `
        ${aboutOptions.map(option => `<option value="${option.toLowerCase().replace(/\s/g, "-")}">${option}</option>`).join("")}
    `
    container.innerHTML = aboutOptionTemplate;
    return container;

}