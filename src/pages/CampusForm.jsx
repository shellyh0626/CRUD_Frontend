import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCampusThunk } from "../redux/campuses/campuses.actions";

const CampusForm = () => {
  const campus = useSelector((state) => state.campuses.campus);
  const [state, setState] = React.useState({
    name: "",
    imageUrl: "",
    description: "",
    address: "",
  });

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>CampusForm Page</h1>
      <div>
        <div className="form-item">
          <label>name</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
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
          <label>description</label>
          <input
            type="text"
            value={state.description}
            onChange={(e) =>
              setState({ ...state, description: e.target.value })
            }
          />
        </div>
        <div className="form-item">
          <label>address</label>
          <input
            type="text"
            value={state.address}
            onChange={(e) => setState({ ...state, address: e.target.value })}
          />
          <div className="form-item">
            <button
              onClick={() => {
                if (
                  state.name === "" ||
                  state.imageUrl === "" ||
                  state.description === "" ||
                  state.address === ""
                ) {
                  alert("Please fill out all fields");
                  return;
                }

                dispatch(addCampusThunk(state));
                alert("Created Successfully");
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusForm;
