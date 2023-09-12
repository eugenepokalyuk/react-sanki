import { ADD_INGREDIENT } from '../actions/sankiConstructor';

const initialState = {
  selectedIngredients: [],
};

export const constructorReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients, action.payload],
      };
    default:
      return state;
  }
};