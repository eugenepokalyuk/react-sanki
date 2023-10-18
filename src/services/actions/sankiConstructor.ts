import { v4 as uuidv4 } from 'uuid';

export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const ADD_INGREDIENT = "ADD_INGREDIENT";

export const addIngredient = (ingredient: any, dayOfTheWeek: any) => ({
  type: ADD_INGREDIENT,
  payload: {
    ...ingredient,
    dayOfTheWeek,
    uuid: uuidv4(),
  },
});

export const removeIngredient = (uuid: any, dayOfTheWeek: any) => ({
  type: REMOVE_INGREDIENT,
  payload: {
    uuid,
    dayOfTheWeek,
  },
});
