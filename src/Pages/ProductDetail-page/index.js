
import React, { Component } from 'react';
import UserInfo from './components/UserInfo'
import ProductDetailInfo from './components/ProductDetailInfo'
import {connect} from 'react-redux'
import {getUserInfo} from './store/actionCreator'
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

const mapDispatchToProps ={
    getUserInfo
}

export default connect(null,mapDispatchToProps)(index);