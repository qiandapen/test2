const defaultState={
    classifyList:{}
};
export default (state=defaultState,action)=>{
    switch (action.type) {
        case "GET_SERIES_LIST_FULFILLED":
            let classifyListState=JSON.parse(JSON.stringify(state));
            classifyListState.classifyList=action.payload;
            // console.log(classifyListState.classifyList);
            return classifyListState;
    }
    return state;
}