import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ListStudents from "../components/ListStudents";

const Students = () => {
  const allStudents = useSelector((state) => state.students.allStudents);

  return (
    <div className="container">
      <h1>
        Students Page &nbsp; <Link to="/students/new">Create Student</Link>
      </h1>
      <ListStudents list={allStudents} />
    </div>
  );
};

export default Students;
