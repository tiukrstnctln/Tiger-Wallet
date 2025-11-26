import React, { useState } from "react";
import "../App.css";  // Reuse global styles
import "./VendorLogin.css";  // Page-specific styles

import ustLogo from "../assets/figures/ust-logo.png";         // correct path
import tigerWalletLogo from "../assets/figures/tiger-wallet-white.png";
import { useNavigate } from "react-router-dom";

function VendorLogin() {
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  return (
    <div className="vendor-page">
      {/* HEADER */}
      <header className="vendor-header">
        <div className="vendor-header-left">
          <img src={ustLogo} className="ust-logo-img" />
          <img src={tigerWalletLogo} className="header-tiger-logo" />
        </div>

        <button className="vendor-pos-tab">VENDOR POS</button>
      </header>

      {/* GOLD LINE */}
      <div className="vendor-header-gold-line"></div>

      {/* MAIN LOGIN CARD */}
      <main className="vendor-main">
        <div className="login-card">
          <div className="login-card-gold-line"></div>

          <div className="login-card-inner">
            <h1 className="login-title">Sign In</h1>
            <p className="login-subtitle">
              To access TigerWallet, Please make sure to input Email.
            </p>

            <div className="login-fields">
              <input type="email" placeholder="UST EMAIL" className="login-input" />
              <input type="password" placeholder="PASSWORD" className="login-input" />
            </div>

            <button className="login-btn">LOGIN</button>

            <div className="login-links-row">
              <span>Need help signing in? </span>
              <a className="login-link" onClick={() => setModalOpen(true)}>
                Learn More
              </a>

              <a
                className="login-link right-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                Return Home
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
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

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Learn More</h2>
            <p>Before you can fully utilize the MyUSTe Portal, make sure you have the following user requirements:</p>
            <ul>
              <li><strong>UST Google Workspace Account:</strong> You need to have a registered UST Google Workspace personal account provided by UST. If you don't have an account, please contact the Office of Information and Communication Technology – Technical Support for assistance in creating one.</li>
              <li><strong>Google Authenticator Application:</strong> To enhance the security of your Tiger Wallet account, it is recommended to have the Google Authenticator application installed on your mobile device. The Google Authenticator app generates time-based one-time passwords (TOTP) for two-factor authentication. You can download the Google Authenticator app from Google Play Store / App Store.</li>
            </ul>
            <button onClick={() => setModalOpen(false)} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VendorLogin;