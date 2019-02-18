const defaultState={
    banners:[]
};
export default (state=defaultState,action)=>{
    switch (action.type) {
        case "GET_BANNERS":let bannersState=JSON.parse(JSON.stringify(state));
            bannersState.banners=action.payload;
            return bannersState;
    }
    return state;
}