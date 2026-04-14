export function render(restaurants) {
  document.getElementById('cardsContainer').innerHTML = restaurants
    .map(
      (restaurant) =>
        `<div class="card--restaurant grid-item">
            <div class="card">
                <div class="card__body">
                    <ul class="list">
                        <li class="list__item card__name">${restaurant.name}</li>
                        <li class="list__item">
                          <img class="icon" src="./assets/icons/star.svg" alt="rating" />
                          ${restaurant.rating}
                        </li>
                        <li class="list__item">
                          <img class="icon" src="./assets/icons/utensils.svg" alt="cuisine" />
                          ${restaurant.cuisines}
                        </li>
                        <li class="list__item">
                          <img class="icon" src="./assets/icons/map-pin.svg" alt="address" />
                          ${restaurant.address}
                        </li>
                    </ul>
                </div>
            </div>
        </div>`
    )
    .join('');
}
