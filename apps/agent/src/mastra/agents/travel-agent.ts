import { Agent } from '@mastra/core/agent';
import { TRAVEL_AGENT_PROMPT } from '../prompts/travel';

export const travelAgent = new Agent({
  id: 'travel-agent',
  name: 'travelAgent',
  instructions: TRAVEL_AGENT_PROMPT,
  model: process.env.OPENAI_MODEL ?? 'openai/gpt-4o-mini',
  tools: {},
});
