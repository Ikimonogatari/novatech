import React, { Component } from "react";
import { FiSend, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

class AboutThree extends Component {
  render() {
    let title = "Why Choose Us",
      text1 =
        "Schneider Electric is a big name in energy management and automation, known for its focus on sustainability and innovation. This partnership allows us to offer a range of smart and green solutions that boost efficiency, sustainability, and connectivity. Here’s a quick rundown:",
      text2 =
        "At NovaPowerTech, we are thrilled to introduce Himel, a globally recognized leader in electrical solutions, to the Mongolian market. As Mongolia embarks on its journey toward a greener, smarter, and more sustainable future, Himel is here to support with innovative products that blend efficiency with affordability.",
      description2 =
        "NovaPowerTech Presents Himel: an award-winning manufacturer and supplier of a wide range of electrical products.",
      description1 =
        "NovaPowerTech Presents Schneider Electric: Your Partner in Smart, Sustainable Living and Industrial Efficiency";
    var namesItemOne = [
      {
        title: "Buildings: Smart Building Solutions",
        perks:
          "Cuts down on energy use, makes spaces more comfortable, and enhances security.",
        example:
          "Imagine reducing energy consumption by up to 30% with smart HVAC and lighting controls, while real-time monitoring keeps everything running smoothly.",
      },
      {
        title: "Data Centers: Efficient Management",
        perks:
          "Saves on energy, reduces cooling costs, and ensures everything stays reliable.",
        example:
          "Predictive analytics and remote monitoring can slash energy use by 20% and prevent downtime.",
      },
      {
        title: "Industry: Industrial Automation",
        perks: "Boosts productivity, cuts downtime, and improves safety.",
        example:
          "Automated systems and predictive maintenance can reduce unplanned downtime by 10-20%, keeping operations efficient.",
      },
      {
        title: "Infrastructure: Smart Grid Solutions",
        perks:
          "Makes the grid more reliable, integrates renewable energy, and cuts energy losses.",
        example:
          "Real-time grid management helps smoothly integrate renewable energy, improving grid efficiency by up to 15%.",
      },
      {
        title: "Residential: Home Energy Management",
        perks: "Enhances energy efficiency, comfort, and lowers utility bills.",
        example:
          "Smart home systems like connected thermostats and lighting controls can cut energy usage by 10-15%, giving homeowners more control.",
      },
    ];
    return (
      <React.Fragment>
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="about-inner inner">
                  <div className="section-title">
                    <span className="subtitle">Our Value</span>
                    <h2 className="title">{title}</h2>
                    <p>
                      <b>
                        NovaPowerTech Presents Schneider Electric: Your Partner
                        in Smart, Sustainable Living and Industrial Efficiency
                      </b>
                      <br />
                      Schneider Electric is a big name in energy management and
                      automation, known for its focus on sustainability and
                      innovation. This partnership allows us to offer a range of
                      smart and green solutions that boost efficiency,
                      sustainability, and connectivity. Here’s a quick rundown:
                    </p>

                    <ul className="list-style--1 pb--20">
                      {namesItemOne.map((n, index) => {
                        return (
                          <li key={index}>
                            <FiCheck /> <b>{n.title}</b> <br></br>{" "}
                            <div className="pl--25">
                              <span>Perks: {n.perks}</span>
                              <br></br>
                              <span>Example: {n.example}</span>
                              <br></br>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <p>
                      <b>
                        NovaPowerTech Presents Himel: an award-winning
                        manufacturer and supplier of a wide range of electrical
                        products.{" "}
                      </b>
                      <br />
                      At NovaPowerTech, we are thrilled to introduce Himel, a
                      globally recognized leader in electrical solutions, to the
                      Mongolian market. As Mongolia embarks on its journey
                      toward a greener, smarter, and more sustainable future,
                      Himel is here to support with innovative products that
                      blend efficiency with affordability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="/assets/images/about/about-1.png"
                    alt="About Images"
                  />
                  <img
                    className="w-100 ml--50 mt--30"
                    src="/assets/images/about/about-1.png"
                    alt="About Images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default AboutThree;
