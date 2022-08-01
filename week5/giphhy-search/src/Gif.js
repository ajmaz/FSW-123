import React from "react";

const Gif = ({ imgSrc }) => (
  <div>
    <img 
    style={{
      height:"250px",
      width: "400px",
      padding: "2rem"
    }}
    src={imgSrc} alt="" />
  </div>
);

export default Gif;