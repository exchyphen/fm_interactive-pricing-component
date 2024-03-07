import { useState } from "react";
import "./App.css";

function App() {
  const [yearToggle, setYearToggle] = useState(false);

  return (
    <>
      <header className="header">
        <h1 className="h-text header__h1">Simple, traffic-based pricing</h1>
        <p className="p-text header__p">
          Sign-up for our 30-day trial. No credit card required
        </p>
      </header>
      <main className="main">
        <div className="top-container">
          <div className="pricing">
            <p className="p-text pricing__views">100k pageviews</p>
            <div className="pricing__rate-container">
              <p className="h-text pricing__money">$16.00</p>
              <p className="p-text pricing__per">/ month</p>
            </div>
          </div>
          <div className="slider">
            <input
              className="slider__input"
              type="range"
              min="0"
              max="6"
              step="1"
              defaultValue="3"
            ></input>
            <div className="slider__progress-overlay"></div>
          </div>
          <div className="billing">
            <p className="p-text">Monthly Billing</p>
            <div
              className="billing__toggle"
              onClick={() => setYearToggle(!yearToggle)}
            >
              <div
                className={
                  "billing__toggle-thumb" +
                  (yearToggle ? " billing__toggle-thumb--yearly" : "")
                }
              ></div>
            </div>
            <p className="p-text">Yearly Billing</p>
            <div className="billing__discount-wrapper">
              <p className="billing__discount">25% discount</p>
            </div>
          </div>
        </div>
        <div className="bot-container">
          <ul className="p-text">
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
          </ul>
          <button className="bot__button">Start my trial</button>
        </div>
      </main>
      <footer className="attribution text">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/exchyphen" target="_blank">
          exc
        </a>
        .
      </footer>
    </>
  );
}

export default App;
