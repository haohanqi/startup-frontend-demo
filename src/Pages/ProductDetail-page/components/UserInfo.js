import React, { Component } from 'react';
import { UserInfoWapper, InfoWapper, Tag, Button } from '../style'
import { connect } from 'react-redux'
import { setuseridFocused } from '../store/actionCreator'

//UserInfo contains user info details. if porps.focused is true, show up. else hidden
class UserInfo extends Component {

    render() {
        const { focused, userInfo } = this.props;
        console.log(userInfo)

        return (

            <UserInfoWapper className={focused ? '' : 'hidden'} >
                <div className='userID'> User ID: <span>{userInfo._id}</span> </div>

                <InfoWapper className='hidden'>
                    <div className='title'>Basic Information</div>
                    <div className='companyName'>Company Name: <span>{userInfo.name}</span></div>
                    <div className='location'>Location: <span>{userInfo.location}</span> </div>
                    <div className='web'>Company Website: <span>{userInfo.web}</span> </div>
                    <div className='product'>
                        Company Product:
                         {
                            userInfo.companyProduct ? userInfo.companyProduct.map((item, index) => {
                                return <Tag className='tag' key={index}>{item}</Tag>
                            }) : []
                        }
                    </div>
                </InfoWapper>

                <InfoWapper className='hidden'>
                    <div className='title'>Contact Information</div>
                    <div className='phoneNumber'>Phone Number: <span>{userInfo.phone}</span></div>
                    <div className='email'>Email:<span>{userInfo.email}</span> </div>
                    <div className='faxNumber'>Fax Number:<span>{userInfo.faxNumber}</span> </div>
                </InfoWapper>

                <InfoWapper className='hidden'>
                    <div className='title'> Transcations</div>
                    <div className='totalTranscations'>Total Transcations: <span>{userInfo.totalTrans}</span></div>
                    <div className='rate'>Average Rate: <span>{userInfo.rate}</span></div>
                </InfoWapper>
                <Button onClick={this.handleButtonClick}>Hidden</Button>



            </UserInfoWapper>
        );
    }

    //hidden button changes focused status,in order to hidden userinfo
    handleButtonClick = () => {
        this.props.setuseridFocused(false)
    }
}

const mapStatetoProps = (state) => {
    return {
        focused: state.get('productDetail').get('useridFocus'),
        userInfo: state.get('productDetail').get('userInfo')
    }
}

const mapDispatchtoProps = {
    setuseridFocused
}

export default connect(mapStatetoProps, mapDispatchtoProps)(UserInfo);