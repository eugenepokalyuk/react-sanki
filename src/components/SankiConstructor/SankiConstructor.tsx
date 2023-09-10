import React from 'react';
import styles from './SankiConstructor.module.css';
import { useAppSelector } from '../../services/hooks/redux';

const SankiConstructor = () => {
    const constructor = useAppSelector(state => state.constructor);
    const orders = useAppSelector(store => store.constructor)
    console.log('orders', orders)
    return (
        <>
            <section className={`${styles.section}`}>
                <article className={`${styles.article}`}>
                    <h2 className={styles.cardHeader}>В корзине<br />пока пусто</h2>
                </article>
            </section>
            <div className={styles.promo}>
                <p>Скидка при заказе на 7 день</p>
                <p>15%</p>
            </div>
            <button className={styles.button}>Заказать</button>
        </>
    );
}
export default SankiConstructor;