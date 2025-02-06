import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartButtonStyled, CartStatus } from "./CartButton.Styles"


function CartButton() {
    return ( 
        <CartButtonStyled type='button'>
            <AiOutlineShoppingCart />
            <CartStatus>1</CartStatus>
        </CartButtonStyled>
     );
}

export default CartButton;