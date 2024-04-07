import React from "react";

function Footerbg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
      <path fill="#fff" d="M0 0H1600V900H0z"></path>
      <defs>
        <linearGradient id="a" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0" stopColor="#811331"></stop>
          <stop offset="1" stopColor="#811331"></stop>
        </linearGradient>
        <linearGradient id="b" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#811331"></stop>
          <stop offset="1" stopColor="#811331"></stop>
        </linearGradient>
      </defs>
      <g fill="#FFF" fillOpacity="0" strokeMiterlimit="10">
        <g stroke="url(#a)" strokeWidth="3.3">
          <path d="M1409 581l41.35-70 39.65 70z"></path>
          <circle cx="500" cy="100" r="40" strokeWidth="1.1"></circle>
          <path d="M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87s41.86 18.75 41.86 41.87z"></path>
        </g>
        <g stroke="url(#b)">
          <path d="M149.8 345.2l-31.4 44.6 31.4 44.6 31.4-44.6z"></path>
          <path strokeWidth="2.2" d="M1039 709H1139V809H1039z"></path>
          <path d="M1426.8 132.4l-21.1 36.4h-42l-21-36.4 21-36.4h42z"></path>
        </g>
      </g>
    </svg>
  );
}

export default Footerbg;
