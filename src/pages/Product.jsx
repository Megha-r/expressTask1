import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'

class Product extends Component {
    

    render() {
        let { path, url } = this.props.match
        return (
            <div>
                Products:
                <ul>
                    <li>
                        <Link to={`${url}/car`}>Car</Link>
                    </li>
                    <li>
                        <Link to={`${url}/bikes`}>Bikes</Link>
                    </li>
                </ul>

                <Route path={`${path}/:id`} render={({match}) => {
                    console.log(match)
                    return <h1>{match.params.id}</h1>
                  }}>
                </Route>
            </div>
        )
    }
}

export default Product
