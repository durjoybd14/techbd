import React from "react";
import banner from "../../../Images/banner.png";

const Banner = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={banner}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before all sold out
            <br className="hidden lg:inline-block" />
            get your own products...
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            illum sapiente alias aliquam cum totam mollitia deserunt repellat
            assumenda quae sint, ducimus possimus minus dolore, rerum facere
            quaerat sed corrupti?
          </p>
          <div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
