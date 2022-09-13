import * as Action from "../actions/types";

const initialState = {
  data: {},
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.UPDATE_COUNTER:
      return {
        ...state,
        data: {},
      };
    default:
      return state;
  }
};
