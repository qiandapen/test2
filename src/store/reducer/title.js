const defaultState={
    title:[]
};
export default (state=defaultState,action)=>{
    switch (action.type) {
        case "GET_TITLE_FULFILLED":let titleState=JSON.parse(JSON.stringify(state));
            titleState.title=action.payload;
            return titleState;
    }
    return state;
}