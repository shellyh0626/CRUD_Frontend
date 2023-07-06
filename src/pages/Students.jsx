import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ListStudents from "../components/ListStudents";
import { fetchAllStudentsThunk } from "../redux/students/students.actions";

const Students = () => {
  const allStudents = useSelector((state) => state.students.allStudents);

  const dispatch = useDispatch();

  function fetchAllStudents() {
    return dispatch(fetchAllStudentsThunk());
  }

  React.useEffect(() => {
    fetchAllStudents();
  }, []);

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
