import { AnyAction } from "redux";

const initialState =();

function reducer(state = initialState, action: AnyAction){
switch(action.type){
    case types.CREATE_GRID:
        return(
            ...state,
            grid:createfullGrid
        )

        const types.SELECT_BLOCK:
        return [..state, selectedBlock:action.coords]
    default:
        return state;
}
}

export default reducer;

