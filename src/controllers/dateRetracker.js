import { setLocalStorage } from "./utils";

export const dateRetracker = () => {
    const currentDate = new Date();
    const freshStart = "Mon"    // Check if the current day is Monday, if so, reset the start tracker


    const day = 60 * 60 * 24 * 1000; // milliseconds in a day

    while (currentDate.toString().split(" ")[0] !== freshStart) {
        currentDate.setTime(currentDate.getTime() - day);
        currentDate.setHours(0, 0, 0, 0);
    }

    setLocalStorage("startTracker", currentDate.toString());

}