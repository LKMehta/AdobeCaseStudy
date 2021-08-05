import React from "react"

export const OrderConfirmation = ({products}) => {
    const calculateTotalCost = () => {
        let totalCost = 0;
        for (let i = 0; i < products.length; i++) {

            totalCost += products[i].perMonthSubscriptionPrice
        }
        return (totalCost * 12).toFixed(2)
    }
    return (
        <div>
            <h2>Invoice Summary</h2>
            <h3>Total Items: {products.length}</h3>
            <h3>Total Cost: ₹ {calculateTotalCost()}</h3>
            <table>
                <tr>
                    <td>Product</td>
                    <td>Annual Subscription Charge (in rupees)</td>
                </tr>
                {products.map(product => (
                    <tr>
                        <td>{product.name}</td>
                        <td>₹ {(product.perMonthSubscriptionPrice * 12).toFixed(2)}</td>
                    </tr>
                ))}
            </table>
            <button>Confirm</button>
        </div>
    )
}