
import React, { Component } from 'react';
import UserInfo from './components/UserInfo'
import ProductDetailInfo from './components/ProductDetailInfo'
import {connect} from 'react-redux'
import {getUserInfo,getProductInfo} from './store/actionCreator'
class index extends Component {

    componentDidMount(){
        const  {getProductInfo,target,getUserInfo,match} = this.props
        //get product information by pid  
        getProductInfo(target,match.params.pid)
        //get user information by uid 
        getUserInfo(match.params.uid)
    }
    
    render() {
        console.log(this.props)
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