import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import search from "./reducer/search";
import header from "./reducer/header";
import banner from "./reducer/banner";
import list from "./reducer/list";
import series from "./reducer/series";
import title from "./reducer/title";
const reducers = combineReducers({
    header,
    banner,
    list,
    series,
    title,
    search
});
const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware));
export default store;