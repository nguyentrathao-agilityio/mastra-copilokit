import { useState } from 'react';
import { Map } from 'lucide-react';

// Components
import { Button } from '@/components';

// Utils
import { cn } from '@/utils';

export interface ItineraryConfirmArgs {
  destination: string;
  country?: string;
  startDate: string;
  endDate: string;
  travelers: number;
}

interface ItineraryConfirmCardProps extends ItineraryConfirmArgs {
  onConfirm?: (args: ItineraryConfirmArgs) => void;
  onCancel?: () => void;
}

const ItineraryConfirmCard = ({
  destination: initialDestination = '',
  country: initialCountry = '',
  startDate: initialStartDate = '',
  endDate: initialEndDate = '',
  travelers: initialTravelers = 1,
  onConfirm,
  onCancel,
}: ItineraryConfirmCardProps) => {
  const [destination, setDestination] = useState(initialDestination);
  const [country, setCountry] = useState(initialCountry);
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);
  const [travelers, setTravelers] = useState(String(initialTravelers));

  const handleConfirm = () => {
    onConfirm?.({
      destination: destination.trim(),
      country: country.trim() || undefined,
      startDate: startDate.trim(),
      endDate: endDate.trim(),
      travelers: Math.max(1, Number(travelers) || 1),
    });
  };

  const inputClass = cn(
    'bg-background-primary border-border-secondary w-full rounded-md border px-3 py-2',
    'text-body font-regular text-text-primary placeholder:text-text-tertiary',
    'outline-none'
  );

  return (
    <div className="border-border-secondary bg-background-primary flex w-full max-w-sm flex-col gap-3 rounded-lg border">
      {/* Header */}
      <div className="border-border-tertiary border-b px-5 py-4">
        <div className="flex items-center gap-1.5">
          <Map size={14} className="text-text-secondary" aria-hidden="true" />
          <p className="text-card-title text-text-primary font-medium">Generate itinerary</p>
        </div>
        <p className="text-meta font-regular text-text-secondary mt-0.5">
          {destination
            ? `Trip plan for ${destination}`
            : 'Review your trip details before generating the full plan'}
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 px-5 py-4">
        {/* Destination */}
        <div className="flex flex-col gap-1">
          <label className="text-label text-text-tertiary font-medium uppercase tracking-widest">
            Destination
          </label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="e.g. Da Nang"
            className={inputClass}
          />
        </div>

        {/* Country */}
        <div className="flex flex-col gap-1">
          <label className="text-label text-text-tertiary font-medium uppercase tracking-widest">
            Country
          </label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g. Vietnam"
            className={inputClass}
          />
        </div>

        {/* Start / End date */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-label text-text-tertiary font-medium uppercase tracking-widest">
              Start date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-label text-text-tertiary font-medium uppercase tracking-widest">
              End date
            </label>
            <input
              type="date"
              value={endDate}
              min={startDate || undefined}
              onChange={(e) => setEndDate(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {/* Travelers */}
        <div className="flex flex-col gap-1">
          <label className="text-label text-text-tertiary font-medium uppercase tracking-widest">
            Travelers
          </label>
          <input
            type="number"
            min={1}
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Actions */}
        <div className="mt-1 flex justify-end gap-2">
          <Button variant="secondary" onClick={onCancel} className="rounded px-3 py-2">
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm} className="rounded px-3 py-2">
            Generate itinerary ↗
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ItineraryConfirmCard };
