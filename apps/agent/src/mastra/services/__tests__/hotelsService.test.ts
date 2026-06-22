import { describe, it, expect } from 'vitest';
import { http, HttpResponse } from 'msw';

import { searchHotels } from '../hotelsService';
import { API_URL, createMswServer } from '../../../test/mswServer';
import { apiHotelsResponse, hotelInput } from './mocks/hotels.mock';

const server = createMswServer();

describe('searchHotels', () => {
  it('returns camelCase hotel data from API', async () => {
    server.use(
      http.get(`${API_URL}/hotels/availability`, () => HttpResponse.json(apiHotelsResponse()))
    );

    const result = await searchHotels(hotelInput);

    expect(result.total).toBe(1);
    expect(result.results[0]).toEqual({
      id: 'HTL001',
      shortCode: 'BM',
      code: 'BM-001',
      name: 'Beach Moon Hotel',
      city: 'Da Nang',
      country: 'Vietnam',
      address: '123 Vo Nguyen Giap',
      starRating: 4,
      pricePerNight: 60,
      currency: 'USD',
      amenities: ['pool', 'wifi', 'breakfast'],
      rating: 4.5,
      reviewCount: 320,
      imageUrl: 'https://example.com/hotel.jpg',
      available: true,
      availableRooms: 5,
      maxOccupancyPerRoom: 3,
      nights: 3,
      totalPrice: 180,
    });
    expect(result.search.checkIn).toBe('2026-08-10');
  });

  it('returns empty results when no hotels match', async () => {
    server.use(
      http.get(`${API_URL}/hotels/availability`, () => HttpResponse.json(apiHotelsResponse([])))
    );

    const result = await searchHotels(hotelInput);

    expect(result.total).toBe(0);
    expect(result.results).toHaveLength(0);
  });

  it('throws when the API returns a non-OK status', async () => {
    server.use(
      http.get(`${API_URL}/hotels/availability`, () => new HttpResponse(null, { status: 500 }))
    );

    await expect(searchHotels(hotelInput)).rejects.toThrow('Hotel API failed');
  });

  it('throws when the API returns an invalid response shape', async () => {
    server.use(
      http.get(`${API_URL}/hotels/availability`, () => HttpResponse.json({ bad: 'data' }))
    );

    await expect(searchHotels(hotelInput)).rejects.toThrow('Invalid hotel response shape');
  });
});
