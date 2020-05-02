import React from "react";
import "./image.css";

const Image = (props) => (
  <img className="image" src={props.children} alt="Postimage" />
);

export default Image;
