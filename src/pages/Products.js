import React, { useEffect, useState } from "react";
import axios from 'axios'

function Products () {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            const result = await axios.get('/api/products');
            setProducts(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <main>
                <h1>Featured Products</h1>                
                <div className="products">
                {
                    products.map(product => (
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