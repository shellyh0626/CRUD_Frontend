import React from "react";
import { Link } from "react-router-dom";

export default function ListItems(props) {
  return props.list ? (
    props.list.length > 0 ? (
      props.list.map((item) => {
        return (
          <div key={item.id} className="card">
            <img src={item.imageUrl} alt={item.name} />
            <h1>{item.name}</h1>
            <ul>
              <li>
                <Link to={`/campuses/${item.id}`}>Detail</Link>
              </li>
            </ul>
          </div>
        );
      })
    ) : (
      <h1>No campuses found</h1>
    )
  ) : (
    <h1>Loading...</h1>
  );
}
