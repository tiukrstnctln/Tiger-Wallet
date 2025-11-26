// src/App.jsx
import "./App.css";

import ustLogo from "./assets/figures/ust-logo.png";
import tigerWalletLogo from "./assets/figures/tiger-wallet-logo.png";
import athleteIcon from "./assets/figures/athletes-dashboard-icon.png";
import vendorIcon from "./assets/figures/vendor-pos-icon.png";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="app">
      {/* HEADER */}
      <header className="tw-header">
        <div className="tw-header-left">
          <img
            src={ustLogo}
            className="ust-logo-img"
            alt="University of Santo Tomas logo"
          />
          <span className="ust-header-text">UNIVERSITY OF SANTO TOMAS</span>
        </div>
        <button className="help-btn">?</button>
      </header>

      {/* MAIN */}
      <main className="tw-main">
        {/* Tiger Wallet logo + tagline */}
        <section className="logo-section">
          <img
            src={tigerWalletLogo}
            className="tiger-logo"
            alt="Tiger Wallet logo"
          />
          <p className="tagline">
            Official Digital Wallet for Thomasian Athletes
          </p>
        </section>

        {/* Welcome block with yellow bar */}
        <section className="welcome-section">
          <div className="welcome-inner">
          <span className="black-line"></span>
          <span className="gold-line"></span>
            <div className="welcome-text-block">
              <h1 className="welcome-title">WELCOME.</h1>
              <h2 className="welcome-subtitle">PLEASE CHOOSE YOUR ROLE</h2>
            </div>
          </div>
        </section>

        {/* Role cards */}
        <section className="roles-section">
          {/* Athlete card */}
          <div className="role-card">
            <div className="role-card-header">
              <img
                src={athleteIcon}
                alt="Athlete's Dashboard icon"
                className="role-icon"
              />
            </div>
            <p className="role-body">
              Access your personal wallet, check your &apos;sukli&apos; balance,
              and view your complete meal tap and transaction history.
            </p>
            <button className="launch-btn">LAUNCH</button>
          </div>

          {/* Vendor card */}
          <div className="role-card">
            <div className="role-card-header">
              <img
                src={vendorIcon}
                alt="Vendor POS icon"
                className="role-icon"
              />
            </div>
            <p className="role-body">
              Log in to the Point-of-Sale system to process payments by tapping
              the athlete&apos;s ID and track your daily sales.
            </p>
            <button className="launch-btn" onClick={() => navigate("/vendor-login")} 
              >
              LAUNCH
              </button>

          </div>
        </section>
      </main>

      <footer className="tw-footer">
  <div className="footer-left">
    © Copyright 2025. University of Santo Tomas. All Rights Reserved.
  </div>

  <div className="footer-right">
    <a href="#">Privacy Policy</a>
    <span className="divider">•</span>
    <a href="#">Terms & Conditions</a>
  </div>
</footer>
        </div>
  );
}

export default App;