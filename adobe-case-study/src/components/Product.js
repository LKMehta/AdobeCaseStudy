import React from "react"

export const Product = ({product, addProductToCart}) => {
    return (
        <div>
            {product.name} - ₹ {product.perMonthSubscriptionPrice} /month {product.isGSTInclusive && 'Inclusive of GST'}
            <button style={{marginLeft:'5px'}} onClick={() => addProductToCart(product)}>Add to Cart</button>
        </div>
    )
}