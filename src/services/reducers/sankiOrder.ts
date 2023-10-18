import {
    FETCH_CREATE_ORDER_REQUEST,
    FETCH_CREATE_ORDER_SUCCESS,
    FETCH_CREATE_ORDER_FAILURE
} from "../actions/sankiOrder";
// import { ActionTypes } from "../types/ingredients/ActionTypes";
// import { IIngredientsState, RootState } from "../types/types";

const initialState: any /* IIngredientsState */ = {
    response: [],
    loading: false,
    error: null,
};

export const orderReducer = (
    state = initialState,
    action: any // ActionTypes
) => {
    switch (action.type) {
        case FETCH_CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_CREATE_ORDER_SUCCESS:
            return {
                ...state,
                response: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_CREATE_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};