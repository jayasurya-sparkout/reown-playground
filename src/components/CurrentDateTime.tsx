"use client";

import React, { useState, useEffect } from "react";

interface CurrentDateTimeProps {
  customClass?: string;
}

export default function CurrentDateTime({ customClass = "" }: CurrentDateTimeProps) {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [day, setDay] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      setDay(daysOfWeek[now.getDay()]);

      const formattedDate = now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      setDate(formattedDate);
      setTime(formattedTime);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={customClass}>
      <p className="text-sm text-muted-foreground">📅 {day}, {date}</p>
      <p className="text-sm font-medium">🕒 {time}</p>
    </div>
  );
}
