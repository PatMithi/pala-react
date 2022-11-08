import Button from 'react-bootstrap/Button';
import React from "react";
import {Link}  from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Product (props) {
    const {product} = props;
    return (
        <Card key={product.image}>
            <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} className="img-prod"/>
            </Link>
            <Card.Body>
                <Link to={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>    
                <Card.Text>{product.price}</Card.Text>
                <Button className="default-btn-gold">Add to Cart</Button>
                <Button className="default-btn-blue">Enquire</Button>        
            </Card.Body>
          </Card>
    );
}

export default Product;