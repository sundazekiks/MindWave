export const header = async (path) => {
    const data = await fetch(path)
    const html = await data.text()
    return html
}

export const footer = async (path) => {
    const data = await fetch(path)
    const html = await data.text()
    return html
}