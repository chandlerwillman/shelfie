import React, { Component } from 'react';
import axios from 'axios';

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
        axios.get(`/api/shelf/${this.props.id}`).then(response => {
            this.setState({
                binsList: response.data
            });
        });
    }

    //render
    render() {
        const mappedBinsList = this.state.binsList
            .map((bin, index) => {
                return <Bin key={bin.id} bin={bin} />
        });
        
        return (
            <div>
                {mappedBinsList}
            </div>
        )
    }
}