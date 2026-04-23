import { useState, useEffect } from "react";

export const useClock = () => {
  const getTime = () =>
    new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Manila",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  const [time, setTime] = useState(getTime);

  useEffect(() => {
    const now = new Date();
    const msUntilNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const timeout = setTimeout(() => {
      setTime(getTime());
      const interval = setInterval(() => setTime(getTime()), 60000);
      return () => clearInterval(interval);
    }, msUntilNextMinute);

    return () => clearTimeout(timeout);
  }, []);

  return time;
};
