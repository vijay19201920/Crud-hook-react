import React, { Component } from 'react';
import Parent from '../forms/Parent.js'



class Menu extends Component {


    render() {

        return (
            <div>

                <div className="topnav">
                    <a className="active" href="/ecommerce">ecommerce</a>
                    <a href="Crud">Crud with Hooks</a>
                    <a href="redux-crud">Crud with react-redux</a>
                </div>

            </div>
        )


    }

}

export default Menu