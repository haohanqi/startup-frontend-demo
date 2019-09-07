import React, { Component } from 'react';
import {ProductInforWapper,Product} from '../style'
import {connect} from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ProductInfor extends Component {
    constructor(props){
        super(props)
        this.renderProductList=this.renderProductList.bind(this);
        this.productList=this.productList.bind(this);
    }
    render() {

        return (
            <ProductInforWapper>

            <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            >
            {
                this.renderProductList(this.props.target)
            } 
            </ReactCSSTransitionGroup>
                         
            </ProductInforWapper>
        );
    }

    
    renderProductList(target){
       console.log(target)
       if(target==='Gold'){
        return this.props.Gold.map((item)=>{
           return  this.productList(item)
        })
       }
       if(target==='Silver'){
        return this.props.Gold.map((item)=>{
            return this.productList(item)
         })
       }
       if(target==='Copper'){
        return this.props.Gold.map((item)=>{
            return this.productList(item)
         })
       }
       if(target==='Zinc'){
        return this.props.Gold.map((item)=>{
            return this.productList(item)
         })
       }

    }

    productList(item){
        return (
            
            <Product key={item.ID}>
                <div className='productName'>Product Name: {item.productName}</div>
                <div className='ID'>ID: <span>{item.ID}</span></div>
                <div className='price'>Price: <span> {item.price}</span> </div>
                <div className='quantity'>Quantity: <span> {item.quantity}</span> </div>
                <div className='location'> Location: <span>{item.location}</span> </div>
            </Product>
           
        )
    }
        
}

const mapStateToProps=(state)=>{
    return{
       target:state.get('product').get('target'),
       Gold:state.get('product').get('gold'),
       Silver:state.get('product').get('silver')
    }
}

export default connect(mapStateToProps)(ProductInfor);