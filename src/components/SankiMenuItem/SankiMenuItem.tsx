import React, { FC } from 'react';
import styles from './SankiMenuItem.module.css';
import { useAppDispatch, useAppSelector } from '../../services/hooks/redux';
import { addIngredient, removeIngredient } from '../../services/actions/sankiConstructor';

type Props = {
    ingredient: any;
    menuItem: any;
};

const SankiMenuItem: FC<Props> = ({ ingredient, menuItem }) => {
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
    return (
        <li className={styles.cardItem} key={ingredient.id}>
            <div className={styles.itemImage}>
                <picture>
                    <img src={ingredient.image} alt="" />
                </picture>
            </div>

            <div className={styles.itemDescription}>
                <p className={styles.descriptionHeader}>{ingredient.name}</p>
                <p className={styles.descriptionText}>{ingredient.ingredients}</p>
            </div>

            <div className={styles.itemPrice}>
                <p>{ingredient.price} р.</p>
            </div>

            <div className={styles.itemButton}>
                {cartItemCount > 0 ? (
                    <>
                        <button className={styles.button} onClick={handleRemoveIngredient}>-</button>
                        <span>{cartItemCount}</span>
                        <button className={styles.button} onClick={handleAddIngredient}>+</button>
                    </>
                ) : (
                    <button className={styles.button} onClick={handleAddIngredient}>Добавить</button>
                )}
            </div>
        </li>
    );
};

export default SankiMenuItem;