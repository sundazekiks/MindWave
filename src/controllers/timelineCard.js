
export const cardMaker = (data) => {

  const datetime = new Date(data.date)

  const timelineCard = `
    <!-- Time and Date -->
    <p id="datetime">${datetime.toLocaleString()}</p>
      <!--Mood -->
    <div id="mood-icon">
      <img src="/images/emoji-icons/${data.mood}.png" alt="${data.mood}" title="${data.mood}" />
    </div>
      <!--Note -->
        <p id="notes">${data.note}</p>
    `

  return timelineCard

}