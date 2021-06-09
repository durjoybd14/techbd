import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Home/Header/Header";
import television1 from "../../Images/televisions/1.jpg";
import television2 from "../../Images/televisions/2.jpg";
import television3 from "../../Images/televisions/3.jpg";
import television4 from "../../Images/televisions/4.jpg";
import television5 from "../../Images/televisions/5.jpg";
import television6 from "../../Images/televisions/6.jpg";

import TelevisionDetails from "./TelevisionDetails";

const televisionDatas = [
  {
    id: 1,
    img: television1,
    price: 200,
    name: "SONY Bravia KDL-32R300E 32inch HD Non Smart LED TV",
    screen: "Resolution: 1366 x 768 (HD)",
    display: "Display Type: LCD",
    port: "USB, HDMI, HDCP, RF",
  },
  {
    id: 2,
    img: television2,
    price: 200,
    name: "SONY Bravia KDL-32R300E 32inch HD Non Smart LED TV",
    screen: "Resolution: 1366 x 768 (HD)",
    display: "Display Type: LCD",
    port: "USB, HDMI, HDCP, RF",
  },
  {
    id: 3,
    img: television3,
    price: 200,
    name: "SONY Bravia KDL-32R300E 32inch HD Non Smart LED TV",
    screen: "Resolution: 1366 x 768 (HD)",
    display: "Display Type: LCD",
    port: "USB, HDMI, HDCP, RF",
  },
  {
    id: 4,
    img: television4,
    price: 200,
    name: "SONY Bravia KDL-32R300E 32inch HD Non Smart LED TV",
    screen: "Resolution: 1366 x 768 (HD)",
    display: "Display Type: LCD",
    port: "USB, HDMI, HDCP, RF",
  },
  {
    id: 5,
    img: television5,
    price: 200,
    name: "SONY Bravia KDL-32R300E 32inch HD Non Smart LED TV",
    screen: "Resolution: 1366 x 768 (HD)",
    display: "Display Type: LCD",
    port: "USB, HDMI, HDCP, RF",
  },
  {
    id: 6,
    img: television6,
    price: 200,
    name: "SONY Bravia KDL-32R300E 32inch HD Non Smart LED TV",
    screen: "Resolution: 1366 x 768 (HD)",
    display: "Display Type: LCD",
    port: "USB, HDMI, HDCP, RF",
  },
];

const Televisions = () => {
  return (
    <>
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto ">
          <div class="flex flex-wrap m-4 ">
            {televisionDatas.map((televisionData) => (
              <TelevisionDetails
                televisionData={televisionData}
                key={televisionData.id}
              ></TelevisionDetails>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Televisions;
