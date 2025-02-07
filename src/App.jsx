import React from "react"
import GlobalStyle from "./GlobalStyles"
import Header from "./components/Header/Header"
import Products from "./components/Products/Products"



function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Products />
    </>
  )
}

export default App
