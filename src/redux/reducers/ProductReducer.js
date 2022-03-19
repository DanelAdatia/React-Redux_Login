import { ActionTypes } from "../constants/ActionType";

export const productReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERNAME:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_USERNAME:
      return {};
    default:
      return state;
  }
};
