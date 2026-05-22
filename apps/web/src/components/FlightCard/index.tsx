'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Plane } from 'lucide-react';

// Utils
import { cn, computeBadges, formatDateFull } from '@/utils';

// Components
import { Card, Divider, LoadingCard, Typography } from '@/components/common';
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

  if (isLoading || !data) return <LoadingCard lines={5} />;

  const handleSelect = (id: string) => {
    setSelectedId(id);
    onSelect?.(id);
  };

  const outboundBadges = useMemo(() => computeBadges(data.results), [data.results]);
  const returnBadges = useMemo(() => computeBadges(data.returnResults ?? []), [data.returnResults]);

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {/* Header card */}
      <Card paddingClass="px-5 py-3">
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
      </Card>

      {/* Outbound flights */}
      <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
        </>
      )}
    </div>
  );
};

export default FlightCard;
