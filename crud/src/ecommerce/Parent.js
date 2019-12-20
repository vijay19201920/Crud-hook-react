import React, { Component } from 'react';
import axios from 'axios';

class Parent extends Component {




    componentDidMount() {

        console.log('running')
        const USER_TOKEN = 'ih3eox5szrifs8tpvasvmwr0mfuzjsav';
        const URl = `http://magento2.3.chetu.com/rest/V1/products?searchCriteria[page_size]=20`;
        const AuthStr = 'Bearer '.concat(USER_TOKEN);
        axios.get(URl, { headers: { Authorization: AuthStr } })
            .then(res => console.log(res));
    }

    render() {

        return (

            <div>
                <p className="addtocart"><i><u>Add to cart page:</u></i></p>
                <div className="pad-top">
                    <h5 className="margin-r">Go to cart</h5>
                    <h5 className="float-r">Item 2 added to cart</h5>
                    <h5>All items</h5>
                </div>

                <div className="addtocart">


                </div>
            </div>
        )


    }

}

export default Parent