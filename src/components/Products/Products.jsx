import React, { useState, useEffect } from "react";
import { SectionProductsStyled } from "./Products.styles"
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";

function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts("samsung s25").then((response) =>{
            setProducts(response)
        })
    }, [products])

    return (
        <SectionProductsStyled className="container">
            {products.map((product) => <ProductCard key={product.id} data={product} />)}
        </SectionProductsStyled>
    )
}

export default Products