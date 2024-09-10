import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FiCheck } from "react-icons/fi";

class TabsOne extends Component {
  render() {
    let tab1 = "About Us",
      tab2 = "Our Mission",
      tab3 = "Our Vision",
      tab4 = "Why Choose Us";
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
                      <ul className="list-style--1">
                        {/* {namesItemOne.map((n, index) => {
                          return (
                            <li key={index}>
                              <FiCheck /> <b>{n.title}</b> <br></br>{" "}
                              <span>Perks: {n.perks}</span>
                              <br></br>
                              <span>Example: {n.example}</span>
                            </li>
                          );
                        })} */}
                        <li>
                          {" "}
                          <FiCheck /> A team of internationally certified
                          engineers and IT programmers, blending expertise with
                          creativity to push the boundaries of innovation.
                        </li>

                        <li>
                          {" "}
                          <FiCheck /> Partnerships with the world’s leading
                          energy product suppliers and a local network of 100+
                          solution providers, fostering collaboration and the
                          exchange of ideas.
                        </li>
                        <li>
                          {" "}
                          <FiCheck /> Experience the future of energy at our
                          Green Mongolia Hub – energy testing center—a sandbox
                          for innovative ideas and sustainable practices.
                        </li>
                      </ul>
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
