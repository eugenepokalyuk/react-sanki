import { combineReducers } from 'redux';

import { menuReducer } from './sankiMenu'
import { ingredientsReducer } from './sankiIngredients'
import { constructorReducer } from './sankiConstructor';

const rootReducer = combineReducers({
  menu: menuReducer,
  ingredients: ingredientsReducer,
  selectedIngredients: constructorReducer
});

export default rootReducer;