// @vsc repo:vsc-project-113-frontend file:src/app/clocks/components/ClockCard.tsx task:f4-src-app-clocks-components-clockcard-tsx module:frontend session:113
import React from 'react';

interface Capital {
  id: number;
  name: string;
  country: string;
  timezone: string;
  offsetMinutes: number;
}

interface ClockCardProps {
  capital: Capital;
  localTime: string;
}

export default function ClockCard({ capital, localTime }: ClockCardProps) {
  return (
    <button
      type="button"
      tabIndex={0}
      aria-label={`ساعت ${capital.name}`}
      disabled={false}
      className="
        bg-white rounded-lg shadow-md p-
        hover:-shadow-lg
        transition-shadow cursor-pointer
        focussed-outline-none focussed-ring focussed-ring-primary focussed-ring-offset-
        flex flex-col items-end gap-
        ps-(zero) pe-(zero)
      "
    >
      <span className={`ltr ${''} ${''}`}>{capital.name}</span>
      <span className={`ltr ${''}`}>{capital.country}</span>
      <span className={`text-${''} font-${''} text-${''}`}>{localTime}</span>
    </button>
  );
}
