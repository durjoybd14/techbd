import React from "react";
import ProductDetails from "./ProductDetails";
import laptop1 from "../../../Images/laptops/1.jpg";
import laptop2 from "../../../Images/laptops/2.jpg";
import laptop3 from "../../../Images/laptops/3.jpg";
import tablet1 from "../../../Images/tablets/1.jpg";
import tablet2 from "../../../Images/tablets/2.jpg";
import tablet3 from "../../../Images/tablets/3.jpg";
import television4 from "../../../Images/televisions/4.jpg";
import television5 from "../../../Images/televisions/5.jpg";
import television6 from "../../../Images/televisions/6.jpg";
import camera1 from "../../../Images/cameras/1.jpg";
import camera2 from "../../../Images/cameras/2.jpg";
import camera3 from "../../../Images/cameras/3.jpg";

const datas = [
  {
    id: 1,
    img: laptop1,
    price: 400,
    name: "Asus Vivobook X515MA Celeron N4020 15.6inch FHD Laptop",
    feature1: "Intel Celeron Processor N4020",
    feature2: "4GB DDR4 RAM",
    feature3: "1TB HDD",
  },
  {
    id: 2,
    img: laptop2,
    price: 400,
    name: "Asus Vivobook X515MA Celeron N4020 15.6inch FHD Laptop",
    feature1: "Intel Celeron Processor N4020",
    feature2: "4GB DDR4 RAM",
    feature3: "1TB HDD",
  },
  {
    id: 3,
    img: laptop3,
    price: 400,
    name: "Asus Vivobook X515MA Celeron N4020 15.6inch FHD Laptop",
    feature1: "Intel Celeron Processor N4020",
    feature2: "4GB DDR4 RAM",
    feature3: "1TB HDD",
  },
  {
    id: 4,
    img: tablet1,
    price: 150,
    name: "Huawei MediaPad T8, 2 GB Ram, 16 GB Storage, 4G 8-inch Tablet",
    feature1: "Powerful Chipset, Great Performance",
    feature2: "Long-lasting Battery Life",
    feature3: "Android 7.0 (Nougat); EMUI 5.1",
  },
  {
    id: 5,
    img: tablet2,
    price: 150,
    name: "Huawei MediaPad T8, 2 GB Ram, 16 GB Storage, 4G 8-inch Tablet",
    feature1: "Powerful Chipset, Great Performance",
    feature2: "Long-lasting Battery Life",
    feature3: "Android 7.0 (Nougat); EMUI 5.1",
  },
  {
    id: 6,
    img: tablet3,
    price: 150,
    name: "Huawei MediaPad T8, 2 GB Ram, 16 GB Storage, 4G 8-inch Tablet",
    feature1: "Powerful Chipset, Great Performance",
    feature2: "Long-lasting Battery Life",
    feature3: "Android 7.0 (Nougat); EMUI 5.1",
  },
  {
    id: 7,
    img: television4,
    price: 200,
    name: "SONY Bravia KDL-32R300E 32inch HD Non Smart LED TV",
    feature1: "Resolution: 1366 x 768 (HD)",
    feature2: "Display Type: LCD",
    feature3: "USB, HDMI, HDCP, RF",
  },
  {
    id: 8,
    img: television5,
    price: 200,
    name: "SONY Bravia KDL-32R300E 32inch HD Non Smart LED TV",
    feature1: "Resolution: 1366 x 768 (HD)",
    feature2: "Display Type: LCD",
    feature3: "USB, HDMI, HDCP, RF",
  },
  {
    id: 9,
    img: television6,
    price: 200,
    name: "SONY Bravia KDL-32R300E 32inch HD Non Smart LED TV",
    feature1: "Resolution: 1366 x 768 (HD)",
    feature2: "Display Type: LCD",
    feature3: "USB, HDMI, HDCP, RF",
  },
  {
    id: 10,
    img: camera1,
    price: 120,
    name: "Canon Eos 4000D 18MP 2.7inch Display With 18-55mm Lens Dslr Camera",
    feature1: "Powerful Chipset, Great Performance",
    feature2: "Long-lasting Battery Life",
    feature3: "yes",
  },
  {
    id: 11,
    img: camera2,
    price: 120,
    name: "Canon Eos 4000D 18MP 2.7inch Display With 18-55mm Lens Dslr Camera",
    feature1: "Powerful Chipset, Great Performance",
    feature2: "Long-lasting Battery Life",
    feature3: "yes",
  },
  {
    id: 12,
    img: camera3,
    price: 120,
    name: "Canon Eos 4000D 18MP 2.7inch Display With 18-55mm Lens Dslr Camera",
    feature1: "Powerful Chipset, Great Performance",
    feature2: "Long-lasting Battery Life",
    feature3: "yes",
  },
];

const Products = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div class="text-center mb-15">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Our Brand New Products
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            voluptatibus facere nemo delectus autem nobis rem architecto
            distinctio perferendis ipsam voluptate qui.
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {datas.map((data) => (
            <ProductDetails data={data} key={data.id}></ProductDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
