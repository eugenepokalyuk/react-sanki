import { Link, useNavigate } from 'react-router-dom';
import SankiShoppingCart from '../../components/SankiShoppingCart/SankiShoppingCart';
import { useAppDispatch, useAppSelector } from '../../services/hooks/useDispatch';
import { ORDER_CREATE_PATH, ORDER_DETAILS_PATH } from '../../utils/routePath';
import styles from './OrderConstructor.module.css';
import { useEffect, useState } from 'react';
import { OrderDetails } from '../OrderDetails/OrderDetails';
import { fetchCreateOrder } from '../../utils/api';
import { FETCH_CREATE_ORDER_FAILURE, FETCH_CREATE_ORDER_REQUEST, FETCH_CREATE_ORDER_SUCCESS } from '../../services/actions/sankiOrder';

export const OrderConstructor = () => {
    const selectedIngredients = useAppSelector((store: any) => store.selectedIngredients.selectedIngredients);
    const navigate = useNavigate()
    const [address, setAddress] = useState<string>('');
    const [submit, setSubmit] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        for (let i = 0; i < selectedIngredients.length; i++) {
            totalPrice += selectedIngredients[i].price;
        }
        return totalPrice;
    }

    useEffect(() => {
        if (calculateTotalPrice() === 0) {
            navigate('/')
        }
    })

    const handleCreateOrder = () => {
        // fetchCreateOrder()
        // if (ok) {

        // } else {

        // }
        // dispatch()

        // fetchCreateOrder(address)
        // .then(res => {
        //     dispatch({ type: FETCH_MENU_SUCCESS, payload: res });
        // })
        // .catch(error => {
        //     dispatch({ type: FETCH_MENU_FAILURE, payload: error });
        // });

        dispatch({ type: FETCH_CREATE_ORDER_REQUEST });
        dispatch({ type: FETCH_CREATE_ORDER_SUCCESS, payload: fetchCreateOrder(address) });

        navigate(ORDER_DETAILS_PATH)
        // dispatch({ type: FETCH_CREATE_ORDER_FAILURE });
    }

    return (
        <section className={`${styles.container}`}>
            {/* {!submit ? */}
            <article>
                <h1 className="textBold textColorWhite fs-5">Куда</h1>
                <h1 className="textBold textColorWhite fs-5">привозить</h1>
                <h1 className="textBold textColorWhite fs-5">завтрак?</h1>

                <div className='mt-3'>
                    <ul className={`${styles.card} ${styles.cardGradient} flex`}>
                        <li className={`${styles.warningElement} flex flexAlignCenter flexCenter textDefaultBold textColorWhite`}>!</li>
                        <li className='w-60 textDefault fs-2'>Пока доставляем только по улицам Гагарина и Дзержинского</li>
                    </ul>
                </div>

                <div className={`${styles.card} flex flexCenter`}>
                    <textarea className={`${styles.textarea} textBold`} placeholder='Укажите адрес дома и подъезд' value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                </div>

                <button className={`${styles.ShoppingCartButton} flex flexAlignCenter flexBetween w-100`} onClick={handleCreateOrder}>
                    <p className='textBold textColorWhite'>Корзина</p>
                    <p className='textBold textColorWhite'>{calculateTotalPrice()} р.</p>
                </button>
            </article>
            {/* : <OrderDetails address={address} /> } */}
        </section>
    )
};