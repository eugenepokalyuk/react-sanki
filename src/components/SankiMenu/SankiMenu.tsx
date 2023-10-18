import React from 'react';
import { useAppSelector } from '../../services/hooks/useDispatch';
import { v4 as uuidv4 } from 'uuid';
import styles from './SankiMenu.module.css';
import SankiMenuItem from '../SankiMenuItem/SankiMenuItem';
import { useMediaQuery } from 'react-responsive';

const SankiMenu = () => {
    const selectedMenu = useAppSelector((store) => store.menu.menu);
    const selectedIngredients = useAppSelector((store) => store.ingredients.ingredients);

    const isDesktop = useMediaQuery({ minWidth: 961 });
    const isMobile = useMediaQuery({ maxWidth: 450 });

    const DesktopView = () => (
        <></>
    )
    const MobileView = () => (
        <>
            {selectedMenu && selectedMenu.map((menuItem: any) => {
                const ingredientsForMenu = menuItem.menu.map((menuItemId: string) => {
                    const ingredient = selectedIngredients.find((ingredient: any) => ingredient.id === parseInt(menuItemId));
                    return ingredient ? ingredient : null;
                }).filter((ingredient: any) => ingredient !== null);

                return (
                    <section key={uuidv4()}>
                        <article className={`${styles.card}`}>
                            <h2 className='textBold flex flexCenter mb-3'>{menuItem.header}, {menuItem.id} Февраля</h2>
                            <ul>
                                {ingredientsForMenu.map((ingredient: any) => (
                                    <SankiMenuItem key={uuidv4()} ingredient={ingredient} menuItem={menuItem} />
                                ))}
                            </ul>
                        </article>
                    </section>
                );
            })}
        </>
    )
    return (
        <>
            {isDesktop && DesktopView()}
            {isMobile && MobileView()}
        </>
    );
}

export default SankiMenu;