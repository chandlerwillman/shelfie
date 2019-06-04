import React, { Component } from 'react';
import axios from 'axios';
import './Item.css';

class Form extends Component {
    state = {
        name: "",
        price: 0.00,
        img: "",
    };

    constructor() {
        super();

        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    };

    render() {
        return (
            <form className="itemForm" onSubmit={(event) => this.handleSubmit(event)}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input 
                            className="input"
                            type="text" 
                            placeholder="Product Name"
                            value={this.state.name}
                            onChange={this.handleNameChange} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input 
                            className="input"
                            type="number" 
                            placeholder="Price"
                            value={this.state.price}
                            onChange={this.handlePriceChange} />
                    </div>
                </div>
                <div className="control">
                    <button
                        className="button is-success"
                        type="submit"
                        >+ Add to Inventory</button>
                </div>
            </form>
        );
    }

    handleImageChange(event) {
        this.setState({
            img: event.target.value,
        });
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value,
        });
    }

    handlePriceChange(event) {
        this.setState({
            price: event.target.value,
        });
    }

    resetForm(event) {
        event.preventDefault();

        this.setState({
            name: "",
            price: 0,
            img: "",
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { name, price, img } = this.state;

        axios.post('http://localhost:8000/api/products', {
            name,
            price,
            img,
        });
    }
}

export default Form;