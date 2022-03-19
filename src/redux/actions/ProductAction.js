import { ActionTypes } from "../constants/ActionType";

export const setUsername = (details) => {
  return {
    type: ActionTypes.SET_USERNAME,
    payload: details,
  };
};

export const RemoveSelected = () => {
  return {
    type: ActionTypes.REMOVE_USERNAME,
  };
};
