import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Homepage.css';

class Homepage extends Component {

    render() {
        return (
            <div className="homepage">
                <Link to={`/shelf/a`}><button className="button is-primary">Shelf A</button></Link>
                <Link to={`/shelf/b`}><button className="button is-primary">Shelf B</button></Link>
                <Link to={`/shelf/c`}><button className="button is-primary">Shelf C</button></Link>
                <Link to={`/shelf/d`}><button className="button is-primary">Shelf D</button></Link>
            </div>
        );
    }
}

export default Homepage;