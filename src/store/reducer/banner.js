const defaultState={
    banners:[],
    grids:[],
    tabs:[]
};
export default (state=defaultState,action)=>{
    switch (action.type) {
        case "GET_BANNERS_FULFILLED":
            let bannersState=JSON.parse(JSON.stringify(state));
            bannersState.banners=action.payload.banners;
            bannersState.grids=action.payload.grids;
            bannersState.tabs=action.payload.tabs;
            // console.log(bannersState.banners);
            return bannersState;
    }
    return state;
}