import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ListCampuses from "../components/ListCampuses";
import { useDispatch } from "react-redux";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.actions";
import { fetchAllStudentsThunk } from "../redux/students/students.actions";

const Campuses = () => {
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  const allStudents = useSelector((state) => state.students.allStudents);

  const dispatch = useDispatch();

  function fetchAllStudents() {
    return dispatch(fetchAllStudentsThunk());
  }

  const fetchAllCampuses = () => {
    return dispatch(fetchAllCampusesThunk());
  };

  React.useEffect(() => {
    if (allCampuses.length > 0) {
      return;
    }
    fetchAllCampuses();
    fetchAllStudents();
  });

  return (
    <div className="container">
      <h1>
        Campuses Page &nbsp; <Link to="/campuses/new">Create Campus</Link>
      </h1>
      <ListCampuses list={allCampuses} students={allStudents} />
    </div>
  );
};

export default Campuses;
