import * as types from "./actionTypes";

const intaialState = {
  musicRedores: [],
  isLoadding: false,
  isError: false,
};

const reducer = (oldState = intaialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_MUSIC_RECORD_REQUEST:
      return {
        ...oldState,
        isLoadding: true,
        isError: false,
      };

    case types.GET_MUSIC_RECORD_SUCCESS:
      return {
        ...oldState,
        isLoadding: false,
        musicRedores: payload,
        isError: false,
      };

    case types.GET_MUSIC_RECORD_FAILURE:
      return {
        ...oldState,
        isLoadding: false,
        isError: true,
      };

    default:
      return oldState;
  }
};

export { reducer };
