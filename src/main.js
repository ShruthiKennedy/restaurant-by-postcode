import { transform } from "./transform.js";
import { render } from "./render.js";
import { showLoading, validatePostcode, hideLoading, validateResponse } from "./utils.js";

const API_BASE = "/api/discovery/uk/restaurants/enriched/bypostcode/";

export async function fetchRestaurant() {
    document.getElementById("cardsContainer").innerHTML="";
    const postcode = document.getElementById("postcode").value.trim().toLowerCase();

    if (!validatePostcode(postcode)) return; 
    showLoading();

    try {
        let postcode=document.getElementById("postcode").value;
        const response = await fetch(`${API_BASE}${postcode}`);
        const data = await response.json();
        validateResponse(data);
    
        render(transform(data));

    } catch (error) {
        console.log("Something went wrong" + error);
    } finally {
        hideLoading();
    }
}
document.getElementById("searchBtn").addEventListener("click", fetchRestaurant);
