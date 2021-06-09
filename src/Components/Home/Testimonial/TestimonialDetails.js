import React from "react";

const TestimonialDetails = (props) => {
  const { name, img, comment } = props.user;
  return (
    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
      <div className="h-full text-center">
        <img
          alt="testimonial"
          className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src={img}
        />
        <p className="leading-relaxed">{comment}</p>
        <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4"></span>
        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default TestimonialDetails;
