'use client';

import { useMemo, useState, useCallback } from 'react';
import { ArrowRight, Plane } from 'lucide-react';

// Utils
import { cn, computeBadges, formatDateFull } from '@/utils';

// Components
import { Divider, LoadingCard, Typography } from '@/components/common';
import { FlightOptionItem } from './FlightOptionItem';

// Types
import type { FlightSearchResult } from '@repo/types';

interface FlightCardProps {
  data?: FlightSearchResult;
  origin?: string;
  destination?: string;
  departureDate?: string;
  isLoading?: boolean;
  className?: string;
  onSelect?: (flightId: string) => void;
}

const FlightCard = ({
  data,
  origin,
  destination,
  departureDate,
  isLoading = false,
  className,
  onSelect,
}: FlightCardProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = useCallback(
    (id: string) => {
      setSelectedId(id);
      onSelect?.(id);
    },
    [onSelect]
  );

  if (isLoading || !data) return <LoadingCard lines={5} />;

  const outboundBadges = useMemo(() => computeBadges(data.results), [data.results]);
  const returnBadges = useMemo(() => computeBadges(data.returnResults ?? []), [data.returnResults]);

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {/* Outbound — header + flights in one container */}
      <div className="border-border-tertiary overflow-hidden rounded-lg border">
        <div className="border-border-tertiary border-b px-5 py-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Plane size={16} className="text-text-secondary" aria-hidden="true" />
              {origin && destination && (
                <Typography variant="card-title" weight="medium">
                  {origin}
                  <ArrowRight
                    size={14}
                    className="text-text-tertiary mx-1 inline"
                    aria-hidden="true"
                  />
                  {destination}
                </Typography>
              )}
            </div>
            <Typography as="span" variant="meta" color="tertiary">
              {formatDateFull(departureDate)}
            </Typography>
          </div>
          <Typography variant="meta" color="tertiary" className="mt-0.5">
            {data.count} flight{data.count !== 1 ? 's' : ''} found
          </Typography>
        </div>

        <div className="bg-background-primary divide-border-tertiary flex flex-col divide-y">
          {data.results.map((flight) => {
            const badge = outboundBadges.get(flight.id);
            return (
              <FlightOptionItem
                key={flight.id}
                flight={flight}
                isSelected={selectedId === flight.id}
                onSelect={handleSelect}
                badge={badge?.label}
                badgeVariant={badge?.variant}
              />
            );
          })}
        </div>
      </div>

      {/* Return flights */}
      {data.returnResults && data.returnResults.length > 0 && (
        <>
          <div className="flex items-center gap-2">
            <Divider className="flex-1" />
            <Typography
              as="span"
              variant="label"
              color="tertiary"
              className="uppercase tracking-widest"
            >
              Return
            </Typography>
            <Divider className="flex-1" />
          </div>

          <div className="border-border-tertiary overflow-hidden rounded-lg border">
            <div className="bg-background-primary divide-border-tertiary flex flex-col divide-y">
              {data.returnResults.map((flight) => {
                const badge = returnBadges.get(flight.id);
                return (
                  <FlightOptionItem
                    key={flight.id}
                    flight={flight}
                    isSelected={selectedId === flight.id}
                    onSelect={handleSelect}
                    badge={badge?.label}
                    badgeVariant={badge?.variant}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FlightCard;
