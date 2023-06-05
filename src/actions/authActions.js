
export const loginUser = (username, accessToken) => {
  return {
    type: 'LOGIN_USER',
    payload: {
      username,
      accessToken
    }
  };
};