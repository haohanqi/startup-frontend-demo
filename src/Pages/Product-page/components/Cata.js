import React, { Component } from 'react';
import {CataWapper,CataInfo} from '../style.js'
import { connect } from 'react-redux';
import {getGoldInfo,setTarget,getSilverInfo} from '../store/actionCreator'

class Cata extends Component {
    constructor(props){
        super(props)
        this.handleButtonClick=this.handleButtonClick.bind(this);

    }
    render() {
        return (

            <div>     
            <CataWapper>
            <span>Categories</span>     
                <CataInfo onClick={this.handleButtonClick}>Gold</CataInfo>
                <CataInfo onClick={this.handleButtonClick}>Silver</CataInfo>
                <CataInfo onClick={this.handleButtonClick}>Copper</CataInfo>
                <CataInfo onClick={this.handleButtonClick}>Zinc</CataInfo>    
            </CataWapper>
            </div>
            
        );
    }

    handleButtonClick(e){
      //According to the target value, call different get method
      const target = e.target.textContent
      if(target === 'Gold'){
          console.log("call getGold method")
          this.props.setTarget(e.target.textContent)
          this.props.getGoldInfo()

      }
      if(target === 'Silver'){
        console.log("call getSilver method")
        this.props.setTarget(e.target.textContent)
        this.props.getSilverInfo()


      }
      if(target === 'Copper'){
        console.log("call getCopper method")
        this.props.setTarget(e.target.textContent)
      }
      if(target === 'Zinc'){
        console.log("call getZinc method")
        this.props.setTarget(e.target.textContent)
      }


    }
        
 }

 const mapDispatchToProps = {
     getGoldInfo,
     getSilverInfo,
     setTarget,


 }




export default connect(null,mapDispatchToProps)(Cata);