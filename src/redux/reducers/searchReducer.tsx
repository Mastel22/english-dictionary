import * as types from '../actions/types';

const initialState = {
    definition: [],
    text: {}
};

const definitionReducer = (state = initialState, action: { type: string; definitions: string; }) =>{
    switch(action.type){
        case types.GET_DEFINITIONS:
            return Object.assign({}, state, { definition: action.definitions })
        default:
            return state;
    }
}

export default definitionReducer;
