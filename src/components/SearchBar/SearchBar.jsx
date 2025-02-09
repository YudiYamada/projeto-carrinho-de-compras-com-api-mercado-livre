import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { SearchBarStyled, InputStyled, SearchButtonStyled } from "./SearchBar.styles"
import fetchProducts from '../../api/fetchProducts';

function SearchBar() {

  const [searchValue, setSearchValue] = useState("");
  
  const handleSearch = async (event) => {
    event.preventDefault()
    
    const products = await fetchProducts(searchValue)
    console.log(products)
    setSearchValue("")
  }

  return (
    <SearchBarStyled onSubmit={handleSearch}>
      <InputStyled
        type="search"
        value={searchValue}
        placeholder="Buscar Produtos"
        onChange={ ({ target }) => setSearchValue(target.value) }
        required
      />
      <SearchButtonStyled type="submit">
        <BsSearch />
      </SearchButtonStyled>
    </SearchBarStyled>
  );
}

export default SearchBar;