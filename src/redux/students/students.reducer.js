import StudentActionType from "./students.types";

export const INITIAL_STUDENT_STATE = {
  allStudents: [],
};

const studentsReducer = (state = INITIAL_STUDENT_STATE, { type, payload }) => {
  console.log("STUDENT REDUCER IS HANDLING FETCH ALL STUDENT ACTION");
  switch (type) {
    case StudentActionType.FETCH_ALL_STUDENTS:
      return { ...state, allStudents: payload };
    case StudentActionType.FETCH_STUDENT_BY_ID:
      return { ...state, allStudents: payload };
    case StudentActionType.ADD_STUDENT:
      return { ...state, allStudents: payload };
    case StudentActionType.UPDATE_STUDENT:
      return { ...state, allStudents: payload };
    case StudentActionType.DELETE_STUDENT:
      return { ...state, allStudents: payload };
    default:
      return state;
  }
};

export default studentsReducer;
