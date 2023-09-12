export const ADD_INGREDIENT: "ADD_INGREDIENT" = "ADD_INGREDIENT";

export const addIngredient = (ingredient: any) => ({
  type: ADD_INGREDIENT,
  payload: ingredient,
});