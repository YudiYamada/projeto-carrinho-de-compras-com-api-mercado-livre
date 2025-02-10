import React, { useContext, useState } from "react";
import { SectionCartStyled, DivCartItemsStyled, DivCartResumeStyled } from "./Cart.Styles";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

function Cart() {
    const { cartItems, isCartVisible } = useContext(AppContext);
    const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

    return (
        <SectionCartStyled className={isCartVisible ? "cart-active" : ""}>
            <DivCartItemsStyled>
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} data={cartItem} />
                ))}
            </DivCartItemsStyled>

            <DivCartResumeStyled>{formatCurrency(totalPrice, "BRL")}</DivCartResumeStyled>
        </SectionCartStyled>
    );
}

export default Cart;
