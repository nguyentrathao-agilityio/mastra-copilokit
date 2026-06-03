export const TRAVEL_VOCABULARY = {
  fullTrip: [
    'lên kế hoạch',
    'chuyến đi',
    'kế hoạch du lịch',
    'tổng kế hoạch',
    'trip plan',
    'full trip',
    'itinerary',
    'plan a trip',
  ],
  flight: ['bay', 'vé', 'chuyến bay', 'sân bay', 'flight', 'airline', 'departure', 'arrive'],
  hotel: [
    'khách sạn',
    'phòng',
    'đặt phòng',
    'hotel',
    'check-in',
    'check-out',
    'overnight',
    'accommodation',
  ],
  weather: [
    'thời tiết',
    'nhiệt độ',
    'mưa',
    'dự báo',
    'weather',
    'forecast',
    'temperature',
    'climate',
  ],
  places: [
    'địa điểm',
    'tham quan',
    'ăn uống',
    'quán',
    'mua sắm',
    'attractions',
    'restaurant',
    'cafe',
    'bar',
    'shopping',
    'nightlife',
    'activity',
  ],
  tips: ['mẹo', 'kinh nghiệm', 'lưu ý', 'tips', 'advice', 'local tips', 'travel tips'],
  route: ['lộ trình', 'đường đi', 'tour', 'route', 'itinerary', 'directions', 'stops'],
} as const;

export type TravelIntent = keyof typeof TRAVEL_VOCABULARY;

export const buildVocabularySection = (): string =>
  Object.entries(TRAVEL_VOCABULARY)
    .map(([intent, keywords]) => `- ${intent}: ${keywords.join(', ')}`)
    .join('\n');
