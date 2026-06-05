export const TRAVEL_VOCABULARY = {
  fullTrip: ['trip plan', 'full trip', 'plan a trip', 'plan my trip', 'book a trip'],
  flight: ['flight', 'airline', 'departure', 'arrive', 'airport', 'ticket'],
  hotel: ['hotel', 'room', 'booking', 'check-in', 'check-out', 'overnight', 'accommodation'],
  weather: ['weather', 'forecast', 'temperature', 'climate', 'rain'],
  places: [
    'attractions',
    'restaurant',
    'cafe',
    'bar',
    'shopping',
    'nightlife',
    'activity',
    'sightseeing',
    'places to visit',
  ],
  tips: ['tips', 'advice', 'local tips', 'travel tips', 'tip'],
  route: ['route', 'directions', 'stops', 'tour', 'move between', 'get from'],
} as const;

export type TravelIntent = keyof typeof TRAVEL_VOCABULARY;

export const buildVocabularySection = (): string =>
  Object.entries(TRAVEL_VOCABULARY)
    .map(([intent, keywords]) => `- ${intent}: ${keywords.join(', ')}`)
    .join('\n');
