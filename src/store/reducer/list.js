const defaultState={
    list:[]
};
export default (state=defaultState,action)=>{
    switch (action.type) {
        case "GET_LIST_FULFILLED":let listState=JSON.parse(JSON.stringify(state));
            listState.list=action.payload;
            // console.log(listState.list);
            return listState;
    }
    return state;
}