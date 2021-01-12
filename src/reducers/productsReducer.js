import * as types from '../actions/actionTypes';

export default function productsReducer (state = [], action) {
    debugger;
    switch (action.type) {
        case types.GET_PRODUCTS:
            return action.products;
            
        case types.ADD_PRODUCT:
            return [
                ...state,
                action.product
            ];
        case types.DELETE_PRODUCT:
            // debugger;
            let newState =  state.filter(product => product.id != action.id);
            return newState;
            
               
        default:
            return state;
    }
}


