import React from "react";

const FooterDetails = ({ laptopBrand }) => {
  return (
    <>
      <li>
        <a className="text-gray-600 hover:text-gray-800">{laptopBrand.name}</a>
      </li>
    </>
  );
};

export default FooterDetails;
