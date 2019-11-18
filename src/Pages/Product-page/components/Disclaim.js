import React, { Component } from 'react';
import {connect} from 'react-redux'
import {DisclaimWapper,DisclaiminTitle,Disclaiminfo} from '../style'
import {setDisclaim} from '../store/actionCreator'
class Disclaim extends Component {

    handleInfoShowUp=()=>{
          if(this.props.showDisclaim === false){
              this.props.setDisclaim(true)
          }else{
              this.props.setDisclaim(false)
          }
    }

    renderDisclaimInfo =(showDisclaim)=>{
        if(showDisclaim===true){
            return (

                <Disclaiminfo>
                  <p>
                  <span className='claimInfo'>Procedure to post at the marketplace</span><br/><br/>
                  <span className='term'>1. Write an email to inquiry <span className='email'>mokenexchange@gmail.com</span> with the following information: Company Name, Address, Type of product (choose from Gold, Silver, Copper and Silicon)</span><br/><br/>
                  <span className='term'>2. We will get back to you with an online form to gather detailed commodity information. </span><br/><br/>
                  <span className='term'>3. After receiving the filled form, the commodity information will be posted. </span><br/><br/>
                  <span className='last'> The whole posting process takes less than 24 hours, and the procedure will be easier as we upgrade the system</span></p>
                </Disclaiminfo>
            )
         }else{
              return null;
        }
        
    }

    render() {
        return (
            <DisclaimWapper>
            
            <DisclaiminTitle onClick={this.handleInfoShowUp}>
               <span className='title'>Disclaim</span>
               <span className={this.props.showDisclaim ? 'icon icon-up':'icon icon-down'}></span>
            </DisclaiminTitle>

            {this.renderDisclaimInfo(this.props.showDisclaim)}
               
            </DisclaimWapper>
        );
    }
}

const mapStateToProp = (state)=>{
    return {
        showDisclaim: state.get('product').get('showDisclaim')
    }
    
}
const mapDispatchtoProp ={
    setDisclaim
}
export default connect(mapStateToProp,mapDispatchtoProp)(Disclaim);