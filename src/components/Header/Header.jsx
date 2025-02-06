import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import { HeaderStyled, ContainerStyled } from "./Header.styles"
import CartButton from "../CartButton/CartButton"

function Header() {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <SearchBar />
        <CartButton />
      </ContainerStyled>
    </HeaderStyled>
  )
}

export default Header