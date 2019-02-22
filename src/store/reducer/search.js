const defaultState={
    search:[],
    search_res:[]
};
export default (state=defaultState,action)=>{
    switch (action.type) {
        case "GET_SEARCH_DATA_FULFILLED":
            let searchState=JSON.parse(JSON.stringify(state));
            searchState.search=action.payload;
            return searchState;
        case "GET_SEARCH_RES_DATA_FULFILLED":
            let searchResState=JSON.parse(JSON.stringify(state));
            searchResState.search_res=action.payload;
            return searchResState;
    }
    return state;
}











