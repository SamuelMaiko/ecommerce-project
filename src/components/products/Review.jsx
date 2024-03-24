import React from "react";

const Review = ({ OnactiveSection }) => {
  return (
    <div className={`${OnactiveSection == 1 ? "" : "hidden"} w-full p-4`}>
      <div className="flex justify-between">
        <h1 className="font-heading font-bold text-sm">Review by Sarah L.</h1>
        {/* <p>Rating: 4/5</p> */}
      </div>
      <div className="rating">
        <input
          value="5"
          onChange={() => {}}
          name="rate"
          id="star5"
          type="radio"
        ></input>
        <label title="text" onChange={() => {}} htmlFor="star5"></label>
        <input value="4" name="rate" id="star4" type="radio"></input>
        <label title="text" onChange={() => {}} htmlFor="star4"></label>
        <input value="3" name="rate" id="star3" type="radio" checked=""></input>
        <label title="text" onChange={() => {}} htmlFor="star3"></label>
        <input value="2" name="rate" id="star2" type="radio"></input>
        <label title="text" onChange={() => {}} htmlFor="star2"></label>
        <input value="1" name="rate" id="star1" type="radio"></input>
        <label title="text" onChange={() => {}} htmlFor="star1"></label>
      </div>
      <p className="mt-4 pl-6 text-sm font-body">
        I absolutely love the quartzite I purchased! It&apos;s exactly what I
        was looking for to use in my DIY projects. The color is beautiful, and
        the quality is top-notch. Plus, it arrived quickly and well-packaged.
        Highly recommend!
      </p>
    </div>
  );
};

export default Review;
