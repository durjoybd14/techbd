import React from "react";
import userPic from "../../../Images/user.jpg";
import TestimonialDetails from "./TestimonialDetails";
const users = [
  {
    id: 1,
    name: "Naimur",
    img: userPic,
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem sapiente porro saepe, praesentium ratione suscipit? Et praesentium id dolorem soluta.",
  },
  {
    id: 2,
    name: "Shoshe",
    img: userPic,
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem sapiente porro saepe, praesentium ratione suscipit? Et praesentium id dolorem soluta.",
  },
  {
    id: 3,
    name: "Durjoy",
    img: userPic,
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem sapiente porro saepe, praesentium ratione suscipit? Et praesentium id dolorem soluta.",
  },
];

const Testimonial = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 text-center mb-14">
          What's Peoples tell About Us
        </h1>
        <div className="flex flex-wrap -m-4">
          {users.map((user) => (
            <TestimonialDetails user={user} key={user.id}></TestimonialDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
