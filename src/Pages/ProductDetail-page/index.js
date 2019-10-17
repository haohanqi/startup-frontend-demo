
import React, { Component } from 'react';
import UserInfo from './components/UserInfo'
import ProductDetailInfo from './components/ProductDetailInfo'
class index extends Component {
    render() {
        return (
            <div>
               <UserInfo/>
               <ProductDetailInfo/>
                
            </div>
        );
    }
}

export default index;