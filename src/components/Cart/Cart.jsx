import React from "react";
import { SectionStyled, DivCartItens, DivCartResume } from "./Cart.Styles";

function Cart() {
    return ( 
        <SectionCartStyled>
            <DivCartItens>itens do carrinho</DivCartItens>

            <DivCartResume>resumo do carrinho</DivCartResume>
        </SectionCartStyled>
     );
}

export default Cart;