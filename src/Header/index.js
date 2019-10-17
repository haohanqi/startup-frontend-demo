import React, { Component } from 'react';
import {HeaderWapper,Logo,PagesWapper, Page} from './style'
import { Link } from 'react-router-dom';

class index extends Component {
    render() {
        return (
            
            <HeaderWapper>
            
              <Link to='/'><Logo></Logo></Link>
              
              <PagesWapper>
                <Link to='/'><Page>About</Page></Link>
                <Link to='/product'><Page>Product</Page></Link>
                <Link to='/login'><Page>Login</Page></Link>
              </PagesWapper>
              
            </HeaderWapper>
            
        );
    }
}

export default index;