import React from "react"
import GlobalStyle from "./GlobalStyles"
import Header from "./components/Header/Header"
import Products from "./components/Products/Products"
import Provider from "./context/Provider"
import Cart from "./components/Cart/Cart"



function App() {
  return (
    <Provider>
      <GlobalStyle />
      <Header />
      <Products />
      <Cart />
    </Provider>
  )
}

export default App
