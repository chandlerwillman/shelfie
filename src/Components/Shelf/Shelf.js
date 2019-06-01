import React, { Component } from 'react';
import axios from 'axios';

import Bin from '../Bin/Bin';

export default class Shelf extends Component {
    constructor() {
        super();

        this.state = {
            binsList: []
        }
    }

    //lifecycle methods
    componentDidMount() {
        this.getBins();
    }

    //methods
    getBins = () => {
        axios.get(`/api/shelf/${id}`)
            .then(response => {
                this.setState({
                    binsList: response.data
                });
            });
    }

    //render
    render() {
        const mappedBinsList = this.state.binsList
            .map((bin, index) => {
                return <Bin key={bin.id} bin={bin} index={index} />
        });
        
        return (
            <div>
                {mappedBinsList}
                <button className="button is-link">+ Add Inventory</button>
            </div>
        )
    }
}