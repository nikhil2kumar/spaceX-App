import axios from "axios";

export const FETCH_LAUNCHES = "fetch_launches";

export const fetchLaunches = (queryParams) => async (dispatch) => {
  let url = "https://api.spaceXdata.com/v3/launches?limit=100";
  const queryParamsMod = queryParams.replace("/", "").replace("?", "");

  if (queryParamsMod && queryParamsMod.trim().length >= 0) {
    url += `&${queryParamsMod}`;
  }

  const res = await axios.get(url);

  dispatch({
    type: FETCH_LAUNCHES,
    payload: res,
  });
};
