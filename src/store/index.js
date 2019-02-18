import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import header from "./reducer/header";
import banner from "./reducer/banner";
const reducers = combineReducers({
    header,
    banner
});
const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware));
export default store;