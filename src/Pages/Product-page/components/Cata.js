import React, { Component } from 'react';
import {CataWapper,CataInfo} from '../style.js'
import { connect } from 'react-redux';
import {getInfo,setTarget,setCata} from '../store/actionCreator'

class Cata extends Component {
    constructor(props){
        super(props)
        this.handleButtonClick=this.handleButtonClick.bind(this);
        this.handleCataShowUp = this.handleCataShowUp.bind(this);
    }
    render() {
        return (

               
            <CataWapper>
            <div onClick={this.handleCataShowUp}>CATAGORIES</div>
            <div className={this.props.showCata ? '':'hidden'}>     
                <CataInfo className='gold' onClick={this.handleButtonClick}>Gold</CataInfo>
                <CataInfo className='silver' onClick={this.handleButtonClick}>Silver</CataInfo>
                <CataInfo className='copper' onClick={this.handleButtonClick}>Copper</CataInfo>
                <CataInfo className='zinc' onClick={this.handleButtonClick}>Zinc</CataInfo>    
            </div>
            </CataWapper>
            
            
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


    //set up showCata status 
    handleCataShowUp(){
      if(this.props.showCata===true){
        this.props.setCata(false)
      }else{
        this.props.setCata(true)
      }
    }
        
 }

 const mapStateToProps=(state)=>{
   return{

    Gold:state.get('product').get('gold'),
    Silver:state.get('product').get('silver'),
    Copper:state.get('product').get('copper'),
    Zinc:state.get('product').get('zinc'),
    showCata:state.get('product').get('showCata')

   }
 }

 const mapDispatchToProps = {
     getInfo, 
     setTarget,
     setCata
 }




export default connect(mapStateToProps,mapDispatchToProps)(Cata);