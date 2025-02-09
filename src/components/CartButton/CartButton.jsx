import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { ButtonCartStyled, SpanCartStatusStyled } from "./CartButton.Styles"


function CartButton() {
    return ( 
        <ButtonCartStyled type='button'>
            <AiOutlineShoppingCart />
            <SpanCartStatusStyled>1</SpanCartStatusStyled>
        </ButtonCartStyled>
     )
}

export default CartButton