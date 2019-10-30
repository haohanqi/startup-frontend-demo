import React, { Component } from 'react';
import {UserInfoWapper,InfoWapper,Tag} from '../style'
import {getUserInfo} from '../store/actionCreator'
import {connect} from 'react-redux'
class UserInfo extends Component {
    componentDidMount(){
        this.props.getUserInfo()
    }
    render() {
        const {focused,userInfo}=this.props;
        console.log(focused)
        console.log(userInfo.companyProduct)
    
        return (
       
        
            <UserInfoWapper className={focused ? '': 'hidden'} >
               <div className='userID'> User ID: <span>#33128</span> </div>
               
               <InfoWapper className='hidden'>
                  <div className='title'>Basic Information</div>
                  <div className='companyName'>Company Name: <span>{userInfo.companyName}</span></div>
                  <div className='location'>Location: <span>{userInfo.location}</span> </div>
                  <div className='web'>Company Website: <span>{userInfo.companyWebsite}</span> </div>
                  <div className='product'> 
                          Company Product: 
                         { 
                          userInfo.companyProduct ? userInfo.companyProduct.map((item,index)=>{
                            return <Tag className='tag' key={index}>{item}</Tag>
                         }) : []   
                        }
                  </div> 
               </InfoWapper>

               <InfoWapper className='hidden'>
                 <div className='title'>Contact Information</div>
                 <div className='phoneNumber'>Phone Number: <span>{userInfo.phoneNumber}</span></div>
                 <div className='email'>Email:<span>{userInfo.email}</span> </div>
                 <div className='faxNumber'>Fax Number:<span>{userInfo.faxNumber}</span> </div>
               </InfoWapper>

               <InfoWapper className='hidden'>
                <div className='title'> Transcations</div>
                <div className='totalTranscations'>Total Transcations: <span>{userInfo.totalTrans}</span></div>
                <div className='rate'>Average Rate: <span>{userInfo.rate}</span></div>
               </InfoWapper>
               

               
            </UserInfoWapper>
        );
    }



    
}

const mapStatetoProps=(state)=>{
    return {
      
        focused: state.get('productDetail').get('useridFocus'),
        userInfo:state.get('productDetail').get('userInfo')

    }
}

const mapDispatchToProps ={
    getUserInfo

}

export default connect(mapStatetoProps,mapDispatchToProps) (UserInfo);