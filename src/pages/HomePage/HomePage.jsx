import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2025-09-21T17:00:00");

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
        );
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ months, days, hours, minutes, seconds });
      } else {
        // If the countdown reaches zero, stop the timer
        clearInterval(timer);
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update countdown every second
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <main className="global">
      <div className="global__title">WE'RE GETTING MARRIED</div>
      <div className="global__countdown">
        <div className="global__tablet-desktop-countdown">
          {timeLeft.months} Months, {timeLeft.days} Days, {timeLeft.hours}{" "}
          Hours, {timeLeft.minutes} Minutes, {timeLeft.seconds} Seconds
        </div>
        <div className="global__mobile-countdown">
          <p>{timeLeft.months} Months</p>
          <p>{timeLeft.days} Days</p>
          <p>{timeLeft.hours} Hours</p>
          <p>{timeLeft.minutes} Minutes</p>
          <p>{timeLeft.seconds} Seconds</p>
        </div>
      </div>
      <Link to="/border" className="global__button">
        Image Decoration
      </Link>
    </main>
  );
}
