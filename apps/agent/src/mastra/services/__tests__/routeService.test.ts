import { describe, it, expect } from 'vitest';
import { http, HttpResponse } from 'msw';

import { getRoute } from '../routeService';
import { API_URL, createMswServer } from '../../../test/mswServer';
import { makePlaces, routeLeg } from './mocks/route.mock';

const server = createMswServer();

describe('getRoute', () => {
  it('returns a route with stops and legs', async () => {
    server.use(
      http.get(`${API_URL}/places/search`, () => HttpResponse.json({ results: makePlaces(3) })),
      http.get(`${API_URL}/places/route`, () => HttpResponse.json(routeLeg))
    );

    const result = await getRoute({ city: 'Da Nang', maxStops: 3 });

    expect(result.city).toBe('Da Nang');
    expect(result.stops).toHaveLength(3);
    expect(result.legs).toHaveLength(2);
    expect(result.legs[0].mode).toBe('walk');
    expect(result.legs[0].durationMin).toBe(28);
    expect(result.totalDurationMin).toBeGreaterThan(0);
  });

  it('includes stops without legs when route API returns null', async () => {
    server.use(
      http.get(`${API_URL}/places/search`, () => HttpResponse.json({ results: makePlaces(2) })),
      http.get(`${API_URL}/places/route`, () => new HttpResponse(null, { status: 404 }))
    );

    const result = await getRoute({ city: 'Da Nang', maxStops: 2 });

    expect(result.stops).toHaveLength(2);
    expect(result.legs).toHaveLength(0);
  });

  it('throws when no places are found for the city', async () => {
    server.use(http.get(`${API_URL}/places/search`, () => HttpResponse.json({ results: [] })));

    await expect(getRoute({ city: 'Nowhere' })).rejects.toThrow('No places found');
  });

  it('throws when the places API fails', async () => {
    server.use(http.get(`${API_URL}/places/search`, () => new HttpResponse(null, { status: 500 })));

    await expect(getRoute({ city: 'Da Nang' })).rejects.toThrow();
  });
});
