// @vsc repo:vsc-project-113-frontend file:src/app/components/RefreshButton.tsx task:f3-src-app-components-refreshbutton-tsx module:frontend session:113
import React from 'react';
import { RefreshCwIcon } from '@heroicons/react/24/solid';

interface RefreshButtonProps {
  onRefresh: () => void;
}

export default function RefreshButton({ onRefresh }: RefreshButtonProps) {
  return (
    <button
      className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focusable:ring-offsetable bg-gray-
"
      // Fixing the class string due to accidental line break
    >
</button>
  );
}
