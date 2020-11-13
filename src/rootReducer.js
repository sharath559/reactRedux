
import {combineReducers } from 'redux'
import mainReducer from "./reducer";


const appReducer = combineReducers({
    mainReducer
});

const rootReducer = (state,action) =>{
    return appReducer(state,action)
}
export default rootReducer
