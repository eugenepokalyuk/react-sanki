import React from 'react';
import styles from './SankiConstructor.module.css';
import SankiDelivery from '../SankiDelivery/SankiDelivery';
import SankiMenu from '../SankiMenu/SankiMenu';
import SankiShoppingCart from '../SankiShoppingCart/SankiShoppingCart';

const SankiConstructor = () => {
    return (
        <main>
            <section className='mb-5'>
                <SankiDelivery />
                <SankiMenu />
            </section>

            <nav>
                <SankiShoppingCart />
            </nav>
        </main>
    );
}

export default SankiConstructor;
