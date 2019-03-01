import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {

    render() {
        const inventory = this.props.inventoryList
            .map((product, index) => (
                <Product
                    product={product}
                    key={index} />
            ));

        return (
            <div>
                <div>This is a Dashboard!</div>
                {inventory}
            </div>
        );
    }
}

export default Dashboard;