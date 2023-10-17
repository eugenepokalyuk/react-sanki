import React from 'react';
import styles from './SankiDelivery.module.css';
import image from '../../images/image-2.png'
import SankiConstructor from '../SankiConstructor/SankiConstructor';
const SankiDelivery = () => {
    return (
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <article className={styles.width70}>
                    <div className={`${styles.card} ${styles.mb6}`}>
                        <h1 className={`${styles.cardHeader} ${styles.fontSizeLarge}`}>Доставка завтраков<br />в Шерегеше</h1>
                    </div>

                    <ul className={`${styles.card} ${styles.mb6}`}>
                        <li className={`${styles.cardHeader} ${styles.fontColorTransparent}`}>1</li>
                        <li className={styles.cardItem}>Принимаем заказы до 20:00, на завтра, или на неделю вперед.</li>
                    </ul>

                    <ul className={`${styles.card} ${styles.cardText} ${styles.mb6}`}>
                        <li className={`${styles.cardHeader} ${styles.fontColorTransparent}`}>2</li>
                        <li className={styles.cardItem}>Привозим горячий завтрак с 8 до 8:30, до подъезда или дома.</li>
                    </ul>
                </article>

                <div className={`${styles.width30} ${styles.cardText} ${styles.frontForward}`}>
                    <img className={`${styles.imageContainer}`} src={image} alt="" />
                </div>
            </section>
        </div>
    );
}

export default SankiDelivery;