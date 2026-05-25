import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { LibSQLStore } from '@mastra/libsql';
import { TRAVEL_AGENT_PROMPT } from '../prompts/travel';

// Tools
import { flightsTool, weatherTool, routeTool } from '../tools';

export const travelAgent = new Agent({
  id: 'travel-agent',
  name: 'travelAgent',
  instructions: TRAVEL_AGENT_PROMPT,
  model: process.env.OPENAI_MODEL ?? 'openai/gpt-4o-mini',
  tools: { weatherTool, flightsTool, routeTool },
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
