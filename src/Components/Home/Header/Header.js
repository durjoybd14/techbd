import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-indigo-500 mb-4 md:mb-0">
          <Link to="/home" className="ml-3 text-xl">
            TechBD
          </Link>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-gray-400 justify-center">
          <Link to="/cameras" className="mr-8 hover:text-indigo-500">
            Cameras
          </Link>
          <Link to="/laptops" className="mr-8 hover:text-indigo-500">
            Laptops
          </Link>
          <Link to="/tablets" className="mr-8 hover:text-indigo-500">
            Tablets
          </Link>
          <Link to="/televisions" className="mr-8 hover:text-indigo-500">
            Televisions
          </Link>
        </nav>
        <button className="inline-flex items-center bg-indigo-500 focus:outline-none hover:bg-indigo-600 border-0 py-1 px-3  rounded text-white mt-4 md:mt-0">
          LogIn
        </button>
      </div>
    </header>
  );
};

export default Header;
