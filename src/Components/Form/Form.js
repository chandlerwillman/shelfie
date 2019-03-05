import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    state = {
        name: "",
        price: 0,
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
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input 
                        type="text" 
                        placeholder="Product Name"
                        value={this.state.name}
                        onChange={this.handleNameChange} />
                    <input 
                        type="number" 
                        placeholder="Price"
                        value={this.state.price}
                        onChange={this.handlePriceChange} />
                    <input 
                        type="text" 
                        placeholder="Image URL"
                        value={this.state.img} 
                        onChange={this.handleImageChange} />
                    <button 
                        type= "button"
                        onClick={this.resetForm}>Cancel</button>
                    <button
                        type="submit"
                        >Add to Inventory</button>
                </form>
            </div>
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