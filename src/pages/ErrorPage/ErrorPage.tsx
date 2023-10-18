import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

export const ErrorPage = () => (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className='textColorWhite'>Ой, 404 Ошибка!</h1>
                <p className='fs-3 mt-2 textDefaultBold textColorWhite'>Запрошенная вами страница не существует проверьте адрес или попробуйте зайти на<Link to='/' className={`${styles.link} link ml-1`}>домашнюю страницу</Link></p>
            </div>
        </div>
    </div>
);