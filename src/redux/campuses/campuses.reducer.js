import CampusActionType from "./campuses.types";

export const INITIAL_CAMPUS_STATE = {
  allCampuses: [],
};

const campusesReducer = (state = INITIAL_CAMPUS_STATE, { type, payload }) => {
  switch (type) {
    case CampusActionType.FETCH_ALL_CAMPUSES:
      return { ...state, allCampuses: payload };
    case CampusActionType.FETCH_CAMPUS_BY_ID:
      return { ...state, allCampuses: payload };
    case CampusActionType.ADD_CAMPUS:
      return { ...state, allCampuses: payload };
    case CampusActionType.UPDATE_CAMPUS:
      return { ...state, allCampuses: payload };
    default:
      return state;
  }
};

export default campusesReducer;
