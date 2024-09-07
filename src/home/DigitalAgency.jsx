import React, { Component, Fragment } from "react";
import ScrollToTop from "react-scroll-up";
import { Link } from "react-router-dom";
import { FiChevronUp } from "react-icons/fi";
import ServiceList from "../elements/service/ServiceList";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/Footer";
import PortfolioList from "../elements/portfolio/PortfolioList";
import TabOne from "../elements/tab/TabOne";
import Helmet from "../component/common/Helmet";
import Particles from "react-tsparticles";
import { slickDot, portfolioSlick2 } from "../page-demo/script";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";

const SlideList = [
  {
    textPosition: "text-center",
    category: "",
    title: "Nova Power Tech",
    description:
      "Empowering Mongolia with smart, sustainable solutions for today and tomorrow.",
  },
];

class DigitalAgency extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    let title = "Nova Power Tech",
      description = "";
    return (
      <Fragment>
        <Helmet pageTitle="Nova Power Tech" />

        {/* Start Header Area  */}
        <Header logo="dark" color="color-green" />
        {/* End Header Area  */}

        {/* Start Slider Area   */}
        <div
          className="slider-activation slider-creative-agency with-particles"
          id="home"
        >
          <div className="frame-layout__particles">
            <Particles
              className="particle"
              options={{
                style: {
                  position: "absolute",
                },
                fpsLimit: 50,
                interactivity: {
                  detectsOn: "canvas",
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    bubble: {
                      distance: 100,
                      duration: 2,
                      opacity: 0.8,
                      size: 10,
                      color: "#888",
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 100,
                      duration: 0.4,
                      color: "#888",
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#888",
                  },
                  links: {
                    color: "#888",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 6,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      value_area: 2000,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    random: true,
                    value: 5,
                  },
                },
                detectRetina: true,
              }}
            />
          </div>
          <div className="im_modern_slider bg_nova--27 ">
            {SlideList.map((value, index) => (
              <div
                className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center"
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ""}
                        {value.title ? (
                          <h1 className="title">{value.title}</h1>
                        ) : (
                          ""
                        )}
                        {value.description ? (
                          <p className="description_style-2">
                            {value.description}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Slider Area   */}

        {/* Start Service Area  */}
        <div className="service-area pt--120 pb--50 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <span className="subtitle">What we can do for you</span>
                  <h2 className="title">Our Service</h2>
                  {/* <p className="description">
                    There are many variations of passages of Lorem Ipsum
                    available, <br /> but the majority have suffered alteration.
                  </p> */}
                </div>
              </div>
            </div>
            <ServiceList
              item="6"
              column="col-lg-4 col-md-6 col-sm-6 col-12 text-center"
            />
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start About Area */}
        <div className="about-area ptb--120 bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/about.jpg"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <span className="subtitle">Our company about</span>
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <TabOne tabStyle="tab-style--1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area */}

        {/* Start Offerings Area */}
        <div className="portfolio-area ptb--120 bg_color--1" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title text-left mb--30">
                  <span className="subtitle">
                    Products of Today, Ready for Tomorrow
                  </span>
                  <h2 className="title">Key Offerings</h2>
                  <p className="description">
                    Himel's offerings are designed for the modern world,
                    ensuring that you stay ahead with products that are both
                    cutting-edge and economically viable. Whether upgrading your
                    home, business, or industrial facility, Himel provides
                    unparalleled reliability and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper portfolio-sacousel-inner mb--55">
            <div className="portfolio-slick-activation mt--30 mt_sm--30">
              <Slider {...portfolioSlick2}>
                {PortfolioList2.map((value, index) => (
                  <div className="im_portfolio" key={index}>
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <Link>{value.image}</Link>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <h4 className="title">
                            <Link>{value.title}</Link>
                          </h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>{value.description}</p>
                        </div>
                      </div>
                    </div>
                    <Link className="transparent_link"></Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* End Offerings Area */}

        {/* Start Video Area  */}
        <div className="rn-section ptb--120 bg_color--1 line-separator">
          <div className="container">
            <div className="row mt_dec--30 sercice-details-content align-items-center">
              <div className="col-lg-12">
                <div className="thumb position-relative">
                  {/* Healthcare Facilities */}
                  <img
                    className="w-100"
                    src={`https://img.youtube.com/vi/ymDSt-fgKUQ/maxresdefault.jpg`}
                    alt="Healthcare Facilities"
                  />
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="ymDSt-fgKUQ" // Healthcare Facilities video ID
                    onClose={() => this.setState({ isOpen: false })}
                  />
                  <button
                    className="video-popup position-top-center theme-color"
                    onClick={this.openModal}
                  >
                    <span className="play-icon"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mt--30">
                <div className="thumb position-relative">
                  {/* Cement Industry Solutions */}
                  <img
                    className="w-100"
                    src={`https://img.youtube.com/vi/9rf-8uQ9Fp0/maxresdefault.jpg`}
                    alt="Cement Industry Solutions"
                  />
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="9rf-8uQ9Fp0" // Cement Industry Solutions video ID
                    onClose={() => this.setState({ isOpen: false })}
                  />
                  <button
                    className="video-popup position-top-center theme-color"
                    onClick={this.openModal}
                  >
                    <span className="play-icon"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mt--30">
                <div className="thumb position-relative">
                  {/* Mining Industry Solutions */}
                  <img
                    className="w-100"
                    src={`https://img.youtube.com/vi/xJpSrkzAsZU/maxresdefault.jpg`}
                    alt="Mining Industry Solutions"
                  />
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="xJpSrkzAsZU" // Mining Industry Solutions video ID
                    onClose={() => this.setState({ isOpen: false })}
                  />
                  <button
                    className="video-popup position-top-center theme-color"
                    onClick={this.openModal}
                  >
                    <span className="play-icon"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mt--30">
                <div className="thumb position-relative">
                  {/* Microgrid Solutions */}
                  <img
                    className="w-100"
                    src={`https://img.youtube.com/vi/q6IFC7W1bNg/maxresdefault.jpg`}
                    alt="Microgrid Solutions"
                  />
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="q6IFC7W1bNg" // Microgrid Solutions video ID
                    onClose={() => this.setState({ isOpen: false })}
                  />
                  <button
                    className="video-popup position-top-center theme-color"
                    onClick={this.openModal}
                  >
                    <span className="play-icon"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mt--30">
                <div className="thumb position-relative">
                  {/* Water and Wastewater Solutions */}
                  <img
                    className="w-100"
                    src={`https://img.youtube.com/vi/aB5CQ9UMLaI/maxresdefault.jpg`}
                    alt="Water and Wastewater Solutions"
                  />
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="aB5CQ9UMLaI" // Water and Wastewater Solutions video ID
                    onClose={() => this.setState({ isOpen: false })}
                  />
                  <button
                    className="video-popup position-top-center theme-color md-size"
                    onClick={this.openModal}
                  >
                    <span className="play-icon"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mt--30">
                <div className="thumb position-relative">
                  {/* Agriculture & Farming */}
                  <img
                    className="w-100"
                    src={`https://img.youtube.com/vi/TTtLdsvrcsI/maxresdefault.jpg`}
                    alt="Agriculture & Farming"
                  />
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="TTtLdsvrcsI" // Agriculture & Farming video ID
                    onClose={() => this.setState({ isOpen: false })}
                  />
                  <button
                    className="video-popup position-top-center theme-color md-size"
                    onClick={this.openModal}
                  >
                    <span className="play-icon"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mt--30">
                <div className="thumb position-relative">
                  {/* Additional Agriculture Video */}
                  <img
                    className="w-100"
                    src={`https://img.youtube.com/vi/1jh1qJu9_Zk/maxresdefault.jpg`}
                    alt="Agriculture & Farming"
                  />
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="1jh1qJu9_Zk" // Additional Agriculture video ID
                    onClose={() => this.setState({ isOpen: false })}
                  />
                  <button
                    className="video-popup position-top-center theme-color md-size"
                    onClick={this.openModal}
                  >
                    <span className="play-icon"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mt--30">
                <div className="thumb position-relative">
                  {/* Another Agriculture Video */}
                  <img
                    className="w-100"
                    src={`https://img.youtube.com/vi/a5-cbWmaV2c/maxresdefault.jpg`}
                    alt="Agriculture & Farming"
                  />
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="a5-cbWmaV2c" // Another Agriculture video ID
                    onClose={() => this.setState({ isOpen: false })}
                  />
                  <button
                    className="video-popup position-top-center theme-color md-size"
                    onClick={this.openModal}
                  >
                    <span className="play-icon"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mt--30">
                <div className="thumb position-relative">
                  {/* Video ID: YkN09Ui3eX8 */}
                  <img
                    className="w-100"
                    src={`https://img.youtube.com/vi/YkN09Ui3eX8/maxresdefault.jpg`}
                    alt="Additional Video"
                  />
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="YkN09Ui3eX8" // Video ID: YkN09Ui3eX8
                    onClose={() => this.setState({ isOpen: false })}
                  />
                  <button
                    className="video-popup position-top-center theme-color md-size"
                    onClick={this.openModal}
                  >
                    <span className="play-icon"></span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mt--30">
                <div className="thumb position-relative">
                  {/* Video ID: C_0n4v6Sacw */}
                  <img
                    className="w-100"
                    src={`https://img.youtube.com/vi/C_0n4v6Sacw/maxresdefault.jpg`}
                    alt="Additional Video"
                  />
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="C_0n4v6Sacw" // Video ID: C_0n4v6Sacw
                    onClose={() => this.setState({ isOpen: false })}
                  />
                  <button
                    className="video-popup position-top-center theme-color md-size"
                    onClick={this.openModal}
                  >
                    <span className="play-icon"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End Video Area  */}

        {/* Start Portfolio Area */}
        <div className="portfolio-area ptb--120 bg_image bg_image--3">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-left service-style--3 mb--15">
                    <span className="subtitle">
                      NovaPowerTech In-House Innovations
                    </span>
                    <h2 className="title">Our Project</h2>
                    <p className="description">
                      NovaPowerTech LLC, a Mongolian company specializing in
                      green and renewable solutions and system automation,
                      introduces the Arvis Portable Power Station (PPS). This
                      innovative, multifunctional, lightweight, and efficient
                      power station is designed to provide reliable and
                      sustainable energy solutions for Mongolia’s rural
                      communities and urban Ger districts. <br />
                      The Arvis PPS is engineered to meet the unique energy
                      needs of herders, farmers, and residents in challenging
                      environments, contributing to the nation’s broader goals
                      of climate resilience and sustainable development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <PortfolioList
                  styevariation="text-center mt--40"
                  column="col-lg-4 col-md-6 col-sm-6 col-12"
                  item="3"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start Footer Style  */}
        <FooterTwo />
        {/* End Footer Style  */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}

export default DigitalAgency;

const Portfolio_image = (
  <img src="/assets/1.jpg" alt="" width={320} height={320} />
);
const Portfolio_image2 = (
  <img src="/assets/2.jpg" alt="" width={320} height={320} />
);
const Portfolio_image3 = (
  <img src="/assets/3.jpg" alt="" width={320} height={320} />
);
const Portfolio_image4 = (
  <img src="/assets/4.jpg" alt="" width={320} height={320} />
);
const Portfolio_image5 = (
  <img src="/assets/5.jpg" alt="" width={320} height={320} />
);
const Portfolio_image6 = (
  <img src="/assets/6.jpg" alt="" width={320} height={320} />
);
const Portfolio_image7 = (
  <img src="/assets/7.jpg" alt="" width={320} height={320} />
);
const Portfolio_image9 = (
  <img src="/assets/9.jpg" alt="" width={320} height={320} />
);
const Portfolio_image10 = (
  <img src="/assets/10.jpg" alt="" width={320} height={320} />
);
const Portfolio_image11 = (
  <img src="/assets/11.jpg" alt="" width={320} height={320} />
);

const PortfolioList2 = [
  {
    image: Portfolio_image,
    title: "Smart Home Solutions",
    description:
      "Elevate your living experience with Himel’s Smart Home products, delivering advanced automation and energy efficiency to create the ultimate smart and eco-friendly home.",
  },
  {
    image: Portfolio_image2,
    title: "Low Voltage Distribution Boards",
    description:
      "Designed to handle the demands of modern electrical systems, Himel’s Low Voltage Distribution Boards ensure safe and efficient power distribution across residential, commercial, and industrial environments.",
  },
  {
    image: Portfolio_image3,
    title: "Solar Solutions",
    description:
      "Himel’s Solar Solutions empower you to harness the power of the sun, supporting Mongolia's green energy ambitions with products built to deliver long-lasting sustainability and energy independence.",
  },
  {
    image: Portfolio_image4,
    title: "Power Management",
    description:
      "Himel’s Power Management solutions are engineered to optimize energy use, reduce wastage, and enhance the efficiency of your electrical systems, ensuring that your operations are both cost-effective and environmentally responsible.",
  },
  {
    image: Portfolio_image5,
    title: "Motor Control & Protection Products",
    description:
      "Safeguard your industrial operations with Himel’s Motor Control and Protection products, designed to ensure the smooth and secure functioning of motors in the most demanding environments. These products help maintain operational efficiency, protect your investments, and prevent costly downtime.",
  },
  {
    image: Portfolio_image6,
    title: "Miniature Circuit Breakers (MCBs)",
    description:
      "Himel's MCBs provide superior protection against electrical overloads and short circuits, ensuring the safety of your electrical installations, whether in homes or commercial spaces.",
  },
  {
    title: "Residual Current Devices (RCDs)",
    description:
      "Protect your loved ones and colleagues from electric shocks with Himel’s RCDs—essential for the safety of modern smart homes and green buildings.",
  },
  {
    image: Portfolio_image7,
    title: "Industrial Enclosures",
    description:
      "Built tough for industrial applications, Himel’s Industrial Enclosures offer unparalleled protection for your electrical equipment, enhancing safety and operational efficiency.",
  },
];
