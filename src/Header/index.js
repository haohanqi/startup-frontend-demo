import React, { Component } from 'react';
import {HeaderWapper,Logo,Pages, About,Product,Login} from './style'


class index extends Component {
    render() {
        return (
            
            <HeaderWapper>
            
              <Logo></Logo>
              
              <Pages>
                <About>About</About>
                <Product>Product</Product>
                <Login>Login</Login>
              </Pages>
              
            </HeaderWapper>
            
        );
    }
}

export default index;