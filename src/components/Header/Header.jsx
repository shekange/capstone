import "./Header.scss";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2025-09-21T17:00:00");
  const location = useLocation(); // Track the current location

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
    <div className="header">
      <div className="header__content">
        <div className="header__title">WE'RE GETTING MARRIED</div>
        <div className="header__couple-name">ANGEL & OSCAR</div>
        <div className="header__date">SEPTEMBER 21, 2025</div>
        <div className="header__countdown">
          <div className="header__tablet-desktop-countdown">
            {timeLeft.months} Months, {timeLeft.days} Days, {timeLeft.hours}{" "}
            Hours, {timeLeft.minutes} Minutes, {timeLeft.seconds} Seconds
          </div>
          <div className="header__mobile-countdown">
            <p>{timeLeft.months} Months</p>
            <p>{timeLeft.days} Days</p>
            <p>{timeLeft.hours} Hours</p>
            <p>{timeLeft.minutes} Minutes</p>
            <p>{timeLeft.seconds} Seconds</p>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="/photos"
                className={location.pathname === "/photos" ? "active" : ""}
              >
                Photos
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="/q-a"
                className={location.pathname === "/q-a" ? "active" : ""}
              >
                Q+A
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                to="/decorate"
                className={location.pathname === "/decorate" ? "active" : ""}
              >
                Image Decoration
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
