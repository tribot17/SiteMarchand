import React from "react";

const DisplayError = (props) => {
  console.log(props);
  if (props === true) {
    console.log("logged");
  }
  return (
    <div>
      <h3>Salut</h3>
    </div>
  );
};

export default DisplayError;
