import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { SearchBarStyled, InputStyled, SearchButtonStyled } from "./SearchBar.styles"

function SearchBar() {

  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchBarStyled>
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