import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import * as types from "./actionTypes";

export const getMusicRedoresRequest = () => {
  return {
    type: types.GET_MUSIC_RECORD_REQUEST,
  };
};

const getMusicRecord = (params) => (dispatch) => {
  dispatch(getMusicRedoresRequest());
  return axios
    .get("http://localhost:8080/albums", params)
    .then((r) => {
      return dispatch({
        type: types.GET_MUSIC_RECORD_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      return dispatch({
        type: types.GET_MUSIC_RECORD_FAILURE,
      });
    });
};

const updateMusicRecord = (id, payload) => dispatch => {
dispatch({type: types.UPDATE_MUSIC_REQUEST});
return axios.patch(`http://localhost:8080/albums/${id}`,payload)
.then((r) => dispatch({type: types.UPDATE_MUSIC_SUCCESS}))
.catch((e) => dispatch(types.UPDATE_MUSIC_FAILURE));
}

export { getMusicRecord, updateMusicRecord };
