import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import { HeaderStyled, DivContainerStyled } from "./Header.styles"
import CartButton from "../CartButton/CartButton"

function Header() {
  return (
    <HeaderStyled>
      <DivContainerStyled>
        <SearchBar />
        <CartButton />
      </DivContainerStyled>
    </HeaderStyled>
  )
}

export default Header