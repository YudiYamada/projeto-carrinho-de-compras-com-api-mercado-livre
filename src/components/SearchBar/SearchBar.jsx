import React, { useState, useContext } from 'react'
import { BsSearch } from "react-icons/bs";
import { FormSearchBarStyled, InputStyled, ButtonSearchStyled } from "./SearchBar.styles"
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
    <FormSearchBarStyled onSubmit={handleSearch}>
      {name}
      <InputStyled
        type="search"
        value={searchValue}
        placeholder="Buscar Produtos"
        onChange={ ({ target }) => setSearchValue(target.value) }
        required
      />
      <ButtonSearchStyled type="submit">
        <BsSearch />
      </ButtonSearchStyled>
    </FormSearchBarStyled>
  );
}

export default SearchBar;