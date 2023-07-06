import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudentByIdThunk } from "../redux/students/students.actions";
import { Link } from "react-router-dom";

const Student = () => {
  const student = useSelector((state) => state.students.student);
  const campus = useSelector((state) => state.campuses.campus);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    dispatch(fetchStudentByIdThunk(id));
    setTimeout(() => {
      if (student.campusId) {
        dispatch(fetchStudentByIdThunk(student.campusId));
      }
    }, 500);
  }, []);

  return (
    <div className="container">
      <h1>Student Page</h1>
      <div>
        <h2>Student Info</h2>
        <img
          src={student.imageUrl}
          alt={`${student.firstName} ${student.lastName}`}
        />
        <p>first name: {student.firstName}</p>
        <p>last name: {student.lastName}</p>
        <p>email: {student.email}</p>
        <p>gpa: {student.gpa}</p>
      </div>
      <div>
        <h2>Campuse Info</h2>
        <img src={campus.imageUrl} alt={campus.name} />
        <p>
          name: <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
        </p>
        <p>address: {campus.address}</p>
        <p>description: {campus.description}</p>
      </div>
    </div>
  );
};

export default Student;
