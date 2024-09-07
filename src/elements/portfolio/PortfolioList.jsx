import React, { Component } from "react";
import { Link } from "react-router-dom";
const Portfolio_image = (
  <img src="/assets/9.jpg" alt="" width={360} height={311} />
);
const Portfolio_image2 = (
  <img src="/assets/10.jpg" alt="" width={360} height={311} />
);
const Portfolio_image3 = (
  <img src="/assets/11.jpg" alt="" width={360} height={311} />
);

const PortfolioListContent = [
  {
    image: Portfolio_image,

    description:
      "ARVIS PORTABLE POWER STATION (PPS) is an innovative solar power station that combines a battery for solar energy storage with an inverter that serves as a generator.  ",
  },
  {
    image: Portfolio_image2,

    description:
      "Multifunctional, lightweight, and efficient portable power station.",
    description1: "Combines solar storage with 1kW inverter",
  },
  {
    image: Portfolio_image3,
    description2:
      "Connects with solar systems, agricultural devices, milking machines, household appliances, and water pumps.",
    description3: "Reduces labor intensity for herders and farmers",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`im_portfolio ${styevariation}`}>
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
                  <div className="portfolio_hover text-left">
                    <p>{value.description}</p>
                    {value.description1 ? <p>{value.description1}</p> : <></>}
                    {value.description2 ? <p>{value.description2}</p> : <></>}
                    {value.description3 ? <p>{value.description3}</p> : <></>}
                  </div>
                </div>
              </div>
              <Link className="transparent_link"></Link>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
