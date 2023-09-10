export const FETCH_MENU_REQUEST: "FETCH_MENU_REQUEST" = "FETCH_MENU_REQUEST";
export const FETCH_MENU_SUCCESS: "FETCH_MENU_SUCCESS" = "FETCH_MENU_SUCCESS";
export const FETCH_MENU_FAILURE: "FETCH_MENU_FAILURE" = "FETCH_MENU_FAILURE";

export type TMenu =
    | IFetchMenuRequestAction
    | IFetchMenuSuccessAction
    | IFetchMenuFailureAction;

export interface IFetchMenuRequestAction {
    readonly type: typeof FETCH_MENU_REQUEST;
}

export interface IFetchMenuSuccessAction {
    readonly type: typeof FETCH_MENU_SUCCESS;
    readonly payload: any;
    // readonly payload: IIngredient[];
}

export interface IFetchMenuFailureAction {
    readonly type: typeof FETCH_MENU_FAILURE;
    readonly payload: string;
}

enum ActionTypes {
    FETCH_MENU_REQUEST = "FETCH_MENU_REQUEST",
    FETCH_MENU_SUCCESS = "FETCH_MENU_SUCCESS",
    FETCH_MENU_FAILURE = "FETCH_MENU_FAILURE",
}

export const fetchMenuRequest = (): IFetchMenuRequestAction => ({
    type: FETCH_MENU_REQUEST,
});

export const fetchMenuSuccess = (
    data: any
    // data: IIngredient[]
): IFetchMenuSuccessAction => ({
    type: ActionTypes.FETCH_MENU_SUCCESS,
    payload: data,
});

export const fetchMenuFailure = (
    error: string
): IFetchMenuFailureAction => ({
    type: FETCH_MENU_FAILURE,
    payload: error,
});