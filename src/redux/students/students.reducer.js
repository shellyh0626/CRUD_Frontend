import StudentActionType from "./students.types";

export const INITIAL_STUDENT_STATE = {
  allStudents: [],
  student: {},
};

const studentsReducer = (state = INITIAL_STUDENT_STATE, { type, payload }) => {
  console.log("STUDENT REDUCER IS HANDLING FETCH ALL STUDENT ACTION");
  switch (type) {
    case StudentActionType.FETCH_ALL_STUDENTS:
      return { ...state, allStudents: payload };
    case StudentActionType.FETCH_STUDENT_BY_ID:
      return { ...state, students: payload };
    case StudentActionType.ADD_STUDENT:
      state.allStudents.push(payload);
      return { ...state, students: payload };
    case StudentActionType.UPDATE_STUDENT:
      const pos = state.allStudents.findeIndex(
        (student) => student.id === payload.id
      );
      if (pos > -1) {
        state.allStudents[pos] = payload;
      }
      return { ...state, students: payload };
    case StudentActionType.DELETE_STUDENT:
      const pos1 = state.allStudents.findeIndex(
        (student) => student.id === payload.id
      );
      if (pos1 > -1) {
        state.allStudents = state.allStudents.splice(pos1, 1);
      }
      return { ...state };
    default:
      return state;
  }
};

export default studentsReducer;
