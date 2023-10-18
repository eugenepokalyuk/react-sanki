import React, { useState, useEffect } from 'react';
import styles from './SankiShoppingCart.module.css';
import { useAppSelector } from '../../services/hooks/useDispatch';
import { v4 as uuidv4 } from 'uuid';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { ORDER_CREATE_PATH } from '../../utils/routePath';

const SankiShoppingCart = () => {
    const isDesktop = useMediaQuery({ minWidth: 961 });
    const isMobile = useMediaQuery({ maxWidth: 450 });

    // const [] = useState<boolean>(false);

    const [totalPrice, setTotalPrice] = useState<number>(0)
    const selectedIngredients = useAppSelector((store: any) => store.selectedIngredients.selectedIngredients);
    const daysOfWeekOrder = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    const groupedIngredients = selectedIngredients.reduce((acc: any, item: any) => {
        if (acc[item.dayOfTheWeek]) {
            acc[item.dayOfTheWeek].push(item);
        } else {
            acc[item.dayOfTheWeek] = [item];
        }
        return acc;
    }, {});

    useEffect(() => {
        const newTotalPrice = calculateTotalPrice();
        setTotalPrice(newTotalPrice);
    }, [selectedIngredients]);

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        for (let i = 0; i < selectedIngredients.length; i++) {
            totalPrice += selectedIngredients[i].price;
        }
        return totalPrice;
    }
    const isActive = calculateTotalPrice() > 0 ? true : false
    const DesktopView = () => (
        <>
            <section>
                {selectedIngredients.length > 0
                    ? <article>
                        <h2>Корзина</h2>
                        {daysOfWeekOrder.map((dayOfTheWeek: string) => (
                            groupedIngredients[dayOfTheWeek] && (
                                <div key={uuidv4()}>
                                    <h2>{dayOfTheWeek}</h2>
                                    {groupedIngredients[dayOfTheWeek].map((item: any) => (
                                        <div key={uuidv4()}>
                                            <div>
                                                <p>{item.name}</p>
                                                <p>{item.ingredients}</p>
                                            </div>
                                            <p>{item.price} р.</p>
                                        </div>
                                    ))}
                                </div>
                            )
                        ))}

                        <div>
                            <div>
                                <h2>Итого:</h2>
                                <p>{calculateTotalPrice()} р.</p>
                            </div>
                        </div>

                    </article>
                    : <article>
                        <h2>В корзине<br />пока пусто</h2>
                    </article>}
            </section>

            <div>
                <p>Скидка при заказе на 7 день</p>
                <p>15%</p>
            </div>

            <button>Заказать</button>
        </>
    )
    const MobileView = () => (
        <div className={`${styles.ShoppingCartButton} flex flexAlignCenter flexCenter`}>
            <div className='flex flexBetween w-100'>
                {isActive
                    ? <Link to={ORDER_CREATE_PATH} className='flex flex flexAlignCenter flexBetween w-100'>
                        <p className='textBold textColorWhite'>Корзина</p>
                        <p className='textBold textColorWhite'>{calculateTotalPrice()} р.</p>
                    </Link>
                    : <Link to="#" className='flex flex flexAlignCenter flexCenter w-100'>
                        <p className='textBold textColorWhite'>Корзина пуста</p>
                    </Link>
                }
            </div>
        </div>
    )

    return (
        <>
            {isDesktop && DesktopView()}
            {isMobile && MobileView()}
        </>
    );
}

export default SankiShoppingCart;
