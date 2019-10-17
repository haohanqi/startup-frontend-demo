import React, { Component } from 'react';
import {CataWapper,CataInfo} from '../style.js'
import { connect } from 'react-redux';
import {getInfo,setTarget} from '../store/actionCreator'

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
      const {Gold,Silver,Copper,Zinc,setTarget,getInfo}=this.props
      const target = e.target.textContent
      setTarget(e.target.textContent)
      //According to the target value, call different get method
      if(target === 'Gold' && Gold.size===0){
          console.log("call getGold method")
          getInfo(target)
      }
      if(target === 'Silver'&& Silver.size===0){
        console.log("call getSilver method")
        this.props.getInfo(target)
      }
      if(target === 'Copper'&& Copper.size===0){
        console.log("call getCopper method")
        this.props.getInfo(target)

      }
      if(target === 'Zinc'&& Zinc.size===0){
        console.log("call getZinc method")
        this.props.getInfo(target)
      }
    }
        
 }

 const mapStateToProps=(state)=>{
   return{

    Gold:state.get('product').get('gold'),
    Silver:state.get('product').get('silver'),
    Copper:state.get('product').get('copper'),
    Zinc:state.get('product').get('zinc')

   }
 }

 const mapDispatchToProps = {
     getInfo,
     setTarget
 }




export default connect(mapStateToProps,mapDispatchToProps)(Cata);