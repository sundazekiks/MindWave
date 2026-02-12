
export const Card = (quote) => {

    const quoteCard = `
    <div class="quote">
    <p>You are worth it. A poem for you</p>
        <h1>${quote != "" ? quote : "You deserve to be happy and the best version of yourself."}</h1>
    </div>
`

    return quoteCard;
}