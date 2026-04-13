import { describe, it, expect, beforeEach } from 'vitest';
import { render } from './render.js';

const mockRestaurants = [
  {
    name: 'Bagelbuzz',
    cuisines: ['Bagels', 'Lunch'],
    rating: 5,
    address: '195 Shoreditch High Street, London, E1 6LG',
  },
];

describe('render', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="cardsContainer"></div>`;
  });

  it('renders the restaurant name into the page', () => {
    render(mockRestaurants);
    expect(document.getElementById('cardsContainer').innerHTML).toContain(
      'Bagelbuzz'
    );
  });

  it('renders the rating into the page', () => {
    render(mockRestaurants);
    expect(document.getElementById('cardsContainer').innerHTML).toContain('5');
  });

  it('renders the address into the page', () => {
    render(mockRestaurants);
    expect(document.getElementById('cardsContainer').innerHTML).toContain(
      '195 Shoreditch High Street, London, E1 6LG'
    );
  });

  it('renders nothing when the list is empty', () => {
    render([]);
    expect(document.getElementById('cardsContainer').innerHTML).toBe('');
  });
});
