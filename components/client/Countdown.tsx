"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/lib/wedding";

const DAY_MS = 86_400_000;

function countdownLabel(now: Date) {
  const { countdown } = wedding;
  const days = Math.ceil((new Date(wedding.dateISO).getTime() - now.getTime()) / DAY_MS);
  if (days > 1) return countdown.daysToGo(days);
  if (days === 1) return countdown.tomorrow;
  if (days === 0) return countdown.today;
  return countdown.married;
}

export default function Countdown() {
  const [label, setLabel] = useState(" ");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- depende de la fecha actual, solo en el cliente
    setLabel(countdownLabel(new Date()));
  }, []);

  return (
    <span className="lbl" id="countdown">
      {label}
    </span>
  );
}
