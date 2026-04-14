export function transform(data) {
  return data.restaurants.slice(0, 10).map((restaurant) => ({
    name: restaurant.name,
    cuisines: restaurant.cuisines.map((cuisine) => cuisine.name).join(', '),
    rating: restaurant.rating?.starRating ?? 0,
    address: [
      restaurant.address?.firstLine,
      restaurant.address?.city,
      restaurant.address?.postalCode,
    ]
      .filter(Boolean)
      .join(', '),
  }));
}
