import { combineReducers } from 'redux';

import { menuReducer } from './sankiMenu'
import { ingredientsReducer } from './sankiIngredients'
// import { constructorIngredientsReducer } from './sankiConstructor'

const rootReducer = combineReducers({
  menu: menuReducer,
  ingredients: ingredientsReducer,
  // constructor: constructorIngredientsReducer
});

export default rootReducer;