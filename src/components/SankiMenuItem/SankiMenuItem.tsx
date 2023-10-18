import React, { FC } from 'react';
import styles from './SankiMenuItem.module.css';
import { useAppDispatch, useAppSelector } from '../../services/hooks/useDispatch';
import { addIngredient, removeIngredient } from '../../services/actions/sankiConstructor';
import { useMediaQuery } from 'react-responsive';

type Props = {
    ingredient: any;
    menuItem: any;
};

const SankiMenuItem: FC<Props> = ({ ingredient, menuItem }) => {
    const isDesktop = useMediaQuery({ minWidth: 961 });
    const isMobile = useMediaQuery({ maxWidth: 450 });

    const dispatch = useAppDispatch();
    const selectedIngredients = useAppSelector((store: any) => store.selectedIngredients.selectedIngredients);
    const cartItemCount = selectedIngredients.filter((item: any) => item.id === ingredient.id && item.dayOfTheWeek === menuItem.header).length;

    const handleAddIngredient = () => {
        dispatch(addIngredient(ingredient, menuItem.header));
    };

    const handleRemoveIngredient = () => {
        const existingIngredient = selectedIngredients.find((item: any) => item.id === ingredient.id && item.dayOfTheWeek === menuItem.header);
        if (existingIngredient) {
            dispatch(removeIngredient(existingIngredient.uuid, menuItem.header));
        }
    };

    const DesktopView = () => (
        <></>
    )
    const MobileView = () => (
        <li className={`${styles.card} mb-5`} key={ingredient.id}>
            <div className={`${styles.cardItem}`}>
                <div className='w-80'>
                    <p>{ingredient.name}</p>
                    <p className='textColorSecondary fs-2 mt-1'>{ingredient.ingredients}</p>
                </div>

                <div className='flex flexAlignCenter mt-2'>
                    {cartItemCount > 0 ? (
                        <div className='w-30 flex flexAlignCenter flexBetween'>
                            <button className={`${styles.buttonIncrement} textColorWhite`} onClick={handleRemoveIngredient}>-</button>
                            <span className='textDefaultBold'>{cartItemCount}</span>
                            <button className={`${styles.buttonIncrement} textColorWhite`} onClick={handleAddIngredient}>+</button>
                        </div>
                    ) : (
                        <button className='w-30 buttonDefault textColorWhite' onClick={handleAddIngredient}>Добавить</button>
                    )}

                    <p className='ml-3 textDefaultBold'>{ingredient.price} р.</p>
                </div>
            </div>

            <div className={`${styles.cardItem}`}>
                <picture className={`${styles.picture}`}>
                    <img src={ingredient.image} alt="" />
                </picture>
            </div>
        </li>
    )

    return (
        <>
            {isDesktop && DesktopView()}
            {isMobile && MobileView()}
        </>
    );
};

export default SankiMenuItem;