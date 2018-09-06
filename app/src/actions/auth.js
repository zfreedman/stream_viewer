export const SET_AUTH = "set_auth";

export const setAuth = token => ({
  type: SET_AUTH,
  payload: { token },
});
