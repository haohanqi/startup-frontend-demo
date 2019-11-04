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
    
    //Click different catas, set differnet target. According to different target value, call each get method.
    handleButtonClick(e){
      
      const {Gold,Silver,Copper,Zinc,setTarget,getInfo}=this.props

      //get target from cata's name
      const target = e.target.textContent 
      setTarget(e.target.textContent)
     
      //Only request getInfo at first time. If specific cata has already been request, no need to request agian. 
      if(target === 'Gold' && Gold.size===0){    
        getInfo(target)
      }
      if(target === 'Silver'&& Silver.size===0){
        getInfo(target)
      }
      if(target === 'Copper'&& Copper.size===0){
        getInfo(target)
      }
      if(target === 'Zinc'&& Zinc.size===0){
        getInfo(target)
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