import { useState } from 'react';
import { MapPin } from 'lucide-react';

// Components
import { Button, Card, Divider, FilterChip, Typography } from '@/components/common';

// Constants
import { PLACES_CATEGORY_FILTERS, PLACE_FILTER_VALUES, PRICE_OPTIONS } from '@/constants';

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
  const [category, setCategory] = useState(initialCategory ?? PLACE_FILTER_VALUES.ATTRACTION);
  const [priceLevel, setPriceLevel] = useState(String(initialPriceLevel ?? 0));

  const handleConfirm = () => {
    onConfirm?.({
      city: city.trim(),
      category,
      priceLevel: Number(priceLevel),
    });
  };

  return (
    <Card className="bg-background-confirm border-background-confirm w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center gap-2">
        <MapPin size={16} className="text-text-secondary" aria-hidden="true" />
        <Typography variant="card-title" weight="medium">
          Search places
        </Typography>
      </div>
      <Typography variant="meta" color="tertiary" className="mt-0.5">
        Review and adjust the search before confirming
      </Typography>

      <Divider className="mt-3" />

      <div className="mt-3 flex flex-col gap-4">
        {/* City */}
        <div className="flex flex-col gap-1.5">
          <Typography variant="label" color="tertiary" className="uppercase tracking-widest">
            City
          </Typography>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Da Nang"
            className="border-border-secondary bg-background-primary text-body text-text-primary placeholder:text-text-tertiary focus:border-border-info focus:ring-border-info w-full rounded-md border px-3 py-2 outline-none focus:ring-1"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1.5">
          <Typography variant="label" color="tertiary" className="uppercase tracking-widest">
            Category
          </Typography>
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
          <Typography variant="label" color="tertiary" className="uppercase tracking-widest">
            Price level
          </Typography>
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
      </div>

      {/* Actions */}
      <div className="mt-4 flex justify-end gap-2">
        <Button variant="secondary" size="sm" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" size="sm" onClick={handleConfirm}>
          Search places
        </Button>
      </div>
    </Card>
  );
};

export { PlacesConfirmCard };
