import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Home/Header/Header";
import camera1 from "../../Images/cameras/1.jpg";
import camera2 from "../../Images/cameras/2.jpg";
import camera3 from "../../Images/cameras/3.jpg";
import camera4 from "../../Images/cameras/4.jpg";
import camera5 from "../../Images/cameras/5.jpg";
import camera6 from "../../Images/cameras/6.jpg";

import CameraDetails from "./CameraDetails";

const cameraDatas = [
  {
    id: 1,
    img: camera1,
    price: 120,
    name: "Canon Eos 4000D 18MP 2.7inch Display With 18-55mm Lens Dslr Camera",
    chip: "Powerful Chipset, Great Performance",
    battery: "Long-lasting Battery Life",
    wifi: "yes",
  },
  {
    id: 2,
    img: camera2,
    price: 120,
    name: "Canon Eos 4000D 18MP 2.7inch Display With 18-55mm Lens Dslr Camera",
    chip: "Powerful Chipset, Great Performance",
    battery: "Long-lasting Battery Life",
    wifi: "yes",
  },
  {
    id: 3,
    img: camera3,
    price: 120,
    name: "Canon Eos 4000D 18MP 2.7inch Display With 18-55mm Lens Dslr Camera",
    chip: "Powerful Chipset, Great Performance",
    battery: "Long-lasting Battery Life",
    wifi: "yes",
  },
  {
    id: 4,
    img: camera4,
    price: 120,
    name: "Canon Eos 4000D 18MP 2.7inch Display With 18-55mm Lens Dslr Camera",
    chip: "Powerful Chipset, Great Performance",
    battery: "Long-lasting Battery Life",
    wifi: "yes",
  },
  {
    id: 5,
    img: camera5,
    price: 120,
    name: "Canon Eos 4000D 18MP 2.7inch Display With 18-55mm Lens Dslr Camera",
    chip: "Powerful Chipset, Great Performance",
    battery: "Long-lasting Battery Life",
    wifi: "yes",
  },
  {
    id: 6,
    img: camera6,
    price: 120,
    name: "Canon Eos 4000D 18MP 2.7inch Display With 18-55mm Lens Dslr Camera",
    chip: "Powerful Chipset, Great Performance",
    battery: "Long-lasting Battery Life",
    wifi: "yes",
  },
];

const Cameras = () => {
  return (
    <>
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto ">
          <div class="flex flex-wrap m-4 ">
            {cameraDatas.map((cameraData) => (
              <CameraDetails
                cameraData={cameraData}
                key={cameraData.id}
              ></CameraDetails>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cameras;
