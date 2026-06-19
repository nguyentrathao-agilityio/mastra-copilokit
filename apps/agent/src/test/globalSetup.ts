import { LLMock } from '@copilotkit/aimock';

let mock: LLMock;

const TIPS_LLM_RESPONSE = JSON.stringify({
  tips: [
    {
      id: 'llm-1',
      category: 'safety',
      scope: 'country',
      title: 'Keep document copies',
      content: 'Store digital copies of your passport in cloud storage.',
      isEssential: true,
      location: 'Vietnam',
    },
    {
      id: 'llm-2',
      category: 'money',
      scope: 'country',
      title: 'Use city-centre ATMs',
      content: 'Airport ATMs charge higher fees. Use Techcombank in the city.',
      isEssential: true,
      location: 'Vietnam',
    },
    {
      id: 'llm-3',
      category: 'transport',
      scope: 'country',
      title: 'Use Grab for all rides',
      content: 'Grab is always cheaper and safer than street taxis.',
      isEssential: false,
      location: 'Vietnam',
    },
    {
      id: 'llm-4',
      category: 'culture',
      scope: 'country',
      title: 'Remove shoes indoors',
      content: 'Always remove shoes before entering homes and temples.',
      isEssential: false,
      location: 'Vietnam',
    },
    {
      id: 'llm-5',
      category: 'health',
      scope: 'country',
      title: 'Drink bottled water only',
      content: 'Tap water is not safe. Use bottled or filtered water.',
      isEssential: false,
      location: 'Vietnam',
    },
    {
      id: 'llm-6',
      category: 'connectivity',
      scope: 'country',
      title: 'Buy local SIM on arrival',
      content: 'Viettel SIMs cost ~$5 for 7 days with 3GB data at the airport.',
      isEssential: false,
      location: 'Vietnam',
    },
  ],
});

// Response cho weatherService — 1 câu tip ngắn thực tế
const WEATHER_TRAVEL_TIP = 'Wear light breathable clothing and stay hydrated.';

export async function setup() {
  // Skip AIMock when running evals — evals hit real OpenAI
  if (process.env.SKIP_AIMOCK === '1') return;

  mock = new LLMock({ port: 4010 });

  // weatherService: "Generate a single, concise travel tip..."
  mock.onMessage(/Generate a single.*travel tip/, { content: WEATHER_TRAVEL_TIP });

  // tipsService: "Generate 6 practical travel tips..."
  mock.onMessage(/Generate \d+ practical travel tips/, { content: TIPS_LLM_RESPONSE });

  await mock.start();

  // Must be set before any OpenAI/AI SDK client is constructed.
  // Both `openai` package and `@ai-sdk/openai` read OPENAI_BASE_URL at construction time.
  process.env.OPENAI_BASE_URL = `${mock.url}/v1`;
  process.env.OPENAI_API_KEY = 'mock';
}

export async function teardown() {
  await mock?.stop();
}
