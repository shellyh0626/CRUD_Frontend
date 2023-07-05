import axios from "axios";

import StudentActionType from "./students.types";

export const fetchAllStudents = (payload) => {
  console.log("FETCH ALL SHOES ACTION");
  return {
    type: StudentActionType.FETCH_ALL_STUDENTS,
    payload: payload,
  };
};