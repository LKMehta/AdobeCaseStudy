import React from "react"
import { Product } from "./Product"

const products = require(`../api/products.json`)
export const ProductList = ({addProductToCart}) => {
    return (
        <div>
            <h1>List of Adobe products subscription price</h1>
            {products.map(product => <Product key={product.name} product={product} addProductToCart={addProductToCart}/>)}
        </div>
    )
}