import React, { Component } from 'react';
import ProductInfor from './components/ProductInfor'
import Summary from './components/Summary'
import Cata from './components/Cata'


class index extends Component {
    render() {
        return (
            <div>

                <ProductInfor></ProductInfor>
                <Summary></Summary>
                <Cata></Cata>
                
            </div>
        );
    }
}

export default index;