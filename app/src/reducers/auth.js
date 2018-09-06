import { SET_AUTH } from "../actions/auth.js";

export default function auth (state = "", action) {
  switch (action.type) {
    
    case SET_AUTH:
      return action.payload.token;

    default:
      return state;
  }
};
