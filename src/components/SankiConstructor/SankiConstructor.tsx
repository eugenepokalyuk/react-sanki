import React from 'react';
import styles from './SankiConstructor.module.css';
import { useAppSelector } from '../../services/hooks/redux';
import { v4 as uuidv4 } from 'uuid';

const SankiConstructor = () => {
    const selectedIngredients = useAppSelector((store: any) => store.selectedIngredients.selectedIngredients);

    // Определяем порядок дней недели
    const daysOfWeekOrder = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

    // Группируем заказы по дням недели
    const groupedIngredients = selectedIngredients.reduce((acc: any, item: any) => {
        // Создаем или добавляем заказ в соответствующий день недели
        if (acc[item.dayOfTheWeek]) {
            acc[item.dayOfTheWeek].push(item);
        } else {
            acc[item.dayOfTheWeek] = [item];
        }
        return acc;
    }, {});

    return (
        <>
            <section className={styles.section}>
                {
                    selectedIngredients.length > 0
                        ? <article className={styles.card}>
                            <h2 className={`${styles.cardHeader} ${styles.colorWhite}`}>Корзина</h2>
                            {daysOfWeekOrder.map((dayOfTheWeek: string) => (
                                groupedIngredients[dayOfTheWeek] && (
                                    <div key={uuidv4()} className={styles.cardItem}>
                                        <h2 className={styles.cardHeader2}>{dayOfTheWeek}</h2>
                                        {groupedIngredients[dayOfTheWeek].map((item: any) => (
                                            <div key={uuidv4()} className={styles.cardFlex}>
                                                <div className={styles.itemContainer}>
                                                    <p className={styles.itemName}>{item.name}</p>
                                                    <p className={`${styles.itemDescription} ${styles.fontSizeSmall}`}>{item.ingredients}</p>
                                                </div>
                                                <p className={styles.itemPrice}>{item.price} р.</p>
                                            </div>
                                        ))}
                                    </div>
                                )
                            ))}
                        </article>
                        : <article className={styles.article}>
                            <h2 className={`${styles.cardHeader} ${styles.colorGray}`}>В корзине<br />пока пусто</h2>
                        </article>
                }
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
