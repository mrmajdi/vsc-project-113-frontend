// @vsc repo:vsc-project-113-frontend file:src/app/components/MainCounter.tsx task:f3-src-app-components-maincounter-tsx module:frontend session:113
import { useState, useEffect } from 'react';

export default function MainCounter() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('fa-IR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Tehran',
      });
      const parts = formatter.formatToParts(now);
      let hour = '', minute = '', second = '';
      for (const part of parts) {
        if (part.type === 'hour') hour = part.value;
        else if (part.type === 'minute') minute = part.value;
        else if (part.type === 'second') second = part.value;
      }
      setTime(`${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:${second.padStart(2, '0')}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1_000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      dir="rtl"
      aria-label="زمان فعلی"
      className="text-5xl lg:text-6xl font-mono text-gray-800 leading-none"
    >
      {time}
    </div>
  );
}
