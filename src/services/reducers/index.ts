import { combineReducers } from 'redux';

import { menuReducer } from './sankiMenu'
import { ingredientsReducer } from './sankiIngredients'
import { constructorReducer } from './sankiConstructor';
import { authReducer } from './auth';
import { orderReducer } from './sankiOrder';

const rootReducer = combineReducers({
  menu: menuReducer,
  ingredients: ingredientsReducer,
  selectedIngredients: constructorReducer,
  auth: authReducer,
  order: orderReducer
});

export default rootReducer;