import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import SankiDelivery from '../SankiDelivery/SankiDelivery';
import SankiConstructor from '../SankiConstructor/SankiConstructor';
import SankiMenu from '../SankiMenu/SankiMenu';
import AppFooter from '../AppFooter/AppFooter';
import { useAppDispatch, useAppSelector } from '../../services/hooks/redux';

import { fetchIngredientsData, fetchMenuData } from '../../utils/api';
import { FETCH_MENU_FAILURE, FETCH_MENU_REQUEST, FETCH_MENU_SUCCESS } from '../../services/actions/sankiMenu';
import { FETCH_INGREDIENTS_FAILURE, FETCH_INGREDIENTS_REQUEST, FETCH_INGREDIENTS_SUCCESS } from '../../services/actions/sankiIngredients';

const App = () => {
  const dispatch = useAppDispatch();
  const [loading, isLoading] = useState<boolean>(Boolean);


  useEffect(() => {
    dispatch({ type: FETCH_MENU_REQUEST });
    isLoading(true);

    fetchMenuData()
      .then(res => {
        dispatch({ type: FETCH_MENU_SUCCESS, payload: res });
      })
      .catch(error => {
        dispatch({ type: FETCH_MENU_FAILURE, payload: error });
      });
  }, [dispatch])

  useEffect(() => {
    dispatch({ type: FETCH_INGREDIENTS_REQUEST });
    isLoading(true);

    fetchIngredientsData()
      .then(res => {
        dispatch({ type: FETCH_INGREDIENTS_SUCCESS, payload: res });
      })
      .catch(error => {
        dispatch({ type: FETCH_INGREDIENTS_FAILURE, payload: error });
      });
  }, [dispatch])

  return (
    <>
      <AppHeader />
      <main className={styles.wrapper}>
        <section className={styles.w70}>
          <SankiDelivery />
          <SankiMenu />
        </section>

        <nav className={styles.w30}>
          <SankiConstructor />
        </nav>
      </main>
      <AppFooter />
    </>
  );
}

export default App;
