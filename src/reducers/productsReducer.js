import * as types from '../actions/actionTypes';

export default function productsReducer (state = [], action) {
    // debugger;
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
            let newStateDelete =  state.filter(product => product.id != action.id);
            return newStateDelete;
            
        case types.UPDATE_PRODUCT:
            let newStateWithoutProductUpdate = state.filter(item => item.id !== action.product.id);
            return [
                action.product,  ...newStateWithoutProductUpdate
            ]

         case types.INC_VIEW:
             debugger;
             let newStateWithoutProductInc = state.filter(item => item.id !== action.product.id);
            return [
                action.product,  ...newStateWithoutProductInc
            ]
        
        default:
            return state;
    }
}


