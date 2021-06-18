import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Home/Header/Header";
import laptop1 from "../../Images/laptops/1.jpg";
import laptop2 from "../../Images/laptops/2.jpg";
import laptop3 from "../../Images/laptops/3.jpg";
import laptop4 from "../../Images/laptops/4.jpg";
import laptop5 from "../../Images/laptops/5.jpg";
import laptop6 from "../../Images/laptops/6.jpg";
import LaptopDetails from "./LaptopDetails";

const laptopDatas = [
  {
    id: 1,
    img: laptop1,
    price: 400,
    name: "Asus Vivobook X515MA Celeron N4020 15.6inch FHD Laptop",
    core: "Intel Celeron Processor N4020",
    ram: "4GB DDR4 RAM",
    hdd: "1TB HDD",
  },
  {
    id: 2,
    img: laptop2,
    price: 400,
    name: "Asus Vivobook X515MA Celeron N4020 15.6inch FHD Laptop",
    core: "Intel Celeron Processor N4020 ",
    ram: "4GB DDR4 RAM",
    hdd: "1TB HDD",
  },
  {
    id: 3,
    img: laptop3,
    price: 400,
    name: "Asus Vivobook X515MA Celeron N4020 15.6inch FHD Laptop",
    core: "Intel Celeron Processor N4020 ",
    ram: "4GB DDR4 RAM",
    hdd: "1TB HDD",
  },
  {
    id: 4,
    img: laptop4,
    price: 400,
    name: "Asus Vivobook X515MA Celeron N4020 15.6inch FHD Laptop",
    core: "Intel Celeron Processor N4020 ",
    ram: "4GB DDR4 RAM",
    hdd: "1TB HDD",
  },
  {
    id: 5,
    img: laptop5,
    price: 400,
    name: "Asus Vivobook X515MA Celeron N4020 15.6inch FHD Laptop",
    core: "Intel Celeron Processor N4020",
    ram: "4GB DDR4 RAM",
    hdd: "1TB HDD",
  },
  {
    id: 6,
    img: laptop6,
    price: 400,
    name: "Asus Vivobook X515MA Celeron N4020 15.6inch FHD Laptop",
    core: "Intel Celeron Processor N4020",
    ram: "4GB DDR4 RAM",
    hdd: "1TB HDD",
  },
];

const Laptops = () => {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap -m-4 ">
            {laptopDatas.map((laptopData) => (
              <LaptopDetails
                laptopData={laptopData}
                key={laptopData.id}
              ></LaptopDetails>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Laptops;
