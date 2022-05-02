import { Login, Logout } from "./action";
const init = {isLoggedIn: false,roll:null};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case Login: return {...store, isLoggedIn: true, roll: payload}
    case Logout: return {...store, isLoggedIn: false, roll: null}
    default:
      return store;
  }
};