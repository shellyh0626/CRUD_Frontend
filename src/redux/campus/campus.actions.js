import axios from "axios";

import CampusActionType from "./campus.types";

export const fetchAllCampuses = (payload) => {
  console.log("FETCH ALL CAMPUSES ACTION");
  return {
    type: CampusActionType.FETCH_ALL_CAMPUSES,
    payload: payload,
  };
};

export const fetchAllCampusesThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCH ALL CAMPUSES THUNK IS FIRING");
      const response = await axios.get("http://localhost:8080/api/students");
      console.log("FETCH ALL CAMPUSES THUNK COMPLETED");
      dispatch(fetchAllCampuses(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
