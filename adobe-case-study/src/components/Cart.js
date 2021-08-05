import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { OrderConfirmation } from './OrderConfirmation';

export const Cart = ({ products, removeProductFromCart }) => {

    const calculateTotalCost = () => {
        let totalCost = 0;
        for (let i = 0; i < products.length; i++) {

            totalCost += products[i].perMonthSubscriptionPrice
        }
        return (totalCost * 12).toFixed(2)
    }

    const showCartDetails = () => {

        if (products.length) {
            return (
                <div>
                    <h2>Cart Details</h2>
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
                                <td><button onClick={() => removeProductFromCart(product)}>Remove</button></td>
                            </tr>
                        ))}
                    </table>
                    <Router>
                        <button><Link to='/OrderConfirmation'>Place Order </Link></button>

                        <Switch>
                            <Route exact path="/OrderConfirmation">
                                <OrderConfirmation products={products}/>
                            </Route>
                        </Switch>
                    </Router>

                </div>

            )
        }
    }

    return (
        <div>
            {showCartDetails()}
        </div>
    )
}