import React from "react";

function Blurbg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      opacity="0.75"
      viewBox="0 0 800 800"
    >
      <defs>
        <filter
          id="bbblurry-filter"
          width="400%"
          height="400%"
          x="-100%"
          y="-100%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feGaussianBlur
            x="0%"
            y="0%"
            in="SourceGraphic"
            result="blur"
            stdDeviation="130"
          ></feGaussianBlur>
        </filter>
      </defs>
      <g filter="url(#bbblurry-filter)">
        <ellipse
          cx="633.377"
          cy="274.806"
          fill="hsla(0, 100%, 50%, 1.00)"
          rx="27.5"
          ry="133"
        ></ellipse>
        <ellipse
          cx="290.694"
          cy="156.313"
          fill="hsla(0, 0%, 0%, 1.00)"
          rx="27.5"
          ry="133"
        ></ellipse>
      </g>
    </svg>
  );
}

export default Blurbg;
