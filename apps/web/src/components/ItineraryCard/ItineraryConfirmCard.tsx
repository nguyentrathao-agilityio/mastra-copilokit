import { useState } from 'react';
import { Map } from 'lucide-react';
import { Button, Card, Divider, Typography } from '@/components/common';

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

  const inputClass =
    'border-border-secondary bg-background-primary text-body text-text-primary placeholder:text-text-tertiary focus:border-border-info focus:ring-border-info w-full rounded-md border px-3 py-2 outline-none focus:ring-1';

  const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div className="flex flex-col gap-1.5">
      <Typography variant="label" color="tertiary" className="uppercase tracking-widest">
        {label}
      </Typography>
      {children}
    </div>
  );

  return (
    <Card className="bg-background-confirm border-background-confirm w-full max-w-sm">
      <div className="flex items-center gap-2">
        <Map size={16} className="text-text-secondary" aria-hidden="true" />
        <Typography variant="card-title" weight="medium">
          Generate itinerary
        </Typography>
      </div>
      <Typography variant="meta" color="tertiary" className="mt-0.5">
        Review your trip details before generating the full plan
      </Typography>

      <Divider className="mt-3" />

      <div className="mt-3 flex flex-col gap-4">
        <Field label="Destination">
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="e.g. Da Nang"
            className={inputClass}
          />
        </Field>

        <Field label="Country">
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g. Vietnam"
            className={inputClass}
          />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Start date">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={inputClass}
            />
          </Field>
          <Field label="End date">
            <input
              type="date"
              value={endDate}
              min={startDate || undefined}
              onChange={(e) => setEndDate(e.target.value)}
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Travelers">
          <input
            type="number"
            min={1}
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <Button variant="secondary" size="sm" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" size="sm" onClick={handleConfirm}>
          Generate itinerary
        </Button>
      </div>
    </Card>
  );
};

export { ItineraryConfirmCard };
