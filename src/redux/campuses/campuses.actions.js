import axios from "axios";

import CampusActionType from "./campuses.types";

export const fetchAllCampuses = (payload) => {
  // console.log("FETCH ALL CAMPUSES ACTION");
  return {
    type: CampusActionType.FETCH_ALL_CAMPUSES,
    payload: payload,
  };
};

export const fetchAllCampusesThunk = () => {
  return async (dispatch) => {
    try {
      // console.log("FETCH ALL CAMPUSES THUNK IS FIRING");
      const response = await axios.get("http://localhost:8080/api/campuses");
      // console.log("FETCH ALL CAMPUSES THUNK COMPLETED");
      dispatch(fetchAllCampuses(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchCampusById = (payload) => {
  return {
    type: CampusActionType.FETCH_CAMPUS_BY_ID,
    payload: payload,
  };
};

export const fetchCampusByIdThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/campuses/${id}`
      );
      dispatch(fetchCampusById(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addCampus = (payload) => {
  return {
    type: CampusActionType.ADD_CAMPUS,
    payload: payload,
  };
};

export const addCampusThunk = (campus) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/campuses",
        campus
      );
      dispatch(addCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateCampus = (payload) => {
  return {
    type: CampusActionType.UPDATE_CAMPUS,
    payload: payload,
  };
};

export const updateCampusThunk = (campus) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/campuses/${campus.id}`,
        campus
      );
      dispatch(updateCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteCampus = (payload) => {
  return {
    type: CampusActionType.DELETE_CAMPUS,
    payload: payload,
  };
};
