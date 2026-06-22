import { describe, it, expect } from 'vitest';
import { http, HttpResponse } from 'msw';

import { getPlaces } from '../placesService';
import { API_URL, createMswServer } from '../../../test/mswServer';
import { apiPlacesResponse } from './mocks/places.mock';

const server = createMswServer();

describe('getPlaces', () => {
  it('returns camelCase place data from API', async () => {
    server.use(http.get(`${API_URL}/places/search`, () => HttpResponse.json(apiPlacesResponse())));

    const result = await getPlaces({ city: 'Da Nang' });

    expect(result.total).toBe(1);
    expect(result.results[0]).toEqual({
      id: 'PL001',
      shortCode: 'MB',
      name: 'My Khe Beach',
      city: 'Da Nang',
      country: 'Vietnam',
      category: 'attraction',
      description: 'One of the most beautiful beaches in Vietnam.',
      address: 'My Khe, Da Nang',
      rating: 4.7,
      reviewCount: 1200,
      priceLevel: 1,
      openingHours: 'Open 24h',
      imageUrl: 'https://example.com/beach.jpg',
      tags: ['beach', 'sunset'],
      isRecommended: true,
      latitude: 16.06,
      longitude: 108.24,
    });
  });

  it('filters by category when provided', async () => {
    let capturedUrl = '';
    server.use(
      http.get(`${API_URL}/places/search`, ({ request }) => {
        capturedUrl = request.url;
        return HttpResponse.json(apiPlacesResponse());
      })
    );

    await getPlaces({ city: 'Da Nang', category: 'restaurant' });

    expect(capturedUrl).toContain('category=restaurant');
  });

  it('returns empty results when API has no data', async () => {
    server.use(
      http.get(`${API_URL}/places/search`, () => HttpResponse.json(apiPlacesResponse([])))
    );

    const result = await getPlaces({ city: 'Da Nang' });

    expect(result.total).toBe(0);
    expect(result.results).toHaveLength(0);
  });

  it('throws when the API returns a non-OK status', async () => {
    server.use(http.get(`${API_URL}/places/search`, () => new HttpResponse(null, { status: 404 })));

    await expect(getPlaces({ city: 'Unknown' })).rejects.toThrow();
  });
});
