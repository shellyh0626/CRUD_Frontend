import CampusActionType from "./campuses.types";

export const INITIAL_CAMPUS_STATE = {
  allCampuses: [],
  campus: {},
};

const campusesReducer = (state = INITIAL_CAMPUS_STATE, { type, payload }) => {
  switch (type) {
    case CampusActionType.FETCH_ALL_CAMPUSES:
      return { ...state, allCampuses: payload };
    case CampusActionType.FETCH_CAMPUS_BY_ID:
      return { ...state, campus: payload };
    case CampusActionType.ADD_CAMPUS:
      state.allCampuses.push(payload);
      return { ...state, campuses: payload };
    case CampusActionType.UPDATE_CAMPUS:
      const pos = state.allCampuses.findIndex(
        (campus) => campus.id === payload.id
      );
      state.allCampuses[pos] = payload;
      return { ...state, campuses: payload };
    case CampusActionType.DELETE_CAMPUS: {
      state.allCampuses = state.allCampuses.filter(
        (campus) => campus.id !== payload.id
      );
      return { ...state };
    }
    default:
      return state;
  }
};

export default campusesReducer;
