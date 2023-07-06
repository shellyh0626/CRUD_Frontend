import React from "react";

const StudentForm = () => {
  return (
    <div className="container">
      <h1>StudentForm Page</h1>
      <div className="container">
        <h1>CampusForm Page</h1>
        <div>
          <div>
            <label>campus</label>
            <select></select>
          </div>
          <div>
            <label>first name</label>
            <input type="text" />
          </div>
          <div>
            <label>last name</label>
            <input type="text" />
          </div>
          <div>
            <label>email</label>
            <input type="text" />
          </div>
          <div>
            <label>image</label>
            <input type="text" />
          </div>
          <div>
            <label>gpa</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
