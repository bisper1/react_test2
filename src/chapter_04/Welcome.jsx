import React from "react";

function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <h2>test, {props.number}</h2>
    </div>
  );
}

export default Welcome;
