import axios from "axios";

import StudentActionType from "./students.types";

export const fetchAllStudents = (payload) => {
  //   console.log("FETCH ALL STUDENTs ACTION");
  return {
    type: StudentActionType.FETCH_ALL_STUDENTS,
    payload: payload,
  };
};

export const fetchAllStudentsThunk = () => {
  return async (dispatch) => {
    try {
      //   console.log("FETCH ALL STUDENTS THUNK IS FIRING");
      const response = await axios.get("http://localhost:8080/api/students");
      //   console.log("FETCH ALL STUDENTS THUNK COMPLETED");
      dispatch(fetchAllStudents(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchStudentById = (payload) => {
  return {
    type: StudentActionType.FETCH_STUDENT_BY_ID,
    payload: payload,
  };
};

export const fetchStudentByIdThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/students/${id}`
      );
      dispatch(fetchStudentById(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};