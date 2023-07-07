import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampusByIdThunk } from "../redux/campuses/campuses.actions";
import { fetchAllStudentsThunk } from "../redux/students/students.actions";
import ListStudents from "../components/ListStudents";

const Campus = () => {
  const campus = useSelector((state) => state.campuses.campus);
  const allStudents = useSelector((state) => state.students.allStudents);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    dispatch(fetchCampusByIdThunk(id));
    if (allStudents.length > 0) {
      return;
    }
    dispatch(fetchAllStudentsThunk());
  });

  return (
    <div className="container">
      <h1>Campus Page</h1>
      <div className="campus-info">
        <img src={campus.imageUrl} alt={campus.name} width="50%" />
        <div>
          <h1>{campus.name}</h1>
          <p>{campus.description}</p>
          <p>Address: {campus.address}</p>
        </div>
      </div>
      <br />
      <h1>Students</h1>
      <div>
        <ListStudents
          list={allStudents.filter((student) => student.campusId === campus.id)}
          campuses={[campus]}
        />
      </div>
    </div>
  );
};

export default Campus;
