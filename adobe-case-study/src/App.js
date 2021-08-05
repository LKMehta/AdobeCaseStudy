import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { OrderConfirmation } from './components/OrderConfirmation';

function App() {
  const [products, setProducts] = useState([])

  const addProductToCart = (product) => {
    setProducts([...products, product])
  }

  const removeProductFromCart = (product) => {
    let productList = [...products]
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].name.trim() === product.name.trim()) {
        delete productList[i]
        setProducts({ ...productList })
      }
    }
  }

  return (
    <div>
     
      <ProductList addProductToCart={addProductToCart} />
      <Cart products={products} removeProductFromCart={removeProductFromCart} />
      {products.name}
    </div>
  );
}

export default App;

