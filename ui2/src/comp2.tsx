import React from 'react';

const ComplianceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      {...props}
    >
      <path
        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 16.75c-3.313 0-6-2.687-6-6 0-3.314 2.687-6 6-6 3.313 0 6 2.686 6 6 0 3.313-2.687 6-6 6z"
        fill="#000"
      />
      <path
        d="M12 7.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 1 1-1.5 0v-4.5c0-.414.336-.75.75-.75zM12 15.75a.75.75 0 0 1 .75.75v.75a.75.75 0 1 1-1.5 0v-.75a.75.75 0 0 1 .75-.75z"
        fill="#000"
      />
    </svg>
  );
};

export default ComplianceIcon;
