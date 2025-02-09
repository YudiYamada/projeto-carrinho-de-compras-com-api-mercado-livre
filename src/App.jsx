import React from "react"
import GlobalStyle from "./GlobalStyles"
import Header from "./components/Header/Header"
import Products from "./components/Products/Products"
import Provider from "./context/Provider"



function App() {
  return (
    <Provider>
      <GlobalStyle />
      <Header />
      <Products />
    </Provider>
  )
}

export default App
