import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
const logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="" />;

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" },
];

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area footer-style-01 bg_color--6">
          {/* Start Call to Action Area  */}
          <div className="im-call-to-action-area ptb--70 im-separator">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 col-sm-12 col-12">
                  <div className="inner">
                    <h2 className="text-white mb--0">
                      Visit us at GB Plaza Tower, Floor 5, Suite 502, Beijing
                      Street, 11th microdistrict, Khoroo 8, Sukhbaatar district,
                      Ulaanbaatar, Mongolia.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Call to Action Area  */}

          {/* Start Footer Area  */}
          <div className="footer-wrapper ptb--70">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="ft-text">
                    <div className="logo">
                      <Link to="/">{logoUrl}</Link>
                    </div>
                    <p>
                      Copyright © 2024 <Link to="/">Nova</Link> Power Tech
                    </p>
                  </div>
                </div>

                {/* Start Single Widget  */}
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                  <div className="footer-link">
                    <h4>Contact us:</h4>
                    <ul className="ft-link">
                      <li>
                        Email:{" "}
                        <a href="mailto:admin@example.com">
                          nfo@novapowertech.com
                        </a>
                      </li>
                      <li>
                        Phone:{" "}
                        <a href="mailto:hr@example.com">+976 7507-5151</a>
                      </li>
                      <li>
                        Phone:{" "}
                        <a href="mailto:hr@example.com">+976 8910-0044</a>
                      </li>
                    </ul>

                    <div className="social-share-inner mt--20">
                      <ul className="social-share social-style--2 d-flex justify-content-start liststyle">
                        {SocialShare.map((val, i) => (
                          <li key={i}>
                            <a href={`${val.link}`}>{val.Social}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Single Widget  */}
              </div>
            </div>
          </div>
          {/* End Footer Area  */}
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
