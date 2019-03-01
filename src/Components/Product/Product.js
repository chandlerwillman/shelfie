import React from 'react';

export default function Product(props) {
    const { name, imageURL, price } = props.product;

    return(
        <div>
            <h3>{name}</h3>
            <img src={imageURL} alt={name} />
            <p>Price: {price}</p>
        </div>
    );
}