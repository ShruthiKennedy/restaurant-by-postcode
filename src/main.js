import { transform } from './transform.js';
import { render } from './render.js';
import {
  showLoading,
  validatePostcode,
  hideLoading,
  validateResponse,
} from './utils.js';

const API_BASE = '/api/discovery/uk/restaurants/enriched/bypostcode/';

export async function fetchRestaurants() {
  document.getElementById('cardsContainer').innerHTML = '';

  const postcode = document
    .getElementById('postcode')
    .value.trim()
    .toLowerCase();

  if (!validatePostcode(postcode)) return;

  showLoading();

  try {
    const response = await fetch(`${API_BASE}${postcode}`);
    const data = await response.json();

    if (!validateResponse(data)) return;

    render(transform(data));
  } catch (error) {
    document.getElementById('error').textContent =
      'Something went wrong. Please try again.';
    console.log('Something went wrong', error);
  } finally {
    hideLoading();
  }
}

document
  .getElementById('searchBtn')
  .addEventListener('click', fetchRestaurants);
