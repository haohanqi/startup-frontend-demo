import React, { Component } from 'react';
import {EmailForm} from '../style'
class Email extends Component {
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
            subject:'',
            message:'',
        }
        this.handleOnchange=this.handleOnchange.bind(this)
    }

    handleOnchange(e){
        const value = e.target.value;
        this.setState({
         ...this.state,
         [e.target.name]: value
         });
    }
   
    render() {
        return (
            <div>
            <EmailForm>
                
                <input type='text' name='firstName' placeholder='First Name' className='name' value={this.state.firstName} onChange={this.handleOnchange}></input>
                
                <input type='text' name='lastName' placeholder='Last Name' className='name' value={this.state.lastName} onChange={this.handleOnchange}></input>
                
                <input type='email' name='email' placeholder='Email' className='contact' value={this.state.email} onChange={this.handleOnchange}></input>
                
                 <input type='tel' name='phone' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                 placeholder='Phone Number' className='contact' value={this.state.phone} onChange={this.handleOnchange}>
                 </input>
                
                 <input type='text' name='subject' placeholder='Subject' className='subject' value={this.state.subject} onChange={this.handleOnchange}></input>
                
                 <textarea name="message" className='message' placeholder='Message'value={this.state.message} onChange={this.handleOnchange}/>
                
                 <input type='submit' placeholder='Submit' className='formButton'></input>
                
            </EmailForm>
            </div>
        );
    }
}

// const mapStatetoProps=(state)=>{
//     return{
        
//     }
// }

// const mapDispatchtoProps={
   
// }

export default Email;