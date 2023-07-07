import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCampusThunk } from "../redux/campuses/campuses.actions";

export default function ListItems(props) {
  const dispatch = useDispatch();

  return props.list ? (
    props.list.length > 0 ? (
      <div className="list-campuses">
        {props.list.map((item) => {
          return (
            <div key={item.id} className="card">
              <img src={item.imageUrl} alt={item.name} width="50%" />
              <div className="right">
                <div className="info">
                  <h1>
                    <Link to={`/campuses/${item.id}`}>{item.name}</Link>
                  </h1>
                  <p>
                    {props.students?.filter(
                      (student) => student.campusId === item.id
                    ).length || 0}{" "}
                    Students
                  </p>
                </div>
                <ul>
                  <li>
                    <button
                      onClick={() => {
                        dispatch(deleteCampusThunk(item.id));
                      }}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    ) : (
      <h1>No campuses found</h1>
    )
  ) : (
    <h1>Loading...</h1>
  );
}
