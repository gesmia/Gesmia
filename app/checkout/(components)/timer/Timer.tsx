'use client';

import React, { useState, useEffect } from 'react';
import './timer.css'

const DEADLINE = new Date('2024/08/01');

function calculateTimeLeft(): Record<'days' | 'hours' | 'minutes' | 'seconds', string> {
  const difference = +DEADLINE - +new Date();

  const bareData = (difference > 0) ? {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  } : { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return Object.fromEntries(
    Object.entries(bareData).map((
      [key, value]) => [key, `${value}`.padStart(2, '0')]
    ),
  ) as any;
}
export function Timer() {
  const [oldTimeLeft, setOldTimeLeft] = useState<ReturnType<typeof calculateTimeLeft>>(null!);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function updateTimeLeft() {
    const newTimeLeft = calculateTimeLeft()
    if (JSON.stringify(timeLeft) === JSON.stringify(newTimeLeft)) return;
  
    setOldTimeLeft(timeLeft);
    setTimeLeft(newTimeLeft);
  }

  useEffect(() => {
    const timer = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const NumberDisplay = (current: string, old?: string) => {
    if (current === old) return <span>{current}</span>;
    return (
      <>
        {[current, old].map((v) => (
          <span key={v || -1}>{v}</span>
        ))}
      </>
    );
  }

  return (
    <p className='ctt'>
      <span className='countdown-text'>
        {NumberDisplay(timeLeft.days, oldTimeLeft?.days)}
      </span>
      <span className='countdown-number'>D</span>
      <span className='countdown-text'>
        {NumberDisplay(timeLeft.hours, oldTimeLeft?.hours)}
      </span>
      <span className='countdown-number'>H</span>
      <span className='countdown-text'>
        {NumberDisplay(timeLeft.minutes, oldTimeLeft?.minutes)}
      </span>
      <span className='countdown-number'>M</span>
      <span className='countdown-text'>
        {NumberDisplay(timeLeft.seconds, oldTimeLeft?.seconds)}
      </span>
      <span className='countdown-number'>S</span>
    </p>
  );
}
