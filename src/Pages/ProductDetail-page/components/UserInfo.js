import React, { Component } from 'react';
import {UserInfoWapper,InfoWapper,Tag} from '../style'
import {connect} from 'react-redux'
class UserInfo extends Component {
    render() {
        const {focused}=this.props;
        console.log(focused)
        return (
       
        
            <UserInfoWapper className={focused ? '': 'hidden'} >
               <div className='userID'> User ID: <span>#33128</span> </div>
               
               <InfoWapper className='hidden'>
                  <div className='title'>Basic Information</div>
                  <div className='companyName'>Company Name: <span>Moken Exchange</span></div>
                  <div className='location'>Location: <span>Canada--ON--Toronto</span> </div>
                  <div className='web'>Company Website: <span>www.mokenExchange.com</span> </div>
                  <div className='product'> Company Product: <Tag className='tag'>Copper</Tag> <Tag className='tag' >Zinc</Tag> <Tag className='tag'>Zinc</Tag><Tag className='tag'>Zinc</Tag> </div> 
               </InfoWapper>

               <InfoWapper className='hidden'>
                 <div className='title'>Contact Information</div>
                 <div className='phoneNumber'>Phone Number: <span>6478295577</span></div>
                 <div className='email'>Email:<span>haohanqiharry@gmail.com</span> </div>
                 <div className='faxNumber'>Fax Number:<span>6478295577</span> </div>
               </InfoWapper>

               <InfoWapper className='hidden'>
                <div className='title'> Transcations</div>
                <div className='totalTranscations'>Total Transcations: <span>10</span></div>
                <div className='rate'>Average Rate: <span>Good</span></div>
               </InfoWapper>
               

               
            </UserInfoWapper>
        );
    }



    
}

const mapStatetoProps=(state)=>{
    return {
      
        focused: state.get('productDetail').get('useridFocus')


    }
}

export default connect(mapStatetoProps) (UserInfo);