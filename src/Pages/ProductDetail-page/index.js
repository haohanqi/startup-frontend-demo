
import React, { Component } from 'react';
import UserInfo from './components/UserInfo'
import ProductDetailInfo from './components/ProductDetailInfo'
import {connect} from 'react-redux'
import {getUserInfo,getProductInfo} from './store/actionCreator'
class index extends Component {

    componentDidMount(){
        const  {getProductInfo,getUserInfo,match} = this.props
        //get product information by pid and title
        getProductInfo(match.params.title,match.params.pid)
        //get user information by uid 
        getUserInfo(match.params.uid)
    }
    
    render() {
        return (
            <div>
               <UserInfo />
               <ProductDetailInfo />    
            </div>
        );
    }
}

const mapDispatchToProps ={
    getUserInfo,getProductInfo
}

const mapStatetoProps=(state)=>{
    return{
        target:state.get('product').get('target')
    }
     
}

export default connect(mapStatetoProps,mapDispatchToProps)(index);