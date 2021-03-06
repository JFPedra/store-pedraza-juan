 import {combineReducers} from 'redux'

 const productReducer = (state = [] , action) => {
    switch (action.type) {
        case 'PRODUCTS':
            return action.products;
        case 'REDEEM_HISTORY':
            return action.products;
        default:
            return state;
    }
};

const userReducer = (state = {}, action) => {
    switch(action.type) {
        case 'USER':
            return action.user;
        case 'ADDPOINTS':
            return({
                ...state,
                points: action.newPoints
            })
        default:
            return state;
    }
}

const loadingReducer =(state = true, action) =>{
    switch(action.type) {
        case 'LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
const filtersReducer = (state={category:'', price:[0, 3000]}, action) => {
    switch(action.type) {
        case 'CATEGORY':
            return ({
                ...state,
                category: action.category
            });
        case 'PRICE':
            return ({
                ...state,
                price: action.price
            });
        default:
            return state;
    }
}
const isRedeemHistoryReducer = (state = false , action) => {
    switch(action.type) {
        case 'IS_REDEEMHISTORY':
            return action.isRedeemHistory;
        default:
            return state;
    }
}
const redeemProductReducer = (state = "", action) =>{
    switch(action.type) {
        case 'SUCCESS':
            return action.type;
        case 'FAILED':
            return action.type;
            case 'RESET':
            return '';
        default:
            return state;
    }
}
export default combineReducers({
    userReducer,
    productReducer,
    loadingReducer,
    isRedeemHistoryReducer,
    filtersReducer,
    redeemProductReducer
})