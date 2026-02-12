import { setLocalStorage } from "../controllers/utils";

export const quoteApi = async () => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/v2/quote`);
        const data = await res.json();
        setLocalStorage("quotes", data.quote)
    }
    catch (error) {
        console.error("Error fetching quote:", error);
        return null;
    }

}