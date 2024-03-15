import React from 'react';

const EnterpriseAIIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      {...props}
    >
      {/* Dotted circle */}
      <circle cx="50" cy="50" r="40" stroke="#000" strokeWidth="2" fill="none" strokeDasharray="3"/>
      
      {/* Inner box */}
      <rect x="30" y="30" width="40" height="40" stroke="#000" strokeWidth="2" fill="none"/>
      <text x="50" y="50" dominantBaseline="middle" textAnchor="middle">Enterprise AI</text>

      {/* Small blocks on line */}
      <line x1="50" y1="10" x2="50" y2="25" stroke="#000" strokeWidth="2"/>
      <rect x="47" y="25" width="6" height="6" fill="#000"/>
      <text x="50" y="35" dominantBaseline="middle" textAnchor="middle" fontSize="10" fill="#000">!</text>

      <line x1="50" y1="75" x2="50" y2="90" stroke="#000" strokeWidth="2"/>
      <rect x="47" y="73" width="6" height="6" fill="#000"/>
      <text x="50" y="63" dominantBaseline="middle" textAnchor="middle" fontSize="10" fill="#000">!</text>

      {/* Small boxes on outer circle */}
      <circle cx="50" cy="50" r="60" stroke="#000" strokeWidth="2" fill="none"/>
      <rect x="48" y="30" width="4" height="4" fill="#000"/>
      <text x="50" y="30" dominantBaseline="middle" textAnchor="middle" fontSize="8" fill="#000">!</text>

      <rect x="75" y="47" width="4" height="4" fill="#000"/>
      <text x="77" y="47" dominantBaseline="middle" textAnchor="middle" fontSize="8" fill="#000">!</text>

      <rect x="25" y="47" width="4" height="4" fill="#000"/>
      <text x="27" y="47" dominantBaseline="middle" textAnchor="middle" fontSize="8" fill="#000">!</text>
    </svg>
  );
};

export default EnterpriseAIIcon;
