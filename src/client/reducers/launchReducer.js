import { FETCH_LAUNCHES } from "../actions/index";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_LAUNCHES:
      return action.payload.data;
    default:
      return state;
  }
};
