import React from "react";
import { Link } from "react-router-dom";

function link({ link, text, css,color }) {
  return (
    <Link 
      className={`${color} hover:bg-blue-300 transition-all duration-300  text-white px-3  py-3  rounded-lg ${css}`}
      to={link}
    >
      {text}
    </Link>
  );
}

export default link;