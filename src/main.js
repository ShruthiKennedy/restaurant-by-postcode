async function fetchRestaurant() {
    try {
        let postcode=document.getElementById("postcode").value;
        const response = await fetch("../data/restaurant.json");
        const data = await response.json();
        const results = data.restaurants.slice(0, 10)                        
            .map(restaurant => ({
                name:     restaurant.name,                   
                cuisines: restaurant.cuisines.map(cusine => cusine.name), 
                rating:   restaurant.rating?.starRating ?? 0,   
                address:  [
                            restaurant.address?.firstLine,
                            restaurant.address?.city,
                            restaurant.address?.postalCode
                        ].filter(Boolean).join(", ")  
            }));    
        console.log(JSON.stringify(results,null,2))
    } catch (error) {
        document.getElementById("result").innerText =
        "Something went wrong" + error;
    }
}