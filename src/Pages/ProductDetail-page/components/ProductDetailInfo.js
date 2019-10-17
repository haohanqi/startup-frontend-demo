import React, { Component } from 'react';
import {ProductDetailWapper,ProductDetailHeader,ProductDetailInfoWapper,ProductInfoDetail} from '../style'
import { connect } from 'react-redux';
import {setuseridFocused} from '../store/actionCreator'

class ProductDetailInfo extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    render() {
        return (
            <ProductDetailWapper>
                <ProductDetailHeader>
                    <div className='productName'>Product:<span>Gold</span></div>
                    <div className='postBy' title='Click to see user information'  onClick={this.handleClick}>Post By:<span>User #33128</span></div>
                    <div className='type'>Type: <span>Selling</span></div>
                    <div className='contactStatus'> Contract Status: <span>Open</span></div>
                </ProductDetailHeader>

                <ProductDetailInfoWapper>
        
                   <div className='title'>Product Summary</div>
                   
                   <ProductInfoDetail>
                   <div className='quantity'>Quantity: <span>100 kg</span></div>
                   <div className='quality'>Quality: <span>90%</span></div>
                   <div className='price'>Price: <span>120 $ / kg</span></div>
                   <div className='total'>Total Deal Value: <span> 12000 $</span></div>
                   <div className='deliver'>Deliver Option: <span>Land Transportation</span></div>
                   </ProductInfoDetail>

                </ProductDetailInfoWapper>

                <ProductDetailInfoWapper>
        
                   <div className='title'>Seller Requirements</div>
                   
                   <ProductInfoDetail>
                   <div className='downpayment'>Downpayment: <span>10 % of total deal value</span></div>
                   <div className='deliverRange'>Deliver Range: <span>North America</span></div>

                   </ProductInfoDetail>

                </ProductDetailInfoWapper>


            </ProductDetailWapper>
        );
    }

    handleClick(){
        this.props.setuseridFocused('true')

    }
}

const mapDispatchToProps={
setuseridFocused,

}

const mapStateToProps=(state)=>{
    return{



    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailInfo) ;