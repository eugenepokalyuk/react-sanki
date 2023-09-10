import { FC, useState } from 'react';
import styles from './SankiMenuItem.module.css';
import { useAppDispatch } from '../../services/hooks/redux';
// import { ADD_INGREDIENT_TO_CONSTRUCTOR, addIngredientToConstructor } from '../../services/actions/sankiConstructor';

type Props = {
    ingredient: any,
}

const SankiMenuItem: FC<Props> = ({ ingredient }) => {
    const dispatch = useAppDispatch();
    const [loading, isLoading] = useState<boolean>(Boolean);
    const handleAddIngredient = (ingredient: any) => {
        isLoading(true);
        console.log('ingredient', ingredient);
        // dispatch(addIngredientToConstructor(ingredient))
    }

    return (
        ingredient && (
            <>
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
                        <button className={styles.button} onClick={() => { handleAddIngredient(ingredient) }}>Добавить</button>
                    </div>
                </li>
            </>
        )
    )
}

export default SankiMenuItem;