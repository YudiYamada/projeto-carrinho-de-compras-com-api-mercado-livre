import React from "react"
import propTypes from 'prop-types'
import { SectionProductCardStyled, ImgCardImageStyled, DivCardInfosStyled, H2CardPriceStyled, H2CardTitleStyled, ButtonAddCartStyled } from "./ProductCard.styles"
import { BsFillCartPlusFill } from "react-icons/bs"
import formatCurrency from "../../utils/formatCurrency"

function ProductCard({ data }) {
    
    const { title, thumbnail, price } = data
    
    return ( 
        <SectionProductCardStyled>
            <ImgCardImageStyled 
                src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
                alt="product" 
            />

            <DivCardInfosStyled>
                <H2CardPriceStyled>{formatCurrency(price, "BRL")}</H2CardPriceStyled>
                <H2CardTitleStyled>{title}</H2CardTitleStyled>
            </DivCardInfosStyled>

            <ButtonAddCartStyled type="button">
                <BsFillCartPlusFill />
            </ButtonAddCartStyled>
        </SectionProductCardStyled>
    )
}

export default ProductCard

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired