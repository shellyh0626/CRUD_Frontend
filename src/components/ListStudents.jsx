import React from "react";
import { Link } from "react-router-dom";

export default function ListItems(props) {
  return props.list ? (
    props.list.length > 0 ? (
      <div className="list-students">
        {props.list.map((item) => {
          return (
            <div key={item.id} className="card">
              <img
                src={item.imageUrl}
                alt={`${item.firstName} ${item.lastName}`}
                width="100%"
              />
              <h1>
                <Link to={`/students/${item.id}`}>
                  {item.firstName} {item.lastName}
                </Link>
              </h1>
              <h4>
                <Link to={`/campuses/${item.campusId}`}>
                  {props.campuses?.find(
                    (campuse) => campuse.id === item.campusId
                  )?.name || "Campus Name"}
                </Link>
              </h4>
            </div>
          );
        })}
      </div>
    ) : (
      <h1>No students found</h1>
    )
  ) : (
    <h1>Loading...</h1>
  );
}
