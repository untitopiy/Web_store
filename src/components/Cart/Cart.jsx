import React from "react";
import styles from "../../styles/Cart.module.css";
import { sumBy } from "../../utils/common";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../features/user/userSlice";

const Cart = () => {
    const { cart } = useSelector(({ user }) => user);
    const dispatch = useDispatch();

    const changeQuantity = (item, quantity) => {
        dispatch(addItemToCart({ ...item, quantity }));
    };

    const removeItem = (id) => {
        dispatch(removeItemFromCart({ id }));
    };

    return ( 
        <section className={styles.cart}>
            <h2 className={styles.title}>Your Cart</h2>

            {!cart.length ? (
                <div className={styles.empty}>Here is empty</div>
            ) : (
                <>
                    <div className={styles.list}>
                        {cart.map((item) => {
                            const { title, category, images, price, id, quantity } = item;
                            return (
                                <div className={styles.item} key={id}>
                                    <div
                                        className={styles.image}
                                        style={{ backgroundImage: `url(${images[0]})` }}
                                    />
                                    <div className={styles.info}>
                                        <div className={styles.name}>{title}</div>
                                        <div className={styles.category}>{category.name}</div>
                                    </div>
                                    <div className={styles.price}>{price}$</div>
                                    <div className={styles.quantity}>
                                        x{quantity}
                                        <div
                                            className={styles.minus}
                                            onClick={() => changeQuantity(item, Math.max(1, quantity - 1))}
                                        >
                                            {/* Здесь должен быть минус svg */}
                                        </div>
                                        <span>{quantity}</span>
                                        <div
                                            className={styles.plus}
                                            onClick={() => changeQuantity(item, quantity + 1)}
                                        >
                                            {/* Здесь должен быть плюс svg */}
                                        </div>
                                    </div>
                                    <div className={styles.total}>{price * quantity}$</div>
                                    <div className={styles.close} onClick={() => removeItem(id)}>
                                        {/* Здесь должен быть svg для удаления */}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.total}>
                            Total Price:{" "}
                            <span>
                                {sumBy(cart.map(({ quantity, price }) => quantity * price))}$
                            </span>
                        </div>
                        <button className={styles.proceed}>Proceed to checkout</button>
                    </div>
                </>
            )}
        </section>
    );
};

export default Cart;
