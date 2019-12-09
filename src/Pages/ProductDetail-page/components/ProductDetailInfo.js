import React, { Component } from 'react';
import { ProductDetailWapper, ProductDetailHeader, ProductDetailInfoWapper, ProductInfoDetail } from '../style'
import { connect } from 'react-redux';
import { setuseridFocused } from '../store/actionCreator'

//ProductDetailInfo contains product info details, 
class ProductDetailInfo extends Component {
    
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        const { productInfo } = this.props
        return (
            <ProductDetailWapper>

                <ProductDetailHeader >
                    <div className='productName'>Product:<span>{productInfo.title}</span></div>
                    <div className='postBy' title='Click to see user information' onClick={this.handleClick}>
                        Post By:<span className='user'>User # {productInfo.postBy}</span>
                    </div>

                    <div className='type'>Type: <span>{productInfo.type}</span></div>
                    <div className='contactStatus'> Contract Status: <span>{productInfo.contractStatus}</span></div>
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

    //click on user id field, show user information 
    handleClick() {
        this.props.setuseridFocused('true')
    }
}

const mapDispatchToProps = {
    setuseridFocused,
}

const mapStateToProps = (state) => {
    return {
        productInfo: state.get('productDetail').get('productInfo'),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailInfo);