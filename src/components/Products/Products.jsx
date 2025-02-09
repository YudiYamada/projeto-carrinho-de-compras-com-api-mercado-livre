import React, { useEffect, useContext } from "react"
import { SectionProductsStyled } from "./Products.styles"
import fetchProducts from "../../api/fetchProducts"
import ProductCard from "../ProductCard/ProductCard"
import Loading from "../Loading/Loading"
import AppContext from "../../context/AppContext"

function Products() {

    const { products, setProducts, loading, setLoading } = useContext(AppContext)

    useEffect(() => {
        fetchProducts("samsung s25").then((response) => {
            setProducts(response)
            setLoading(false)
        })
    }, [])

    return (
        (loading && <Loading />) || 
        (<SectionProductsStyled className="container">
            {products.map((product) => <ProductCard key={product.id} data={product} />)}
        </SectionProductsStyled>)
    )

}

export default Products