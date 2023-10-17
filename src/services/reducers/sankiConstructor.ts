import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../actions/sankiConstructor';

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
    case REMOVE_INGREDIENT:
      const { uuid, dayOfTheWeek } = action.payload;
      const updatedIngredients = state.selectedIngredients.filter((ingredient: any) => {
        return !(ingredient.uuid === uuid && ingredient.dayOfTheWeek === dayOfTheWeek);
      });
      return {
        ...state,
        selectedIngredients: updatedIngredients,
      };
    default:
      return state;
  }
};
