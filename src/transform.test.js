import { describe, it, expect } from 'vitest';
import { transform } from './transform.js';

const mockData = {
  restaurants: [
    {
      name: 'Bagelbuzz',
      cuisines: [
        { name: 'Bagels', uniqueName: 'bagels' },
        { name: 'Lunch', uniqueName: 'lunch' },
      ],
      rating: { count: 312, starRating: 5, userRating: null },
      address: {
        city: 'London',
        firstLine: '195 Shoreditch High Street',
        postalCode: 'E1 6LG',
        location: { type: 'Point', coordinates: [-0.077516, 51.523744] },
      },
    },
    {
      name: 'Chicken Valley Holborn',
      cuisines: [
        { name: 'Chicken', uniqueName: 'chicken' },
        { name: 'Burgers', uniqueName: 'burgers' },
        { name: 'Halal', uniqueName: 'halal' },
      ],
      rating: { count: 255, starRating: 5, userRating: null },
      address: {
        city: 'London',
        firstLine: '60 Theobalds Road',
        postalCode: 'WC1X 8SF',
        location: { type: 'Point', coordinates: [-0.116786, 51.52074] },
      },
    },
  ],
};

describe('transform', () => {
  it('maps restaurant data into the expected format', () => {
    const result = transform(mockData);

    expect(result[0]).toEqual({
      name: 'Bagelbuzz',
      cuisines: ['Bagels', 'Lunch'],
      rating: 5,
      address: '195 Shoreditch High Street, London, E1 6LG',
    });
  });

  it('extracts only cuisine names, not the full cuisine objects', () => {
    const result = transform(mockData);
    expect(result[0].cuisines).toEqual(['Bagels', 'Lunch']);
  });

  it('extracts the starRating as a number', () => {
    const result = transform(mockData);
    expect(result[0].rating).toBe(5);
  });

  it('builds the address from firstLine, city and postalCode', () => {
    const result = transform(mockData);
    expect(result[0].address).toBe(
      '195 Shoreditch High Street, London, E1 6LG'
    );
  });

  it('defaults rating to 0 when starRating is missing', () => {
    const data = {
      restaurants: [{ ...mockData.restaurants[0], rating: null }],
    };
    expect(transform(data)[0].rating).toBe(0);
  });

  it('returns only the first 10 restaurants', () => {
    const data = {
      restaurants: Array.from({ length: 12 }, (_, i) => ({
        name: `Restaurant ${i + 1}`,
        cuisines: [{ name: 'Pizza', uniqueName: 'pizza' }],
        rating: { count: 10, starRating: 4, userRating: null },
        address: {
          city: 'London',
          firstLine: `${i + 1} Street`,
          postalCode: 'E1 1AA',
          location: { type: 'Point', coordinates: [0, 0] },
        },
      })),
    };

    expect(transform(data)).toHaveLength(10);
  });
});
