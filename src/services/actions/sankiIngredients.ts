export const FETCH_INGREDIENTS_REQUEST: "FETCH_INGREDIENTS_REQUEST" = "FETCH_INGREDIENTS_REQUEST";
export const FETCH_INGREDIENTS_SUCCESS: "FETCH_INGREDIENTS_SUCCESS" = "FETCH_INGREDIENTS_SUCCESS";
export const FETCH_INGREDIENTS_FAILURE: "FETCH_INGREDIENTS_FAILURE" = "FETCH_INGREDIENTS_FAILURE";

export type TIngredients =
    | IFetchIngredientsRequestAction
    | IFetchIngredientsSuccessAction
    | IFetchIngredientsFailureAction;

export interface IFetchIngredientsRequestAction {
    readonly type: typeof FETCH_INGREDIENTS_REQUEST;
}

export interface IFetchIngredientsSuccessAction {
    readonly type: typeof FETCH_INGREDIENTS_SUCCESS;
    readonly payload: any;
    // readonly payload: IIngredient[];
}

export interface IFetchIngredientsFailureAction {
    readonly type: typeof FETCH_INGREDIENTS_FAILURE;
    readonly payload: string;
}

enum ActionTypes {
    FETCH_INGREDIENTS_REQUEST = "FETCH_INGREDIENTS_REQUEST",
    FETCH_INGREDIENTS_SUCCESS = "FETCH_INGREDIENTS_SUCCESS",
    FETCH_INGREDIENTS_FAILURE = "FETCH_INGREDIENTS_FAILURE",
}

export const fetchIngredientsRequest = (): IFetchIngredientsRequestAction => ({
    type: FETCH_INGREDIENTS_REQUEST,
});

export const fetchIngredientsSuccess = (
    data: any
    // data: IIngredient[]
): IFetchIngredientsSuccessAction => ({
    type: ActionTypes.FETCH_INGREDIENTS_SUCCESS,
    payload: data,
});

export const fetchIngredientsFailure = (
    error: string
): IFetchIngredientsFailureAction => ({
    type: FETCH_INGREDIENTS_FAILURE,
    payload: error,
});