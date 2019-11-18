import React, { Component } from 'react';
import { ProductInforWapper, Product, LoadMore } from '../style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// productInfor contains different catas product list
class ProductInfor extends Component {

    render() {

        return (

            <ProductInforWapper>

                {
                    this.renderProductList(this.props.target)
                }
                
                <LoadMore>Load More</LoadMore>
            
            </ProductInforWapper>
        );
    }

    // according to target value(gold silver copper zinc) to render different product list
    renderProductList(target) {
        const { Gold, Silver, Copper, Zinc } = this.props

        if (target === 'Gold') {
            return Gold.map((item) => {
                return this.productItem(item)
            })
        }
        if (target === 'Silver') {
            return Silver.map((item) => {
                return this.productItem(item)
            })
        }
        if (target === 'Copper') {
            console.log(Copper)
            return Copper.map((item) => {
                return this.productItem(item)
            })
        }
        if (target === 'Zinc') {
            return Zinc.map((item) => {
                return this.productItem(item)
            })
        }
    }

    // each item in the product list 
    productItem(item) {
        return (
            <Link to={'/productDetail/' + item.ID + '/' + item.postBy} style={{ textDecoration: 'none' }}>

                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >

                    <Product key={item.ID}>
                        <div className='productName'>Product: {item.title}</div>
                        <div className='ID'>Standard: <span>{item.standard}</span></div>
                        <div className='price'>Quality: <span> {item.quality}</span> </div>
                        <div className='quantity'>Quantity: <span> {item.quantity}</span> </div>
                        <div className='location'> Location: <span>{item.location}</span> </div>
                    </Product>

                </ReactCSSTransitionGroup>

            </Link>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        target: state.get('product').get('target'),
        Gold: state.get('product').get('gold'),
        Silver: state.get('product').get('silver'),
        Copper: state.get('product').get('copper'),
        Zinc: state.get('product').get('zinc')
    }
}

export default connect(mapStateToProps)(ProductInfor);