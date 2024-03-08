import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [yearToggle, setYearToggle] = useState(false);
  const [pageviews, setPageviews] = useState("100k");
  const [cost, setCost] = useState(16);
  const [inputIndex, setInputIndex] = useState(3);
  const mobileBreakpoint = 600;

  const dataMap = new Map([
    [0, { views: "<= 10K", cost: 4 }],
    [1, { views: "25K", cost: 8 }],
    [2, { views: "50K", cost: 12 }],
    [3, { views: "100K", cost: 16 }],
    [4, { views: "250K", cost: 24 }],
    [5, { views: "500K", cost: 48 }],
    [6, { views: ">= 1M", cost: 80 }],
  ]);

  const costFormatter = () => {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(cost);
  };

  const calcYear = (monthCost) => {
    return monthCost * 12 * 0.75;
  };

  const handleChange = (e) => {
    const index = Number(e.target.value);
    const data = dataMap.get(index);

    setInputIndex(index);
    setPageviews(data.views);
    setCost(yearToggle ? calcYear(data.cost) : data.cost);
  };

  const handleToggle = () => {
    const newYearToggle = !yearToggle;

    setYearToggle(!yearToggle);

    const data = dataMap.get(inputIndex);
    setCost(newYearToggle ? calcYear(data.cost) : data.cost);
  };

  useEffect(() => {
    const resize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <header className="header">
        <h1 className="h-text header__h1">Simple, traffic-based pricing</h1>
        <div className="header__p">
          <p className="p-text">Sign-up for our 30-day trial.</p>
          <p className="p-text">No credit card required.</p>
        </div>
      </header>
      <main className="main">
        <div className="top-container">
          <div className="pricing">
            <p className="p-text pricing__views">{pageviews} pageviews</p>
            {windowWidth > mobileBreakpoint ? (
              <div className="pricing__rate-container">
                <p className="h-text pricing__money">{costFormatter()}</p>
                <p className="p-text pricing__per">
                  {yearToggle ? "/ year" : "/ month"}
                </p>
              </div>
            ) : null}
          </div>
          <div className="slider">
            <input
              className="slider__input"
              type="range"
              min="0"
              max="6"
              step="1"
              defaultValue="3"
              onChange={handleChange}
            ></input>
            <div className="slider__progress-overlay"></div>
          </div>
          {windowWidth > mobileBreakpoint ? null : (
            <div className="pricing__rate-container">
              <p className="h-text pricing__money">{costFormatter()}</p>
              <p className="p-text pricing__per">
                {yearToggle ? "/ year" : "/ month"}
              </p>
            </div>
          )}
          <div className="billing">
            <p className="p-text">Monthly Billing</p>
            <div className="billing__toggle" onClick={handleToggle}>
              <div
                className={
                  "billing__toggle-thumb" +
                  (yearToggle ? " billing__toggle-thumb--yearly" : "")
                }
              ></div>
            </div>
            <p className="p-text">Yearly Billing</p>
            <div className="billing__discount-wrapper">
              <p className="billing__discount">
                25% {windowWidth > mobileBreakpoint ? "discount" : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="bot-container">
          <ul className="p-text features">
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
