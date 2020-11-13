import Axios from "axios";
export const CALL_REST_API_SUCCESS = "CALL_REST_API_SUCCESS";

export const submit = (p) => (dispatch) => {
  const url = `https://jsonplaceholder.typicode.com/users/${p}`;
  Axios.get(url).then((result) => {
    dispatch({ type: CALL_REST_API_SUCCESS, payload: result.data });
  });
};
