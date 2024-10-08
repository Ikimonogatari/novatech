import React, { Component } from "react";
import Header from "../component/header/HeaderFour";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/FooterTwo";
import { Helmet } from "react-helmet";

class error404 extends Component {
  render() {
    return (
      <>
        <Helmet pageTitle="Nova Power Tech" />
        {/* Start Page Error  */}

        <div className="error-page-inner bg_color--3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <h1 className="title theme-gradient">404!</h1>
                  <h3 className="sub-title text-primary">Page not found</h3>
                  <span className="text-primary">
                    The page you were looking for could not be found.
                  </span>
                  <div className="error-button">
                    <a className="btn-default" href="/">
                      Back To Homepage
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Error  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </>
    );
  }
}
export default error404;
