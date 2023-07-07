import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ListStudents from "../components/ListStudents";
import { fetchAllStudentsThunk } from "../redux/students/students.actions";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.actions";

const Students = () => {
  const allStudents = useSelector((state) => state.students.allStudents);
  const allCampuses = useSelector((state) => state.campuses.allCampuses);

  const dispatch = useDispatch();

  function fetchAllStudents() {
    return dispatch(fetchAllStudentsThunk());
  }

  const fetchAllCampuses = () => {
    return dispatch(fetchAllCampusesThunk());
  };

  React.useEffect(() => {
    if (allStudents.length > 0) {
      return;
    }
    fetchAllStudents();
    fetchAllCampuses();
  });

  return (
    <div className="container">
      <h1>
        Students Page &nbsp; <Link to="/students/new">Create Student</Link>
      </h1>
      <ListStudents list={allStudents} campuses={allCampuses} />
    </div>
  );
};

export default Students;
