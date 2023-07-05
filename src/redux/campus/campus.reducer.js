import CampusActionType from "./campus.types";

export const INITIAL_CAMPUS_STATE = {
  allCampuses: [],
};

const campusesReducer = (state = INITIAL_CAMPUS_STATE, { type, payload }) => {
  switch (type) {
    case CampusActionType.FETCH_ALL_CAMPUSES:
      return { ...state, allCampuses: payload };
    default:
      return state;
  }
};

export default campusesReducer;
