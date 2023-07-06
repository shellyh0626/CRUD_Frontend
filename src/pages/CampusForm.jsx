import React from "react";

const CampusForm = () => {
  return (
    <div className="container">
      <h1>Campuses Page</h1>
      <div>
        <div>
          <label>name</label>
          <input type="text" />
        </div>
        <div>
          <label>image</label>
          <input type="text" />
        </div>
        <div>
          <label>description</label>
          <input type="text" />
        </div>
        <div>
          <label>address</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default CampusForm;
