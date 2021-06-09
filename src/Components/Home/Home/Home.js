import React from "react";
import Footer from "../../Footer/Footer";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Products from "../Products/Products";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Products />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
