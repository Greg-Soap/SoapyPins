import React from "react";

const button = ({ setViewState }) => {
  return (
    <button
      onClick={() =>
        setViewState({
          longitude: 31.1342,
          latitude: 29.9792,
          zoom: 6,
        })
      }
      type="button"
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        width: "fit-content",
        backgroundColor: "teal",
        height: "fit-content",
      }}
    >
      Click me
    </button>
  );
};

export default button;
