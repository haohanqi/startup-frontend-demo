import React, { Component } from 'react';
import {HeaderWapper,Logo,PagesWapper, Page} from './style'
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

class index extends Component {

  constructor(props){
    super(props)
    this.state={
      isExpanded: false
    }
    this.handleNavBar=this.handleNavBar.bind(this)
  }

  handleNavBar(e){
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    },console.log(this.state.isExpanded));
  }

    render() {
        return (
            
            <HeaderWapper>
            
              <i className={this.state.isExpanded ? 'fa fa-bars fa-2x route' :'fa fa-bars fa-2x'} onClick={this.handleNavBar}></i>
              <Link to='/'><Logo></Logo></Link>
              
              <PagesWapper className={this.state.isExpanded ? 'showup animation':''}>
                <Link to='/'><Page>About</Page></Link>
                <Link to='/product'><Page>Product</Page></Link>
                <Link to='/login'><Page>Login</Page></Link>
              </PagesWapper>
              
            </HeaderWapper>
            
        );
    }
}

export default index;