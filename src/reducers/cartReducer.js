export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DISCOUNT':
        return {
          ...state,
          discount: action.payload,
        };
      // Add more cases as needed for other actions
      default:
        return state;
    }
  };
