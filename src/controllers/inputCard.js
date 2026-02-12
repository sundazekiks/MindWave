
export const emojiArray = [
    { name: "happy", icon: "/images/emoji-icons/happy.png" },
    { name: "smile", icon: "/images/emoji-icons/smile.png" },
    { name: "confused", icon: "/images/emoji-icons/confused.png" },
    { name: "sad", icon: "/images/emoji-icons/sad.png" },
    { name: "angry", icon: "/images/emoji-icons/angry.png" },
]

export const card = `
    <h1>Action Center</h1>
    <p>How are you feeling right now?</p>
    <form id="mood-form">
    <fieldset class="emojis">
        ${emojiArray
        .map(
            (item) => ` 
                <input type="radio" id="${item.name}" name="mood" value="${item.name}" placeholder="${item.name}" />
                <label for="${item.name}">
                    <img src="${item.icon}" alt="${item.name}" title="${item.name}" />
                </label>
            `
        ).join("")}
    </fieldset>
    <fieldset class="emojis">
      <input id="note" type="text" placeholder="Record what you feel">
    </fieldset>
    <button type="submit" id="submit-mood">Submit</button>
    </form>
`
