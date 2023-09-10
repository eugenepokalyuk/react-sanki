import {
    FETCH_MENU_REQUEST,
    FETCH_MENU_SUCCESS,
    FETCH_MENU_FAILURE
} from "../actions/sankiMenu";
// import { ActionTypes } from "../types/ingredients/ActionTypes";

// import { IIngredientsState, RootState } from "../types/types";

const initialState: any /* IIngredientsState */ = {
    menu: [],
    loading: false,
    error: null,
};

// export const selectLoading = (state: RootState) => state.ingredients.loading;
// export const selectError = (state: RootState) => state.ingredients.error;

export const menuReducer = (
    state = initialState,
    action: any // ActionTypes
) => {
    switch (action.type) {
        case FETCH_MENU_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_MENU_SUCCESS:
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_MENU_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};