import React from "react";
import { Link } from "react-router-dom";

export default function ListItems(props) {
  return props.list ? (
    props.list.length > 0 ? (
      props.list.map((item) => {
        return (
          <div key={item.id} className="card">
            <h1>
              {item.firstName} {item.lastName}
            </h1>
            <ul>
              <li>
                <Link to={`/students/${item.id}`}>Detail</Link>
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
