export function render(restaurants){
    document.getElementById("cardsContainer").innerHTML =restaurants.map(restaurant => (
    `<div class="plan plan--restaurant grid-item">
    <div class="card">
        <header class="card__header">
            <h3 class="plan__name">${restaurant.name}</h3>
        </header>
        <div class="card__body">
            <ul class="list">
                <li class="list__item">${restaurant.rating}</li>
                <li class="list__item">${restaurant.cuisines}</li>
                <li class="list__item">${restaurant.address}</li>
            </ul>
        </div>
    </div>
    </div>`
    )).join(""); 
}