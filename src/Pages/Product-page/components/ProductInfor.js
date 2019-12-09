import React, { Component } from 'react';
import { ProductInforWapper, Product, LoadMore } from '../style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {setLoading} from '../store/actionCreator'
import FadeIn from 'react-fade-in'
import Loading from './Loading.js'

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
        const { Gold, Aluminum, Copper, Zinc,isLoading, } = this.props
        if (target === 'Gold' ) {
            if(isLoading){
                return <Loading/>
            }else{
                return (
                    <FadeIn transitionDuration={600}>
                        {
                            Gold.map((item) => {
                                return this.productItem(item)
                             })  
                        }
                    </FadeIn>
                    )
            }       
        }
        
        if (target === 'Aluminum' ) {
            if(isLoading){
                return <Loading/>
            }else{
                return (
                    <FadeIn transitionDuration={600}>
                        {
                            Aluminum.map((item) => {
                                return this.productItem(item)
                             })  
                        }
                    </FadeIn>
                    )
            }  
        }

        if (target === 'Copper' && Copper.length>0 ) {
            if(isLoading){
                return <Loading/>
            }else{
                return (
                <FadeIn transitionDuration={600}>
                    {
                        Copper.map((item) => {
                            return this.productItem(item)
                         })  
                    }
                </FadeIn>
                )
            }  
            
       
        }
        if (target === 'Zinc' && Zinc.length>0 ) {
            if(isLoading){
                return <Loading/>
            }else{
                return (
                    <FadeIn transitionDuration={600}>
                        {
                            Zinc.map((item) => {
                                return this.productItem(item)
                             })  
                        }
                    </FadeIn>
                    )
            }  
        }
    }

    // each item in the product list 
    productItem(item) {
        return (
            <Link key={item._id} to={'/productDetail/' +item.title+'/'+ item._id + '/' + item.postBy} style={{ textDecoration: 'none' }}>


                    <Product >
                        <div className='productName'>Product: {item.title}</div>
                        <div className='ID'>Standard: <span>{item.standard}</span></div>
                        <div className='price'>Quality: <span> {item.quality}</span> </div>
                        <div className='quantity'>Quantity: <span> {item.quantity}</span> </div>
                        <div className='location'> Status: <span>{item.contractStatus}</span> </div>
                    </Product>

            </Link> 
            
           

           
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isLoading:state.get('product').get('isLoading'),
        target: state.get('product').get('target'),
        Gold: state.get('product').get('gold'),
        Aluminum: state.get('product').get('aluminum'),
        Copper: state.get('product').get('copper'),
        Zinc: state.get('product').get('zinc')
    }
}

const mapDispatchToProps={
  setLoading
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductInfor);