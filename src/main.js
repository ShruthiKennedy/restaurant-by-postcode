import { transform } from "./transform.js";
import { render } from "./render.js";

export async function fetchRestaurant() {
    try {
        let postcode=document.getElementById("postcode").value;
        const response = await fetch("../data/restaurant.json");
        const data = await response.json();

        render(transform(data));

    } catch (error) {
        console.log("Something went wrong" + error);
    }
}
document.getElementById("searchBtn").addEventListener("click", fetchRestaurant);
