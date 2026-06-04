import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { TRAVEL_AGENT_PROMPT } from '../prompts/travel';

// Utils
import { buildInstructions } from '@/utils';

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
  instructions: async ({ requestContext }) =>
    buildInstructions(TRAVEL_AGENT_PROMPT, requestContext),
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
