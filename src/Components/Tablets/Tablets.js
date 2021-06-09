import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Home/Header/Header";
import tablet1 from "../../Images/tablets/1.jpg";
import tablet2 from "../../Images/tablets/2.jpg";
import tablet3 from "../../Images/tablets/3.jpg";
import tablet4 from "../../Images/tablets/4.jpg";
import tablet5 from "../../Images/tablets/5.jpg";
import tablet6 from "../../Images/tablets/6.jpg";

import TabletDetails from "./TabletDetails";

const tabletDatas = [
  {
    id: 1,
    img: tablet1,
    price: 150,
    name: "Huawei MediaPad T8, 2 GB Ram, 16 GB Storage, 4G 8-inch Tablet",
    chip: "Powerful Chipset, Great Performance",
    battery: "Long-lasting Battery Life",
    os: "Android 7.0 (Nougat); EMUI 5.1",
  },
  {
    id: 2,
    img: tablet2,
    price: 150,
    name: "Huawei MediaPad T8, 2 GB Ram, 16 GB Storage, 4G 8-inch Tablet",
    chip: "Powerful Chipset, Great Performance",
    battery: "Long-lasting Battery Life",
    os: "Android 7.0 (Nougat); EMUI 5.1",
  },
  {
    id: 3,
    img: tablet3,
    price: 150,
    name: "Huawei MediaPad T8, 2 GB Ram, 16 GB Storage, 4G 8-inch Tablet",
    chip: "Powerful Chipset, Great Performance",
    battery: "Long-lasting Battery Life",
    os: "Android 7.0 (Nougat); EMUI 5.1",
  },
  {
    id: 4,
    img: tablet4,
    price: 150,
    name: "Huawei MediaPad T8, 2 GB Ram, 16 GB Storage, 4G 8-inch Tablet",
    chip: "Powerful Chipset, Great Performance",
    battery: "Long-lasting Battery Life",
    os: "Android 7.0 (Nougat); EMUI 5.1",
  },
  {
    id: 5,
    img: tablet5,
    price: 150,
    name: "Huawei MediaPad T8, 2 GB Ram, 16 GB Storage, 4G 8-inch Tablet",
    chip: "Powerful Chipset, Great Performance",
    battery: "Long-lasting Battery Life",
    os: "Android 7.0 (Nougat); EMUI 5.1",
  },
  {
    id: 6,
    img: tablet6,
    price: 150,
    name: "Huawei MediaPad T8, 2 GB Ram, 16 GB Storage, 4G 8-inch Tablet",
    chip: "Powerful Chipset, Great Performance",
    battery: "Long-lasting Battery Life",
    os: "Android 7.0 (Nougat); EMUI 5.1",
  },
];

const Tablets = () => {
  return (
    <>
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto ">
          <div class="flex flex-wrap m-4 ">
            {tabletDatas.map((tabletData) => (
              <TabletDetails
                tabletData={tabletData}
                key={tabletData.id}
              ></TabletDetails>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Tablets;
