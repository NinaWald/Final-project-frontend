export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return {
          ...state,
          username: action.payload.username,
          accessToken: action.payload.accessToken,
        };
      case 'LOGOUT_USER':
        return {
          ...state,
          username: '',
          accessToken: '',
        };
      default:
        return state;
    }
  };
  
