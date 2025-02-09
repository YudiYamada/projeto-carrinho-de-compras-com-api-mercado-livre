import React from "react";
import propTypes from 'prop-types'
import { SectionProductCard, CardImage, CardInfos, CardPrice, CardTitle, ButtonAddCart } from "./ProductCard.styles"
import { BsFillCartPlusFill } from "react-icons/bs"
import formatCurrency from "../../utils/formatCurrency";

function ProductCard({ data }) {
    
    const { title, thumbnail, price } = data
    
    return ( 
        <SectionProductCard>
            <CardImage 
            src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
            alt="product" />

            <CardInfos>
                <CardPrice>{formatCurrency(price, "BRL")}</CardPrice>
                <CardTitle>{title}</CardTitle>
            </CardInfos>

            <ButtonAddCart type="button">
                <BsFillCartPlusFill />
            </ButtonAddCart>
        </SectionProductCard>
     );
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;