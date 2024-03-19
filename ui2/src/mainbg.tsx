import React from "react";

function Mainbg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1500">
      <path fill="#fff" d="M0 0H2000V1500H0z"></path>
      <defs>
        <path id="s" stroke="#fff" strokeWidth="0.5" d="M0 0H1V1H0z"></path>
        <pattern
          id="a"
          width="3"
          height="3"
          patternTransform="matrix(50 0 0 50 -49000 -36750)"
          patternUnits="userSpaceOnUse"
        >
          <use y="2" fill="#fcfcfc" href="#s"></use>
          <use x="1" y="2" fill="#fcfcfc" href="#s"></use>
          <use x="2" y="2" fill="#fafafa" href="#s"></use>
          <use fill="#fafafa" href="#s"></use>
          <use x="2" fill="#f7f7f7" href="#s"></use>
          <use x="1" y="1" fill="#f7f7f7" href="#s"></use>
        </pattern>
        <pattern
          id="b"
          width="7"
          height="11"
          patternTransform="matrix(50 0 0 50 -49000 -36750)"
          patternUnits="userSpaceOnUse"
        >
          <g fill="#f5f5f5">
            <use href="#s"></use>
            <use y="5" href="#s"></use>
            <use x="1" y="10" href="#s"></use>
            <use x="2" y="1" href="#s"></use>
            <use x="2" y="4" href="#s"></use>
            <use x="3" y="8" href="#s"></use>
            <use x="4" y="3" href="#s"></use>
            <use x="4" y="7" href="#s"></use>
            <use x="5" y="2" href="#s"></use>
            <use x="5" y="6" href="#s"></use>
            <use x="6" y="9" href="#s"></use>
          </g>
        </pattern>
        <pattern
          id="h"
          width="5"
          height="13"
          patternTransform="matrix(50 0 0 50 -49000 -36750)"
          patternUnits="userSpaceOnUse"
        >
          <g fill="#f5f5f5">
            <use y="5" href="#s"></use>
            <use y="8" href="#s"></use>
            <use x="1" y="1" href="#s"></use>
            <use x="1" y="9" href="#s"></use>
            <use x="1" y="12" href="#s"></use>
            <use x="2" href="#s"></use>
            <use x="2" y="4" href="#s"></use>
            <use x="3" y="2" href="#s"></use>
            <use x="3" y="6" href="#s"></use>
            <use x="3" y="11" href="#s"></use>
            <use x="4" y="3" href="#s"></use>
            <use x="4" y="7" href="#s"></use>
            <use x="4" y="10" href="#s"></use>
          </g>
        </pattern>
        <pattern
          id="c"
          width="17"
          height="13"
          patternTransform="matrix(50 0 0 50 -49000 -36750)"
          patternUnits="userSpaceOnUse"
        >
          <g fill="#f2f2f2">
            <use y="11" href="#s"></use>
            <use x="2" y="9" href="#s"></use>
            <use x="5" y="12" href="#s"></use>
            <use x="9" y="4" href="#s"></use>
            <use x="12" y="1" href="#s"></use>
            <use x="16" y="6" href="#s"></use>
          </g>
        </pattern>
        <pattern
          id="d"
          width="19"
          height="17"
          patternTransform="matrix(50 0 0 50 -49000 -36750)"
          patternUnits="userSpaceOnUse"
        >
          <g fill="#fff">
            <use y="9" href="#s"></use>
            <use x="16" y="5" href="#s"></use>
            <use x="14" y="2" href="#s"></use>
            <use x="11" y="11" href="#s"></use>
            <use x="6" y="14" href="#s"></use>
          </g>
          <g fill="#efefef">
            <use x="3" y="13" href="#s"></use>
            <use x="9" y="7" href="#s"></use>
            <use x="13" y="10" href="#s"></use>
            <use x="15" y="4" href="#s"></use>
            <use x="18" y="1" href="#s"></use>
          </g>
        </pattern>
        <pattern
          id="e"
          width="47"
          height="53"
          patternTransform="matrix(50 0 0 50 -49000 -36750)"
          patternUnits="userSpaceOnUse"
        >
          <g fill="#FFCAC3">
            <use x="2" y="5" href="#s"></use>
            <use x="16" y="38" href="#s"></use>
            <use x="46" y="42" href="#s"></use>
            <use x="29" y="20" href="#s"></use>
          </g>
        </pattern>
        <pattern
          id="f"
          width="59"
          height="71"
          patternTransform="matrix(50 0 0 50 -49000 -36750)"
          patternUnits="userSpaceOnUse"
        >
          <g fill="#FFCAC3">
            <use x="33" y="13" href="#s"></use>
            <use x="27" y="54" href="#s"></use>
            <use x="55" y="55" href="#s"></use>
          </g>
        </pattern>
        <pattern
          id="g"
          width="139"
          height="97"
          patternTransform="matrix(50 0 0 50 -49000 -36750)"
          patternUnits="userSpaceOnUse"
        >
          <g fill="#FFCAC3">
            <use x="11" y="8" href="#s"></use>
            <use x="51" y="13" href="#s"></use>
            <use x="17" y="73" href="#s"></use>
            <use x="99" y="57" href="#s"></use>
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#a)"></rect>
      <rect width="100%" height="100%" fill="url(#b)"></rect>
      <rect width="100%" height="100%" fill="url(#h)"></rect>
      <rect width="100%" height="100%" fill="url(#c)"></rect>
      <rect width="100%" height="100%" fill="url(#d)"></rect>
      <rect width="100%" height="100%" fill="url(#e)"></rect>
      <rect width="100%" height="100%" fill="url(#f)"></rect>
      <rect width="100%" height="100%" fill="url(#g)"></rect>
    </svg>
  );
}

export default Mainbg;
