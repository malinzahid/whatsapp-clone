export const initialState = {
    user: null, //Change to string to avoid login in
  };
  
  const reducer = (state, action) => {
    console.log(action);
  
    // action -> type, [payload]
  
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;