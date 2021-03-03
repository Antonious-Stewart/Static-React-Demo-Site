import React from "react";
import { Link } from "react-router-dom";

export const HomeImageCard = ({ src, alt, title }) => {
  return (
    <>
      <Link to=''>
        <img src={src} alt={alt} style={{ width: "100%", height: "auto" }} />
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
          }}
        ></div>
      </Link>
    </>
  );
};
