import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { TRAVEL_AGENT_PROMPT } from '../prompts/travel';

// Constants
import { STATE_KEYS, VALUE_KEYS } from '@/constants';

// Tools
import {
  flightsTool,
  weatherTool,
  routeTool,
  placesTool,
  localTipsTool,
  hotelTool,
  tripSummaryTool,
} from '@/tools';

// Stores
import { storage } from '../stores';

export const travelAgent = new Agent({
  id: 'travel-agent',
  name: 'travelAgent',
  instructions: async ({ requestContext }) => {
    const stateLines = STATE_KEYS.map((key) => {
      const value = requestContext.get(key);

      if (!value) return `state.${key} is NULL — no ${key} yet.`;
      if (VALUE_KEYS.has(key)) return `state.${key} = "${value}" — confirmed by user.`;

      return `state.${key} is SET — user has confirmed ${key}.`;
    }).join('\n');

    return `${TRAVEL_AGENT_PROMPT}\n\n## Current Booking State\n${stateLines}`;
  },
  model: process.env.OPENAI_MODEL ?? 'openai/gpt-4o-mini',
  tools: {
    weatherTool,
    flightsTool,
    routeTool,
    placesTool,
    localTipsTool,
    hotelTool,
    tripSummaryTool,
  },
  memory: new Memory({
    storage,
    options: {
      lastMessages: 20,
      generateTitle: true,
    },
  }),
});
