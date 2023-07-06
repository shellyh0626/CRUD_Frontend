import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllStudentsThunk } from "../redux/students/students.actions";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.actions";

const Home = () => {
  const dispatch = useDispatch();

  const fetchAllStudents = () => {
    return dispatch(fetchAllStudentsThunk());
  };

  const fetchAllCampuses = () => {
    return dispatch(fetchAllCampusesThunk());
  };

  // defaults get all student / campuses
  React.useEffect(() => {
    fetchAllStudents();
    fetchAllCampuses();
  });

  return (
    <div className="container">
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to="/students">Students</Link>
          <Link to="/campuses">Campuses</Link>
        </li>
      </ul>
      <p>Description:</p>
      <p>
        <li>Student Number: </li>
        <li>Student Name: </li>
      </p>
      <p>Background API:</p>
      <ul>
        <li>GET /api/campuses/</li>
        <li>POST /api/campuses/</li>
        <li>GET /api/campuses/:id</li>
        <li>PUT /api/campuses/:id</li>
        <li>DELETE /api/campuses/:id</li>
      </ul>
      <ul>
        <li>GET /api/students/</li>
        <li>POST /api/students/</li>
        <li>GET /api/students/campus/:id</li>
        <li>GET /api/students/:id</li>
        <li>PUT /api/students/:id</li>
        <li>DELETE /api/students/:id</li>
      </ul>
    </div>
  );
};

export default Home;
