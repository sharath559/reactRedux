
const initialState = {
  value: []
};

export default function mainReducer(state = initialState, action) {
 
  switch (action.type) {
    
    case "CALL_REST_API_SUCCESS":{
    return {
      ...state,
      value: action.payload
    };
  }

  default:
    return state;
  }
}

