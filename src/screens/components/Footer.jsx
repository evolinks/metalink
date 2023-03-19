import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="section footer-top">
        <div class="container">
          <div class="footer-brand">
            <Link to="#">
              <img
                src="/images/logo.svg"
                width="126"
                height="28"
                loading="lazy"
                alt="Metalink home"
              />
            </Link>

            <p class="body-md footer-text">
              Buy, sell and discover exclusive digital assets by the top artists
              of NFTs world.
            </p>
          </div>

          <ul class="footer-list">
            <li>
              <p class="title-lg footer-list-title">Metalink</p>
            </li>

            <li>
              <Link to="#" class="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span class="span">Explore Item</span>
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span class="span">Live Auction</span>
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span class="span">Activities</span>
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span class="span">Wallets</span>
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span class="span">Creators</span>
              </Link>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="title-lg footer-list-title">Useful Links</p>
            </li>

            <li>
              <Link to="#" class="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span class="span">About Us</span>
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span class="span">Blog & News</span>
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span class="span">Terms & Condition</span>
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span class="span">Privacy policy</span>
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span class="span">Login</span>
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span class="span">Contact Us</span>
              </Link>
            </li>
          </ul>

          <div class="footer-list">
            <ul>
              <li>
                <p class="title-lg footer-list-title">
                  Download the Metalink app
                </p>
              </li>

              <li class="footer-list-item">
                <Link to="#">
                  <img
                    src="/images/appstore.png"
                    width="134"
                    height="40"
                    loading="lazy"
                    alt="Download Metalink app from AppStore"
                  />
                </Link>

                <Link to="#">
                  <img
                    src="/images/playstore.png"
                    width="134"
                    height="40"
                    loading="lazy"
                    alt="Download Metalink app from PlayStore"
                  />
                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <p class="title-lg footer-list-title">Contact Details</p>
              </li>

              <li class="footer-list-item">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                <Link to="mailto:metalink@nft.com" class="footer-link">
                  metalink@nft.com
                </Link>
              </li>

              <li class="footer-list-item">
                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

                <Link to="tel:+000 000-000-000" class="footer-link">
                  +000 000-000-000
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p class="body-md text-center copyright">
            &copy; 2023 Metalink. Developed with <span class="span">❤</span> by
            Evolinks.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
