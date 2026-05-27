import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { LibSQLStore } from '@mastra/libsql';
import { TRAVEL_AGENT_PROMPT } from '../prompts/travel';

// Constants
import { STATE_KEYS } from '@/constants';

// Tools

import { flightsTool, weatherTool, routeTool, placesTool, localTipsTool, hotelTool } from '@/tools';

// agents/travelAgent.ts
export const travelAgent = new Agent({
  id: 'travel-agent',
  name: 'travelAgent',
  instructions: async ({ requestContext }) => {
    const stateLines = STATE_KEYS.map((key) => {
      const value = requestContext.get(key);
      return value
        ? `state.${key} is SET — user has confirmed ${key}.`
        : `state.${key} is NULL — no ${key} yet.`;
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
  },
  memory: new Memory({
    storage: new LibSQLStore({
      id: 'travel-agent-storage',
      url: 'file:./mastra.db',
    }),
    options: {
      lastMessages: 20,
      generateTitle: true,
    },
  }),
});
