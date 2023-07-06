import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteStudentThunk } from "../redux/students/students.actions";

export default function ListItems(props) {
  const dispatch = useDispatch();

  return props.list ? (
    props.list.length > 0 ? (
      props.list.map((item) => {
        return (
          <div key={item.id} className="card">
            <h1>
              <Link to={`/students/${item.id}`}>
                {item.firstName} {item.lastName}
              </Link>
            </h1>
            <ul>
              <li>
                <button
                  onClick={() => {
                    dispatch(deleteStudentThunk(item.id));
                  }}
                >
                  X(delete)
                </button>
              </li>
            </ul>
          </div>
        );
      })
    ) : (
      <h1>No students found</h1>
    )
  ) : (
    <h1>Loading...</h1>
  );
}
