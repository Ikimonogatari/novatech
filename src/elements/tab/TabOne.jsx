import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FiCheck } from "react-icons/fi";

class TabsOne extends Component {
  render() {
    let tab1 = "About us",
      tab2 = "Our Mission",
      tab3 = "Our Vision",
      tab4 = "Our Partnership";
    const { tabStyle } = this.props;
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
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <p>
                        Nova Power Tech LLC is a Mongolian company specializing
                        in green and renewable solutions and system automation.
                        We are not just an electrical company—we are a team of
                        innovators, designers, and startup enthusiasts
                        passionate about creating groundbreaking tech solutions.
                        Our expertise spans engineering and IT programming, and
                        we are dedicated to revolutionizing the fields of
                        climate tech, agriculture, and green renewable energy.
                      </p>
                      <p>
                        We are committed to delivering reliable, efficient, and
                        safe solutions for residential, commercial, and
                        industrial projects, all while driving positive
                        environmental change.
                      </p>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <p>
                        At Nova Power Tech LLC, our mission is to bring
                        innovative, tangible green and smart solutions that make
                        a real impact on the climate. We are dedicated to
                        developing and implementing advanced technologies in
                        climate tech, renewable energy, and sustainable
                        agriculture, with the goal of creating a cleaner, more
                        resilient world.
                      </p>
                      <p>
                        Through our commitment to engineering excellence and
                        environmental stewardship, we strive to empower
                        communities, businesses, and industries to embrace
                        sustainable practices that contribute to a healthier
                        planet for future generations.
                      </p>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <p>
                        As Mongolia continues to advance towards a smart,
                        sustainable and energy-efficient future, Schneider
                        Electric, brought to you by NovaPowerTech, is committed
                        to playing a pivotal role in this transformation. With a
                        focus on delivering innovative solutions tailored to the
                        needs of the Mongolian market, we invite you to explore
                        how Schneider Electric can power your future.
                      </p>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <p>
                        <b>
                          NovaPowerTech Presents Schneider Electric: Your
                          Partner in Smart, Sustainable Living and Industrial
                          Efficiency
                        </b>
                      </p>
                      <p>
                        Schneider Electric is a big name in energy management
                        and automation, known for its focus on sustainability
                        and innovation. This partnership allows us to offer a
                        range of smart and green solutions that boost
                        efficiency, sustainability, and connectivity. Here’s a
                        quick rundown:
                      </p>
                      <ul className="list-style--1">
                        {namesItemOne.map((n, index) => {
                          return (
                            <li key={index}>
                              <FiCheck /> <b>{n.title}</b> <br></br>{" "}
                              <span>Perks: {n.perks}</span>
                              <br></br>
                              <span>Example: {n.example}</span>
                            </li>
                          );
                        })}
                      </ul>
                      <p>
                        <b>
                          NovaPowerTech Presents Himel: an award-winning
                          manufacturer and supplier of a wide range of
                          electrical products.{" "}
                        </b>
                      </p>
                      <p>
                        At NovaPowerTech, we are thrilled to introduce Himel, a
                        globally recognized leader in electrical solutions, to
                        the Mongolian market. As Mongolia embarks on its journey
                        toward a greener, smarter, and more sustainable future,
                        Himel is here to support with innovative products that
                        blend efficiency with affordability.
                      </p>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}
export default TabsOne;
