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


export const getParams = () => {
    const url = window.location.search
    const params = new URLSearchParams(url)

    if (params.size === 0) {
        return "redirect to dashboard"
    }
    return params.get("page")
}

export const getLocalStorage = (key) => {
    return localStorage.getItem(key)
}

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}
