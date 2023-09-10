import React from 'react';
import styles from './AppFooter.module.css';
import { NavLink } from 'react-router-dom';
const AppFooter = () => {

    const link = ({ isActive }: { isActive: boolean }) =>
        isActive ? `${styles.activeLink}` : `${styles.nonActiveLink}`;

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                {/* <ul className={styles.list}>
                    <NavLink to='/' className={link}>
                        <li className={styles.listItem}>Название</li>
                    </NavLink>
                </ul>
                <ul className={styles.list}>
                    <NavLink to='/telegram' className={link}>
                        <li className={styles.listItem}>Телеграм</li>
                    </NavLink>
                    <NavLink to='/email' className={link}>
                        <li className={styles.listItem}>Почта</li>
                    </NavLink>
                    <NavLink to='/phone' className={link}>
                        <li className={styles.listItem}>Телефон</li>
                    </NavLink>
                </ul> */}
            </nav>
        </header>
    );
}

export default AppFooter;
