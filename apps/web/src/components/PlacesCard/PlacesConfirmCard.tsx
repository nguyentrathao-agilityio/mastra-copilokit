import { useState } from 'react';
import { MapPin } from 'lucide-react';

// Components
import { Button, FilterChip } from '@/components';

// Constants
import { PLACES_CATEGORY_FILTERS, PLACE_FILTER_VALUES, PRICE_OPTIONS } from '@/constants';

// Utils
import { cn } from '@/utils';

export interface PlacesConfirmArgs {
  city: string;
  category: string;
  priceLevel: number;
}

interface PlacesConfirmCardProps extends PlacesConfirmArgs {
  minRating?: number;
  onConfirm?: (args: PlacesConfirmArgs) => void;
  onCancel?: () => void;
}

const PlacesConfirmCard = ({
  city: initialCity = '',
  category: initialCategory,
  priceLevel: initialPriceLevel,
  onConfirm,
  onCancel,
}: PlacesConfirmCardProps) => {
  const [city, setCity] = useState(initialCity);
  const [category, setCategory] = useState(initialCategory || PLACE_FILTER_VALUES.ATTRACTION);
  const [priceLevel, setPriceLevel] = useState(String(initialPriceLevel ?? 0));

  const handleConfirm = () => {
    onConfirm?.({
      city: city.trim(),
      category,
      priceLevel: Number(priceLevel),
    });
  };

  return (
    <div className="border-border-secondary bg-background-primary flex w-full max-w-sm flex-col gap-3 rounded-lg border">
      {/* Header */}
      <div className="border-border-tertiary border-b px-5 py-4">
        <div className="flex items-center gap-1.5">
          <MapPin size={14} className="text-text-secondary" aria-hidden="true" />
          <p className="text-card-title text-text-primary font-medium">Search places</p>
        </div>
        <p className="text-meta font-regular text-text-secondary mt-0.5">
          {city ? `Places in ${city}` : 'Review and adjust the search before confirming'}
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 px-5 py-4">
        {/* City */}
        <div className="flex flex-col gap-1">
          <label className="text-label text-text-tertiary font-medium uppercase tracking-widest">
            City
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Da Nang"
            className={cn(
              'bg-background-primary border-border-secondary w-full rounded-md border px-3 py-2',
              'text-body font-regular text-text-primary placeholder:text-text-tertiary',
              'outline-none'
            )}
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1.5">
          <label className="text-label text-text-tertiary font-medium uppercase tracking-widest">
            Category
          </label>
          <div className="flex flex-wrap gap-1.5">
            {PLACES_CATEGORY_FILTERS.map((opt) => (
              <FilterChip
                key={opt.value}
                option={{ value: opt.value, label: opt.label }}
                isActive={category === opt.value}
                onSelect={setCategory}
              />
            ))}
          </div>
        </div>

        {/* Price level */}
        <div className="flex flex-col gap-1.5">
          <label className="text-label text-text-tertiary font-medium uppercase tracking-widest">
            Price level
          </label>
          <div className="flex flex-wrap gap-1.5">
            {PRICE_OPTIONS.map((opt) => (
              <FilterChip
                key={opt.value}
                option={{ value: opt.value, label: opt.label }}
                isActive={priceLevel === opt.value}
                onSelect={setPriceLevel}
              />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-1 flex justify-end gap-2">
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Search places
          </Button>
        </div>
      </div>
    </div>
  );
};

export { PlacesConfirmCard };
