import { FC, useEffect } from 'react';
import styles from './OrderDetails.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { DEFAULT_PATH } from '../../utils/routePath';
import { useAppSelector } from '../../services/hooks/useDispatch';

type Props = {
    address?: string
}

type TOrderResponse = {
    success: boolean,
    address: string
}

export const OrderDetails: FC<Props> = ({ address }) => {
    const orderResponse: TOrderResponse = useAppSelector((store) => store.order.response);
    const navigate = useNavigate();
    useEffect(() => {
        if (!orderResponse) {
            navigate('/')
        }
    })

    return (
        orderResponse.success
            ? <section className={`${styles.container} ${styles.containerDefault}`}>
                <article className={`${styles.article}`}>
                    <div>
                        <h1 className="textBold textColorWhite fs-5">Приняли<br />ваш заказ</h1>
                    </div>
                    <div className={`${styles.card} w-80 mt-3`}>
                        <p className='textDefault textColorWhite'>Привезем горячий завтрак 2 февраля, по адресу {orderResponse.address}, с 8 до 8:30.</p>

                        <p className='textDefault textColorWhite mt-2'>Если у вас возникнут вопросы — напишите нам в телеграмм или звоните +7 985 514-20-51</p>
                    </div>
                    <div className={`${styles.buttonContainer} flex flexAlignCenter flexCenter`}>
                        <div className='flex flexCenter w-100'>
                            <Link to={DEFAULT_PATH}>
                                <p className='textBold textColorWhite'>Жду завтраков</p>
                            </Link>
                        </div>
                    </div>
                </article>
            </section>
            : <section className={`${styles.container} ${styles.containerSecondary}`}>
                <article className={`${styles.article}`}>
                    <div>
                        <h1 className="textBold textColorWhite fs-5">Приняли<br />ваш заказ</h1>

                        <h1>{address}</h1>
                    </div>
                    <div className={`${styles.card} w-80 mt-3`}>
                        <p className='textDefault textColorWhite'>Попробуйте заказать еще раз или напишите нам в телеграм, мы что-нибудь придумаем</p>
                    </div>

                    <div className={`${styles.buttonSendTelegram} flex flexAlignCenter flexCenter`}>
                        <div className='flex flexCenter w-100'>
                            <Link to='https://t.me/PaperCranejs'>
                                <p className='textBold textColorWhite'>Написать в телеграм</p>
                            </Link>
                        </div>
                    </div>

                    <div className={`${styles.buttonBackToMenu} flex flexAlignCenter flexCenter`}>
                        <div className='flex flexCenter w-100'>
                            <Link to={DEFAULT_PATH}>
                                <p className='textBold'>На главную</p>
                            </Link>
                        </div>
                    </div>
                </article>
            </section>
    )
};