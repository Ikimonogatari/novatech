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
  static defaultProps = {
    center: {
      lat: 47.9229855,
      lng: 106.9256233,
    },
    zoom: 15,
  };
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area footer-style-01 bg_color--6">
          {/* Start Call to Action Area  */}
          <div className="im-call-to-action-area ptb--70 im-separator">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-xl-6 col-md-12 col-sm-12 col-12">
                  <div className="inner">
                    <h2 className="text-white mb--0">
                      Enough Talk, Let's Build Something Together
                    </h2>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-4 offset-xl-2 col-md-12 col-sm-12 col-12">
                  <div className="call-to-cation-tbn text-left text-lg-right mt_md--20 mt_sm--20">
                    <a
                      className="btn-default btn-large btn-border btn-opacity"
                      href="/"
                    >
                      Pricing
                    </a>
                  </div>
                </div>

                <div className="ptb--70 col-md-12 col-sm-12 col-12">
                  <div className="rn-contact-map-area position-relative">
                    <div style={{ height: "550px" }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.5122438457757!2d106.9256233!3d47.9229855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96923fda1488f7%3A0x787d83cbb49d124b!2sBeijing+St+GB+Plaza+%2C+SBD+-+8+khoroo%2C+Ulaanbaatar+14191!5e0!3m2!1sen!2sus!4v1651123041000!5m2!1sen!2sus"
                        width="100%"
                        height="500"
                        style={{ border: "0" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-[20px]"
                      ></iframe>
                    </div>
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
                          sales@novapowertech.com
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
                      <li>
                        Address:{" "}
                        <a href="https://www.google.com/maps/place/Beijing+St+GB+Plaza,+SBD+-+8+khoroo,+Ulaanbaatar+14191/@47.9229854,106.9256233,17z/data=!3m1!4b1!4m6!3m5!1s0x5d96923fda1488f7:0x787d83cbb49d124b!8m2!3d47.9229855!4d106.9304942!16s%2Fg%2F1q5bmpzvl?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D">
                          GB Plaza Tower, Floor 5, Suite 502, Beijing Street,
                          11th microdistrict, Khoroo 8, Sukhbaatar district,
                          Ulaanbaatar, Mongolia
                        </a>
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
