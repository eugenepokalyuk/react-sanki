import React from 'react';
import styles from './AppHeader.module.css';
import { NavLink, useMatch } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import { DEFAULT_PATH, PHONE_PATH, ORDER_CREATE_PATH, ORDER_DETAILS_PATH } from '../../utils/routePath';
import { ReactComponent as BraketLeft } from '../../images/braketLeft.svg'
const AppHeader = () => {
    const homeRoute = useMatch(DEFAULT_PATH);
    const phoneRoute = useMatch(PHONE_PATH);
    const orderCreateRoute = useMatch(ORDER_CREATE_PATH);
    const orderDetailsRoute = useMatch(ORDER_DETAILS_PATH);

    const isDesktop = useMediaQuery({ minWidth: 961 });
    const isMobile = useMediaQuery({ maxWidth: 450 });

    const DesktopView = () => (
        <></>
    )
    const MobileView = () => (
        <header className={styles.header}>
            <nav className={`${styles.nav} flex flexBetween`}>
                {orderCreateRoute
                    ? <ul>
                        <NavLink to='/' className='textDefault textBold textColorGray'>
                            <li className='fs-3 p-3'><BraketLeft />Вернуться назад</li>
                        </NavLink>
                    </ul>
                    : orderDetailsRoute
                        ? <ul className='marginAuto'>
                            <NavLink to='/' className={`textDefault textBold ${orderDetailsRoute ? 'textColorWhite' : 'textColorGray'}`}>
                                <li className='fs-3 p-3'>SANKI</li>
                            </NavLink>
                        </ul>
                        : <>
                            <ul>
                                <NavLink to='/' className={`textDefault textBold ${homeRoute ? 'textColorWhite' : 'textColorGray'}`}>
                                    <li className='fs-3 p-3'>SANKI</li>
                                </NavLink>
                            </ul>
                            <ul>
                                <NavLink to='/phone' className={`textDefault textBold ${phoneRoute ? 'textColorWhite' : 'textColorGray'}`}>
                                    <li className='fs-3 p-3'>Телефон</li>
                                </NavLink>
                            </ul>
                        </>
                }
            </nav>
        </header>
    )

    return (
        <>
            {isDesktop && DesktopView()}
            {isMobile && MobileView()}
        </>
    );
}

export default AppHeader;
