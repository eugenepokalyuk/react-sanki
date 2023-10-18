export const FETCH_CREATE_ORDER_REQUEST: "FETCH_CREATE_ORDER_REQUEST" = "FETCH_CREATE_ORDER_REQUEST";
export const FETCH_CREATE_ORDER_SUCCESS: "FETCH_CREATE_ORDER_SUCCESS" = "FETCH_CREATE_ORDER_SUCCESS";
export const FETCH_CREATE_ORDER_FAILURE: "FETCH_CREATE_ORDER_FAILURE" = "FETCH_CREATE_ORDER_FAILURE";

export type TCreateOrder =
    | IFetchCreateOrderRequestAction
    | IFetchCreateOrderSuccessAction
    | IFetchCreateOrderFailureAction;

export interface IFetchCreateOrderRequestAction {
    readonly type: typeof FETCH_CREATE_ORDER_REQUEST;
}

export interface IFetchCreateOrderSuccessAction {
    readonly type: typeof FETCH_CREATE_ORDER_SUCCESS;
    readonly payload: any;
    // readonly payload: IIngredient[];
}

export interface IFetchCreateOrderFailureAction {
    readonly type: typeof FETCH_CREATE_ORDER_FAILURE;
    readonly payload: string;
}

enum ActionTypes {
    FETCH_CREATE_ORDER_REQUEST = "FETCH_CREATE_ORDER_REQUEST",
    FETCH_CREATE_ORDER_SUCCESS = "FETCH_CREATE_ORDER_SUCCESS",
    FETCH_CREATE_ORDER_FAILURE = "FETCH_CREATE_ORDER_FAILURE",
}

export const fetchCreateOrderRequest = (): IFetchCreateOrderRequestAction => ({
    type: FETCH_CREATE_ORDER_REQUEST,
});

export const fetchCreateOrderSuccess = (
    data: any
    // data: IIngredient[]
): IFetchCreateOrderSuccessAction => ({
    type: ActionTypes.FETCH_CREATE_ORDER_SUCCESS,
    payload: data,
});

export const fetchCreateOrderFailure = (
    error: string
): IFetchCreateOrderFailureAction => ({
    type: FETCH_CREATE_ORDER_FAILURE,
    payload: error,
});