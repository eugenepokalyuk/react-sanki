import React from 'react';
import styles from './SankiDelivery.module.css';
import image from '../../images/image-2.png'
import { useMediaQuery } from 'react-responsive';
const SankiDelivery = () => {
    const isDesktop = useMediaQuery({ minWidth: 961 });
    const isMobile = useMediaQuery({ maxWidth: 450 });

    const DesktopView = () => (
        <></>
    )
    const MobileView = () => (
        <section className={styles.container}>
            <article className={styles.card}>
                <div className='marginAuto textColorWhite'>
                    <h1 className='h1'>Доставка завтраков <br />в Шерегеше</h1>
                </div>

                <ul className={`${styles.cardList} flex`}>
                    <li className={`${styles.circleNubmer}`}>1</li>
                    <li className='textDefault textColorWhite fs-3'>Принимаем заказы до 20:00, на завтра, или на неделю вперед.</li>
                </ul>

                <ul className={`${styles.cardList} flex`}>
                    <li className={`${styles.circleNubmer}`}>2</li>
                    <li className='textDefault textColorWhite fs-3'>Привозим горячий завтрак с 8 до 8:30, до подъезда или дома.</li>
                </ul>

                <picture className={`${styles.picture}`}>
                    <img src={image} alt="" />
                </picture>
            </article>
        </section>
    )
    return (
        <>
            {isDesktop && DesktopView()}
            {isMobile && MobileView()}
        </>
    );
}

export default SankiDelivery;