import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Homepage extends Component {

    render() {
        return (
            <div>
                <Link to={`/shelf/a`} id="a"><button>Shelf A</button></Link>
                <Link to={`/shelf/b`} id="b"><button>Shelf B</button></Link>
                <Link to={`/shelf/c`} id="c"><button>Shelf C</button></Link>
                <Link to={`/shelf/d`} id="d"><button>Shelf D</button></Link>
            </div>
        );
    }
}

export default Homepage;