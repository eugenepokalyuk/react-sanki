import React, { useEffect, useState } from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import { useAppDispatch, useAppSelector } from '../../services/hooks/useDispatch';

import { fetchIngredientsData, fetchMenuData } from '../../utils/api';
import { FETCH_MENU_FAILURE, FETCH_MENU_REQUEST, FETCH_MENU_SUCCESS } from '../../services/actions/sankiMenu';
import { FETCH_INGREDIENTS_FAILURE, FETCH_INGREDIENTS_REQUEST, FETCH_INGREDIENTS_SUCCESS } from '../../services/actions/sankiIngredients';
import { DEFAULT_PATH, ERROR_PATH, ORDER_CREATE_PATH, ORDER_DETAILS_PATH } from '../../utils/routePath';
import { HomePage } from '../../pages/HomePage/HomePage';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { OrderPage } from '../../pages/OrderPage/OrderPage';
import { OrderDetails } from '../OrderDetails/OrderDetails';

const App = () => {
  const dispatch = useAppDispatch();
  const [loading, isLoading] = useState<boolean>(Boolean);
  const location = useLocation();
  const background = location.state && location.state.background;

  // useEffect(() => {
  //   dispatch({ type: FETCH_MENU_REQUEST });
  //   isLoading(true);

    // fetchMenuData()
    //   .then(res => {
    //     dispatch({ type: FETCH_MENU_SUCCESS, payload: res });
    //   })
    //   .catch(error => {
    //     dispatch({ type: FETCH_MENU_FAILURE, payload: error });
    //   });

  //     dispatch({ type: FETCH_INGREDIENTS_REQUEST });
  //     isLoading(true);

  //     fetchIngredientsData()
  //       .then(res => {
  //         dispatch({ type: FETCH_INGREDIENTS_SUCCESS, payload: res });
  //       })
  //       .catch(error => {
  //         dispatch({ type: FETCH_INGREDIENTS_FAILURE, payload: error });
  //       });
  // }, [dispatch])

  useEffect(() => {
    dispatch({ type: FETCH_MENU_SUCCESS, payload: fetchMenuData() });
    dispatch({ type: FETCH_INGREDIENTS_SUCCESS, payload: fetchIngredientsData() });
  })

  return (
    <>
      <AppHeader />
      {
        !loading
          ?
          <>
            <Routes location={background || location}>
              <Route path={DEFAULT_PATH} element={<ProtectedRoute auth={false} children={<HomePage />} />} />
              <Route path={ORDER_CREATE_PATH} element={<ProtectedRoute auth={false} children={<OrderPage />} />} />
              <Route path={ORDER_DETAILS_PATH} element={<ProtectedRoute auth={false} children={<OrderDetails />} />} />
              <Route path={ERROR_PATH} element={<ProtectedRoute auth={false} children={<ErrorPage />} />} />
            </Routes>
          </>
          : <></>
      }
    </>
  );
}

export default App;
