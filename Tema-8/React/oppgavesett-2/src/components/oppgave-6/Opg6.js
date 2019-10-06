import React from "react"
import productList from "./data/productList"
import Products from "./components/Products"
import "./Opg6.css"

function Opg6() {
    const shopProducts = productList.map(products => <Products key={products.id} navn={products.navn} bilde={products.bilde} pris={products.pris}/>)
    
    return (
        <div className = "products">
            {shopProducts}
        </div>
    )
}

export default Opg6