import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampusByIdThunk } from "../redux/campuses/campuses.actions";
import { fetchAllStudentsByCampusIdThunk } from "../redux/students/students.actions";
import ListStudents from "../components/ListStudents";

const Campus = () => {
  const campus = useSelector((state) => state.campuses.campus);
  const allStudents = useSelector((state) => state.students.allStudents);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    dispatch(fetchCampusByIdThunk(id));
    dispatch(fetchAllStudentsByCampusIdThunk(id));
  }, [campus, allStudents]);

  return (
    <div className="container">
      <h1>Campus Page</h1>
      <div>
        <img src={campus.imageUrl} alt={campus.name} />
        <p>name: {campus.name}</p>
        <p>address: {campus.address}</p>
        <p>description: {campus.description}</p>
      </div>
      <div>
        <ListStudents list={allStudents} />
      </div>
    </div>
  );
};

export default Campus;
