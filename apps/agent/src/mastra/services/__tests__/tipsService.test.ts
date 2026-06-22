import { describe, it, expect } from 'vitest';
import { http, HttpResponse } from 'msw';

import { getLocalTips } from '../tipsService';
import { API_URL, createMswServer } from '../../../test/mswServer';
import { mockTip, apiTipsResponse } from './mocks/tips.mock';

const server = createMswServer();

describe('getLocalTips', () => {
  it('returns API tips when the API has data', async () => {
    server.use(http.get(`${API_URL}/tips`, () => HttpResponse.json(apiTipsResponse([mockTip]))));

    const result = await getLocalTips({ country: 'Vietnam', city: 'Da Nang' });

    expect(result.country).toBe('Vietnam');
    expect(result.count).toBe(1);
    expect(result.tips[0].id).toBe('api-1');
    expect(result.tips[0].isEssential).toBe(true);
  });

  it('falls back to LLM when API returns empty tips (AIMock intercepts OpenAI)', async () => {
    server.use(http.get(`${API_URL}/tips`, () => HttpResponse.json(apiTipsResponse([]))));

    const result = await getLocalTips({ country: 'Vietnam' });

    expect(result.country).toBe('Vietnam');
    expect(result.tips.length).toBe(6);
    expect(result.tips[0]).toEqual({
      id: 'llm-1',
      category: 'safety',
      scope: 'country',
      title: 'Keep document copies',
      content: 'Store digital copies of your passport in cloud storage.',
      isEssential: true,
      location: 'Vietnam',
    });
    expect(result.tips.filter((t) => t.isEssential)).toHaveLength(2);
  });

  it('returns empty tips when the API fails', async () => {
    server.use(http.get(`${API_URL}/tips`, () => new HttpResponse(null, { status: 500 })));

    await expect(getLocalTips({ country: 'Vietnam' })).rejects.toThrow();
  });
});
