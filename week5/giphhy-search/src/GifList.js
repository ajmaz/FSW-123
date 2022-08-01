import React from "react";
import Gif from "./Gif";

const GifList = (props) => {
  const results = props.data;
  let gifs;
    gifs = results.map((gif) => (
      <Gif imgSrc={gif.images.fixed_height.url} key={gif.id} />
    ));
      

  return <div>{gifs}</div>;
};

export default GifList;
