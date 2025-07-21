import React from "react";
import "./BrandLogoGrid.css";

import Star2Img from "../../../assets/images/v1/star2.png";

import Client1Img from "../../../assets/images/client/colour logo-01.png";
import Client2Img from "../../../assets/images/client/colour logo-02.png";
import Client3Img from "../../../assets/images/client/colour logo-03.png";
import Client4Img from "../../../assets/images/client/colour logo-04.png";
import Client5Img from "../../../assets/images/client/colour logo-05.png";
import Client6Img from "../../../assets/images/client/colour logo-06.png";
import Client7Img from "../../../assets/images/client/colour logo-07.png";
import Client8Img from "../../../assets/images/client/8.png";
import Client9Img from "../../../assets/images/client/9.png";
import Client10Img from "../../../assets/images/client/10.png";
import Client11Img from "../../../assets/images/client/11.png";
import Client12Img from "../../../assets/images/client/12.png";
import Client13Img from "../../../assets/images/client/13.png";
import Client14Img from "../../../assets/images/client/14.png";
import Client15Img from "../../../assets/images/client/15.png";
import Client16Img from "../../../assets/images/client/16.png";
import Client17Img from "../../../assets/images/client/17.png";
import Client18Img from "../../../assets/images/client/18.png";
import Client20Img from "../../../assets/images/client/20.png";
import Client21Img from "../../../assets/images/client/21.png";
import Client22Img from "../../../assets/images/client/22.png";
import Client24Img from "../../../assets/images/client/24.png";
import Client25Img from "../../../assets/images/client/25.png";
import Client26Img from "../../../assets/images/client/26.png";
import Client27Img from "../../../assets/images/client/27.png";
import Client23Img from "../../../assets/images/client/wb.png";
import Client19Img from "../../../assets/images/client/29.png";


const sliderData = [
  { id: crypto.randomUUID(), img: Client16Img },
  { id: crypto.randomUUID(), img: Client18Img },
  { id: crypto.randomUUID(), img: Client4Img },
  { id: crypto.randomUUID(), img: Client1Img },
  { id: crypto.randomUUID(), img: Client12Img },
  { id: crypto.randomUUID(), img: Client6Img },
  { id: crypto.randomUUID(), img: Client14Img },
  { id: crypto.randomUUID(), img: Client11Img },
  { id: crypto.randomUUID(), img: Client2Img },
  { id: crypto.randomUUID(), img: Client3Img },
  { id: crypto.randomUUID(), img: Client7Img },
  { id: crypto.randomUUID(), img: Client5Img },
  { id: crypto.randomUUID(), img: Client10Img },
  { id: crypto.randomUUID(), img: Client13Img },
  { id: crypto.randomUUID(), img: Client17Img },
  { id: crypto.randomUUID(), img: Client8Img },
  { id: crypto.randomUUID(), img: Client15Img },
  { id: crypto.randomUUID(), img: Client9Img },
  { id: crypto.randomUUID(), img: Client27Img },
  { id: crypto.randomUUID(), img: Client24Img },
  { id: crypto.randomUUID(), img: Client21Img },
  { id: crypto.randomUUID(), img: Client20Img },
  { id: crypto.randomUUID(), img: Client23Img },
  { id: crypto.randomUUID(), img: Client25Img },
  { id: crypto.randomUUID(), img: Client19Img },
  { id: crypto.randomUUID(), img: Client22Img },
  { id: crypto.randomUUID(), img: Client26Img },
]


function BrandLogoGrid() {
  return (
    <div className="brandlogo-section">
      {/* <div className="brandlogo-title">
        <h3>Our Clients</h3>
      </div> */}
      <div className="aximo-section-title center">
        <h2>
          Our Clients
          <span className="aximo-title-animation">
            {/* creative people */}
            <span className="aximo-title-icon">
              <img src={Star2Img} alt="Star2Img" loading="lazy" />
            </span>
          </span>
        </h2>
      </div>
      <div className="brandlogo-grid">
        {sliderData.map((item) => (
          <div className="brandlogo-item" key={item.id}>
            <img src={item.img} alt="brand logo" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandLogoGrid;
