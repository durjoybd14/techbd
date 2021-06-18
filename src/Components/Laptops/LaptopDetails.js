import React from "react";
import { TiTick } from "react-icons/ti";

const LaptopDetails = (props) => {
  const { img, price, name, core, ram, hdd } = props.laptopData;
  return (
    <div className="lg:w-1/3 md:w-1/2 w-full my-10">
      <div className="h-full py-4 px-8 bg-white shadow-lg rounded-lg border text-center mx-3">
        <img alt="ecommerce" style={{ margin: "auto" }} src={img} />
        <div className="mt-5">
          <h1 className="text-gray-600  mb-5">{name}</h1>

          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-3 flex  items-center">
            <TiTick style={{ fontSize: "20px" }} /> {core}
          </h3>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-3 flex  items-center">
            <TiTick style={{ fontSize: "20px" }} /> {ram}
          </h3>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-3 flex  items-center">
            <TiTick style={{ fontSize: "20px" }} /> {hdd}
          </h3>

          <div className="flex items-center justify-between p-5">
            <button className="inline-flex items-center bg-indigo-500 focus:outline-none hover:bg-indigo-600 border-0 py-1 px-3  rounded text-white mt-4 md:mt-0">
              $ {price}
            </button>
            <button className="inline-flex items-center bg-indigo-500 focus:outline-none hover:bg-indigo-600 border-0 py-1 px-3  rounded text-white mt-4 md:mt-0">
              Buy Now
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopDetails;
