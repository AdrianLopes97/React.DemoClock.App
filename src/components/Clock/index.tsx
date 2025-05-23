import { useEffect, useState } from 'react';
import './index.css';

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="clock">{time.toLocaleTimeString()}</div>;
}