import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getInfo,setTarget} from './store/actionCreator'
import ProductInfor from './components/ProductInfor'
import Summary from './components/Summary'
import Cata from './components/Cata'
import Disclaim from './components/Disclaim'
import {Button} from '../Product-page/style'

class index extends Component {
    
    componentDidMount(){
        //main page defualtly render Copper list
        this.props.setTarget('Copper')
        this.props.getInfo('Copper')
    }

    handleScrollup=()=>{
        window.scrollTo(0,0)
    }
        
    render() {
        return (
            <div>
                <Summary></Summary>
                <Disclaim></Disclaim>
                <Cata></Cata>
                <ProductInfor></ProductInfor>
                <Button onClick={this.handleScrollup}>Top</Button>
            </div>
        );
    }
}


const mapDispathctoProps={
    setTarget,getInfo
}

export default connect(null,mapDispathctoProps)(index);