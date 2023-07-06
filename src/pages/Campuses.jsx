import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ListCampuses from "../components/ListCampuses";

const Campuses = () => {
  const allCampuses = useSelector((state) => state.campuses.allCampuses);

  return (
    <div className="container">
      <h1>
        Campuses Page &nbsp; <Link to="/campuses/new">Create Campus</Link>
      </h1>
      <ListCampuses list={allCampuses} />
    </div>
  );
};

export default Campuses;
