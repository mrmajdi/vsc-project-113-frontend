// @vsc repo:vsc-project-113-frontend file:src/app/clocks/components/ClockHeader.tsx task:f4-src-app-clocks-components-clockheader-ts module:frontend session:113
import React from "react";

interface ClockHeaderProps {
  capital: string;
  country: string;
}

export default function ClockHeader({ capital, country }: ClockHeaderProps) {
  return (
    <div className="flex flex-col ms-0 me-0 text-right">
      <div className="ltr block mb-2 font-vazir text-gray-700 font-medium">
        {capital}
      </div>
      <div className="ltr block font-vazir text-gray-500">{country}</div>
    </div>
  );
}
