import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.actions";
import { addStudentThunk } from "../redux/students/students.actions";

const StudentForm = () => {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
    gpa: "",
    campusId: "",
  });

  const allCampuses = useSelector((state) => state.campuses.allCampuses);

  const dispatch = useDispatch();

  const fetchAllCampuses = () => {
    return dispatch(fetchAllCampusesThunk());
  };

  React.useEffect(() => {
    fetchAllCampuses();
  });

  return (
    <div className="container">
      <h1>StudentForm Page</h1>
      <div>
        <div className="form-item">
          <label>campus</label>
          <select
            onChange={(e) => setState({ ...state, campusId: e.target.value })}
          >
            <option defaultValue>Select</option>
            {allCampuses.map((campus) => {
              return (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-item">
          <label>first name</label>
          <input
            type="text"
            value={state.firstName}
            onChange={(e) => setState({ ...state, firstName: e.target.value })}
          />
        </div>
        <div className="form-item">
          <label>last name</label>
          <input
            type="text"
            value={state.lastName}
            onChange={(e) => setState({ ...state, lastName: e.target.value })}
          />
        </div>
        <div className="form-item">
          <label>email</label>
          <input
            type="text"
            value={state.email}
            onChange={(e) => {
              const reg =
                /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
              if (!reg.test(e.target.value)) {
                setState({ ...state, email: e.target.value });
                e.target.style.color = "red";
                return;
              }
              e.target.style.color = "black";
              setState({ ...state, email: e.target.value });
            }}
          />
        </div>
        <div className="form-item">
          <label>image</label>
          <input
            type="text"
            value={state.imageUrl}
            onChange={(e) => setState({ ...state, imageUrl: e.target.value })}
          />
        </div>
        <div className="form-item">
          <label>gpa</label>
          <input
            type="text"
            value={state.gpa}
            onChange={(e) => {
              if (isNaN(e.target.value)) {
                e.target.style.color = "red";
                alert("Please enter a valid GPA");
                return;
              }
              const gpa = parseFloat(e.target.value);
              if (gpa < 0 || gpa > 4) {
                e.target.style.color = "red";
                alert("Please enter a valid GPA");
                return;
              }
              e.target.style.color = "black";
              setState({ ...state, gpa: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="form-item">
        <button
          onClick={() => {
            const reg =
              /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if (!reg.test(state.email)) {
              alert("Please enter a valid email address");
              return;
            }
            if (state.gpa < 0 || state.gpa > 4) {
              alert("Please enter a valid GPA");
              return;
            }
            if (state.campusId === "Select" || state.campusId === "") {
              alert("Please select a campus");
            }
            if (
              state.firstName &&
              state.lastName &&
              state.email &&
              state.imageUrl &&
              state.gpa &&
              state.campusId
            ) {
              dispatch(addStudentThunk(state));
            } else {
              alert("Please fill out all fields");
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StudentForm;
