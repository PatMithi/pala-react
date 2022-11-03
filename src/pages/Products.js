import React from "react";
import data from "../data";

function Products () {
    return (
        <div>
            <main>
                <h1>Featured Products</h1>                
                <div className="products">
                {
                    data.products.map(product => (
                    <div key={product.image} className="product">
                        <img src={product.image} alt={product.name}/>
                        <div className="product-details">
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <button className="default-btn-gold">Add to Cart</button>
                            <button className="default-btn-blue">Enquire</button>
                        </div>
                    </div>
                    ))
                }
                </div>
                
            </main>
        </div>
    );
}

export default Products;