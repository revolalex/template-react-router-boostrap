
export const setToken = (token) => ({
    type: "SET_TOKEN",
    token: token,
  });
  
  export const deleteToken = () => ({
    type: "DELETE_TOKEN",
  });

  export const setPassword = (password) => ({
    type: "SET_PASSWORD",
    password: password
  });

  export const setUsername = (username) => ({
    type: "SET_USERNAME",
    username: username
  });
  export const setAuth = (boolean) => ({
    type: "SET_AUTH",
    auth: boolean
  });