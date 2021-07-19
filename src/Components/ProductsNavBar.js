import React from 'react'
import './ProductsNavBar.css'
import {Link} from 'react-router-dom'
function ProductsNavBar() {
    return (
        <div  className="NAV" >
        <div className="Logo">
          <Link to="/products" className="link" > <h2>Products</h2></Link>
          
        </div>
        <Link to="/signin" color="inherit" className="link"><button > Sign In </button></Link>
        </div>
    )
}

export default ProductsNavBar
