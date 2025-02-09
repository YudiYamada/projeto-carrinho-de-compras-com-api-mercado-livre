import React from "react"
import { SectionCartStyled, DivCartItensStyled, DivCartResumeStyled } from "./Cart.Styles"

function Cart() {
    return ( 
        <SectionCartStyled>
            <DivCartItensStyled>itens do carrinho</DivCartItensStyled>

            <DivCartResumeStyled>resumo do carrinho</DivCartResumeStyled>
        </SectionCartStyled>
     )
}

export default Cart