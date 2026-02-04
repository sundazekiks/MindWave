
const emojiArray = [
    { name: "Happy", icon: "/images/emoji-icons/happy-face.png" },
    { name: "Smile", icon: "/images/emoji-icons/smile.png" },
    { name: "Confused", icon: "/images/emoji-icons/confused.png" },
    { name: "Sad", icon: "/images/emoji-icons/sad.png" },
    { name: "Angry", icon: "/images/emoji-icons/angry.png" },
]

export const card = `
      <h1>Action Center</h1>
      <p>How are you feeling right now?</p>
      <div class="emojis">
        ${emojiArray
        .map(
            (item) => ` 
                <a data-name="${item.name}" class="icon-select">
                    <img src="${item.icon}" alt="${item.name}"/>
                </a>
            `
        ).join("")}
      </div>
      <input id="note" type="text">
`
