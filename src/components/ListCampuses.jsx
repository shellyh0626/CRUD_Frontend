import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCampusThunk } from "../redux/campuses/campuses.actions";

export default function ListItems(props) {
  const dispatch = useDispatch();
  return props.list ? (
    props.list.length > 0 ? (
      props.list.map((item) => {
        return (
          <div key={item.id} className="card">
            <img src={item.imageUrl} alt={item.name} />
            <h1>
              <Link to={`/campuses/${item.id}`}>{item.name}</Link>
            </h1>
            <ul>
              <li>
                <button
                  onClick={() => {
                    dispatch(deleteCampusThunk(item.id));
                  }}
                >
                  X(Delete)
                </button>
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
