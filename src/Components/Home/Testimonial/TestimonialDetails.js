import React from "react";

const TestimonialDetails = (props) => {
  const { name, img, comment } = props.user;
  return (
    <div className="lg:w-1/3 md:w-1/2 my-10">
      <div className="h-full py-4 px-8 bg-white shadow-lg rounded-lg mx-2 border">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src={img}
            alt=""
          />
        </div>
        <div>
          <p className="mt-2 text-gray-600">{comment}</p>
        </div>
        <div className="flex justify-end mt-4">
          <a href="#" className="text-xl font-medium text-indigo-500">
            {name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;
