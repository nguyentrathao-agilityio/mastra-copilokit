import { useState } from 'react';
import { Lightbulb } from 'lucide-react';

// Components
import { Button, Card, Divider, FilterChip, Typography } from '@/components/common';
import { TIP_CATEGORY_OPTIONS } from '@/constants';

export interface LocalTipsConfirmArgs {
  city: string;
  country: string;
  category: string;
  essentialOnly: boolean;
}

interface LocalTipsConfirmCardProps extends LocalTipsConfirmArgs {
  onConfirm?: (args: LocalTipsConfirmArgs) => void;
  onCancel?: () => void;
}

const LocalTipsConfirmCard = ({
  city: initialCity = '',
  country: initialCountry = '',
  category: initialCategory,
  essentialOnly: initialEssentialOnly = false,
  onConfirm,
  onCancel,
}: LocalTipsConfirmCardProps) => {
  const [city, setCity] = useState(initialCity);
  const [country, setCountry] = useState(initialCountry);
  const [category, setCategory] = useState(initialCategory ?? '');
  const [essentialOnly, setEssentialOnly] = useState(initialEssentialOnly);

  const handleConfirm = () => {
    onConfirm?.({
      city: city.trim() || '',
      country: country.trim() || '',
      category,
      essentialOnly,
    });
  };

  return (
    <Card className="bg-background-confirm border-background-confirm w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Lightbulb size={16} className="text-text-secondary" aria-hidden="true" />
        <Typography variant="card-title" weight="medium">
          Get local tips
        </Typography>
      </div>
      <Typography variant="meta" color="tertiary" className="mt-0.5">
        Review and adjust before fetching travel advice
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

        {/* Country */}
        <div className="flex flex-col gap-1.5">
          <Typography variant="label" color="tertiary" className="uppercase tracking-widest">
            Country
          </Typography>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g. Vietnam"
            className="border-border-secondary bg-background-primary text-body text-text-primary placeholder:text-text-tertiary focus:border-border-info focus:ring-border-info w-full rounded-md border px-3 py-2 outline-none focus:ring-1"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1.5">
          <Typography variant="label" color="tertiary" className="uppercase tracking-widest">
            Category
          </Typography>
          <div className="flex flex-wrap gap-1.5">
            {TIP_CATEGORY_OPTIONS.map((opt) => (
              <FilterChip
                key={opt.value}
                option={{ value: opt.value, label: opt.label }}
                isActive={category === opt.value}
                onSelect={setCategory}
              />
            ))}
          </div>
        </div>

        {/* Essential only */}
        <div className="flex items-center justify-between gap-2">
          <Typography variant="meta" color="secondary">
            Essential tips only
          </Typography>
          <button
            type="button"
            role="switch"
            aria-checked={essentialOnly}
            onClick={() => setEssentialOnly((v) => !v)}
            className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
              essentialOnly ? 'bg-text-primary' : 'bg-border-secondary'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${
                essentialOnly ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 flex justify-end gap-2">
        <Button variant="secondary" size="sm" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" size="sm" onClick={handleConfirm}>
          Get tips
        </Button>
      </div>
    </Card>
  );
};

export { LocalTipsConfirmCard };
