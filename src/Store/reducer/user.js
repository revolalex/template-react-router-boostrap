const initialStates = {
  token: "",
  username: "",
  password: "",
  auth: false
};

const userReducer = (state = initialStates, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "DELETE_TOKEN":
      return {
        ...state,
        token: "",
      };
    case "SET_USERNAME":
      return {
        ...state,
        username: action.username,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.password,
      };
      case "SET_AUTH":
        return {
          ...state,
          auth: action.auth,
        };
    default:
      return state;
  }
};

export default userReducer;