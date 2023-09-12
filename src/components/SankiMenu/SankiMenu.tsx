import React from 'react';
import { useAppSelector } from '../../services/hooks/redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './SankiMenu.module.css';
import SankiMenuItem from '../SankiMenuItem/SankiMenuItem';

const SankiMenu = () => {
    const selectedMenu = useAppSelector((store) => store.menu.menu);
    const selectedIngredients = useAppSelector((store) => store.ingredients.ingredients);

    return (
        <>
            {selectedMenu && selectedMenu.map((menuItem: any) => {
                const ingredientsForMenu = menuItem.menu.map((menuItemId: string) => {
                    const ingredient = selectedIngredients.find((ingredient: any) => ingredient.id === parseInt(menuItemId));
                    return ingredient ? ingredient : null;
                }).filter((ingredient: any) => ingredient !== null);

                return (
                    <section className={styles.section} key={uuidv4()}>
                        <article className={styles.article}>
                            <h2 className={styles.articleHeader}>{menuItem.header}, {menuItem.id} Февраля</h2>
                            <ul className={styles.card}>
                                {ingredientsForMenu.map((ingredient: any) => (
                                    <SankiMenuItem key={uuidv4()} ingredient={ingredient} menuItem={menuItem} />
                                ))}
                            </ul>
                        </article>
                    </section>
                );
            })}
        </>
    );
}

export default SankiMenu;