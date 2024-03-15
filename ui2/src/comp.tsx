import React from 'react';

const SheetWithIcons: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      {...props}
    >
      {/* Rectangular sheet with scribbles */}
      <rect x="5" y="5" width="90" height="90" fill="#fff" stroke="#000" strokeWidth="2" />

      {/* Lock icon */}
      <g transform="translate(75 75)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 10h-.5c-.83 0-1.5-.67-1.5-1.5V5c0-2.76 2.24-5 5-5s5 2.24 5 5v3.5c0 .83-.67 1.5-1.5 1.5H11v30h40V11h-4.5C45.67 11 45 10.33 45 9.5V5c0-4.41-3.59-8-8-8s-8 3.59-8 8v4.5c0 .83-.67 1.5-1.5 1.5H10V11H4v-.5C4 9.67 4.67 9 5.5 9H7v-.5C7 7.57 8.57 6 10.5 6H12V5c0-1.66 1.34-3 3-3s3 1.34 3 3v1h30V5c0-1.66 1.34-3 3-3s3 1.34 3 3v1h.5c.83 0 1.5.67 1.5 1.5V10H4v30h60V10H4z"
          fill="#000"
        />
      </g>

      {/* Shield icon */}
      <g transform="translate(10 10)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.617 3.633a3 3 0 0 1 4.772 0l14.25 19.597A3 3 0 0 1 58.25 28H85a7 7 0 0 1 7 7v45a7 7 0 0 1-7 7H15a7 7 0 0 1-7-7V35a7 7 0 0 1 7-7h26.75a3 3 0 0 1 2.359-4.77l14.25-19.597zM50 43a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm4-20H46v-4h8v4z"
          fill="#000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 69a1 1 0 0 1-1-1V54a1 1 0 0 1 2 0v14a1 1 0 0 1-1 1z"
          fill="#000"
        />
      </g>

      {/* Checkmark */}
      <g transform="translate(18 24)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 4.5a1 1 0 0 0-1.497 1.36l3 3.5a1 1 0 0 0 1.497-.003l7-8a1 1 0 1 0-1.494-1.327l-6.278 7.093-2.728-3.191a1 1 0 0 0-1.499-.03l-3 3.5a1 1 0 0 0 1.497 1.33l2.5-2.917L1.5 4.5z"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

export default SheetWithIcons;
