export function render(restaurants){
    document.getElementById("cardsContainer").innerHTML =restaurants.map(restaurant => (
    `<div class="plan plan--restaurant grid-item">
    <div class="card">
        <div class="card__body">
            <ul class="list">
                <li class="list__item plan__name">${restaurant.name}</li>
                <li class="list__item">${restaurant.rating}</li>
                <li class="list__item">${restaurant.cuisines}</li>
                <li class="list__item">${restaurant.address}</li>
            </ul>
        </div>
    </div>
    </div>`
    )).join(""); 
}