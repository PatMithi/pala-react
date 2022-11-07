import React, { useEffect, useReducer, useState } from "react";
import axios from 'axios';
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading: true};
        case 'FETCH_SUCCESS':
            return {...state, products:action.payload, loading: false};
        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}

function Products () {
    const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
        products: [], 
        loading: true, 
        error: '',
    })
    useEffect(() => {
        
        const fetchData = async() => {
            dispatch({type: 'FETCH_REQUEST'});
            try {
               const result = await axios.get('/api/products'); 
               dispatch({type: 'FETCH_SUCCESS', payload: result.data});
            }
            catch(err) {
                dispatch({type: 'FETCH_FAIL', payload: err.message});
            }
            
            // setProducts(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <main>
                <h1>Featured Products</h1>                
                <div className="products">
                {
                    loading? (<div>Loading...</div>
                )   :
                    error? (<div>{error}</div>
                )   : (
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
                )
                }
                </div>
                
            </main>
        </div>
    );
}

export default Products;