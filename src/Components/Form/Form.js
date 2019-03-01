import React, { Component } from 'react';

class Form extends Component {
    state = {
        imageUrl: "",
        name: "",
        price: 0,
    };

    constructor() {
        super();

        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
    };

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        value={this.state.imageUrl} 
                        onChange={this.handleImageChange} />
                    <input 
                        type="text" 
                        value={this.state.name}
                        onChange={this.handleNameChange} />
                    <input 
                        type="number" 
                        value={this.state.price}
                        onChange={this.handlePriceChange} />
                    <button 
                        type= "button"
                        onClick={this.resetForm}>Cancel</button>
                    <button
                        // type="submit"
                        >Add to Inventory</button>
                </form>
            </div>
        );
    }

    handleImageChange(event) {
        this.setState({
            imageUrl: event.target.value,
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
            imageUrl: "",
            name: "",
            price: 0,
        });
    }

    // addToInventory()
}

export default Form;