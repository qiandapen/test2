const defaultState={
  hVal:"block"
};
export default (state=defaultState,action)=>{
    switch (action.type) {
        case "CHANGE_VAL":let hState=JSON.parse(JSON.stringify(state));
                    hState.hVal="none";
                    return hState;

    }
    return state;
}
