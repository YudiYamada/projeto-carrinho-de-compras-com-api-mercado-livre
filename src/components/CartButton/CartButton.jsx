import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { ButtonCartStyled, SpanCartStatusStyled } from "./CartButton.Styles"
import AppContext from '../../context/AppContext'


function CartButton() {
    const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)
    
    return ( 
        <ButtonCartStyled 
        type="button"
        onClick={ () =>  setIsCartVisible(!isCartVisible) }  
        >
            <AiOutlineShoppingCart />
            
            {cartItems.length > 0 && 
            <SpanCartStatusStyled>{cartItems.length}</SpanCartStatusStyled>}
        </ButtonCartStyled>
     )
}

export default CartButton