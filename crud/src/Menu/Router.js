import React, { Component } from 'react';
import Crud from '../forms/Parent.js'
import Menu from '../Menu/menu.js'
import Ecommerce from '../ecommerce/Parent.js'
import Reduxed from '../reduxed/index.js'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../reduxed/store/store.js';

class Rout extends Component {

    render() {

        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <div>
                            <Route path="/" component={Menu} />
                            <Route path="/ecommerce" component={Ecommerce} />
                            <Route path="/Crud" component={Crud} />
                            <Route path="/redux-crud" component={Reduxed} />
                        </div>
                    </Router>
                </Provider>
            </div>
        )


    }

}

export default Rout