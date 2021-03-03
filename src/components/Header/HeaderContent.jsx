import React from "react";
import { HeaderSlideShow } from "./HeaderSlideShow";
export const HeaderContent = () => {
  // const styles = {
  //   background: ur,
  // };
  return (
    <>
      <HeaderSlideShow />
      <div
        style={{
          position: "absolute",
          zIndex: 999,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "8rem", marginBottom: "2rem" }}>
          Lorem, ipsum.
        </h1>
        <span
          style={{
            display: "block",
            fontSize: "2rem",
            marginBottom: "2rem",
            color: "#ccc",
          }}
        >
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <button
          style={{
            backgroundImage:
              "linear-gradient( 181.3deg,rgba(134, 15, 15, 1) 24.9%,rgba(183, 10, 10, 1) 46.9%,rgba(210, 70, 0, 1) 85.1%)",
            color: "#fff",
            border: "none",
            borderRadius: ".75rem",
            boxShadow: "0 0 3px rgba(0,0,0,.5)",
            fontSize: "2rem",
            padding: "1.25rem 2rem",
          }}
        >
          Shop Now!
        </button>
      </div>
    </>
  );
};
