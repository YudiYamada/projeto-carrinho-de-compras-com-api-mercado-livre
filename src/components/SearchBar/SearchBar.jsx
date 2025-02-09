import React, { useState, useContext } from 'react'
import { BsSearch } from "react-icons/bs";
import { SearchBarStyled, InputStyled, SearchButtonStyled } from "./SearchBar.styles"
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {

  const { setProducts, setLoading } = useContext(AppContext)
  const [searchValue, setSearchValue] = useState("")

  const handleSearch = async (event) => {
    event.preventDefault()
    setLoading(true)
    const products = await fetchProducts(searchValue)
    setProducts(products)
    setLoading(false)
    setSearchValue("")
  }

  return (
    <SearchBarStyled onSubmit={handleSearch}>
      {name}
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