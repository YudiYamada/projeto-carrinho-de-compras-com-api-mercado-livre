import React, { useContext } from "react"
import propTypes from 'prop-types'
import { BsCartDashFill } from "react-icons/bs"
import { SectionCartItemStyled, ImgCartItemImageStyled, DivCartItemContent, H3CartItemTitleStyled, H3CartItemPriceStyled, ButtonRemoveItemStyled } from "./CartItem.Styles"
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

function CartItem({ data }) {
    const { cartItems, setCartItems } = useContext(AppContext)
    const { id, thumbnail, title, price } = data
    const handleRemoveItem = () => {
        const updateItems = cartItems.filter((item) => item.id !== id)
        setCartItems(updateItems)
    }

    return ( 
        <SectionCartItemStyled>
            <ImgCartItemImageStyled 
            src={thumbnail} 
            alt="imagem do produto" />

            <DivCartItemContent>
                <H3CartItemTitleStyled>{title}</H3CartItemTitleStyled>
                <H3CartItemPriceStyled>{formatCurrency(price, "BRL")}</H3CartItemPriceStyled>

                <ButtonRemoveItemStyled 
                type="button"
                onClick={ handleRemoveItem }
                >
                    <BsCartDashFill />
                </ButtonRemoveItemStyled>
            </DivCartItemContent>
        </SectionCartItemStyled>
     );
}

export default CartItem