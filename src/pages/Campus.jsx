import React from "react";
import ListStudents from "../components/ListStudents";

const Campus = () => {
  return (
    <div className="container">
      <h1>Campus Page</h1>
      <div>
        <img src="" />
        <p>name: </p>
        <p>address: </p>
        <p>description</p>
      </div>
      <div>
        <ListStudents />
      </div>
    </div>
  );
};

export default Campus;
