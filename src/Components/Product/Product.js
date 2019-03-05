import React from 'react';

export default function Product(props) {
    const { name, img, price } = props.product;

    return(
        <div>
            <h3>{name}</h3>
            <img src={img} alt={name} />
            <p>Price: {price}</p>
        </div>
    );
}