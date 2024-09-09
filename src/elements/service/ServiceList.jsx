import React, { Component } from "react";
import {
  FiCast,
  FiLayers,
  FiUsers,
  FiMonitor,
  FiSun,
  FiBatteryCharging,
  FiTool,
} from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiCast />,
    title: "Electrical Products",
    description:
      "Power project and retail supply, providing the backbone for innovative energy solutions.",
  },
  {
    icon: <FiLayers />,
    title: "Automation",
    description:
      "Cutting-edge technology for industrial, household, and office automation, making spaces smarter and more efficient.",
  },
  {
    icon: <FiBatteryCharging />,
    title: "Energy Storage Systems",
    description:
      "Advanced batteries and energy storage solutions to keep the power flowing.",
  },
  {
    icon: <FiSun />,
    title: "Smart Solutions",
    description:
      "Making solar systems smarter to deliver resilience, energy cost optimization and sustainability with Energy Management Software Platforms.",
  },
  {
    icon: <FiUsers />,
    title: "Design & Consulting",
    description:
      "Creative engineering plans, design solutions, and consulting services that bring visionary ideas to life.",
  },
  {
    icon: <FiMonitor />,
    title: "Professional Services",
    description:
      "Expert installation, routine inspection, and diagnostics to ensure optimal performance.",
  },
];

class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row service-main-wrapper">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <a href="/service-details">
                <div className="service service__style--2 text-left bg-gray">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;
