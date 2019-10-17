import React, { Component } from 'react';
import ProductInfor from './components/ProductInfor'
import Summary from './components/Summary'
import Cata from './components/Cata'


class index extends Component {
    
        
    render() {
        return (
            <div>
                <Summary></Summary>
                <Cata></Cata>
                <ProductInfor></ProductInfor>
            </div>
        );
    }
}

export default index;