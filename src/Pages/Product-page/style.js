import styled from 'styled-components'

//Cata component---------------------------------------------------
export const CataWapper = styled.ul`
display:inline-block;
height:100%;
width: 15%;
background-color:#fff;
margin-left:15%;
margin-top: 2%;
padding-top:2%;
padding-bottom:2%;
padding-left:1%;
padding-right:1%;
cursor:default;
box-shadow: 3px 3px 3px 3px rgba(170,170,170,0.5);
border-radius: 5px;
font-size: 1.33rem;
div{
    width:100%;
    margin-bottom:8%;
    padding-bottom:8%;
    color:#009a44;
    font-weight:700;
    text-align:center;
    border-bottom: 1px solid #009a44
}

.hidden{
  display:none;
}
:hover{
  background-color:#d4d4d4;
}

@media only screen and (max-width:420px ){
  float:none;
  margin-top: 4%;
  width: 96%;
  margin-left:1%;
  margin-right:1%;
  span{
    margin-bottom:8%;
    margin-left:32%;
    margin-right:35%;
}  
}

`

export const CataInfo = styled.li`
overflow: hidden;
display:block;
height:10%;
width:60%;
border-radius: 20px;
border:2px solid #009a44;
margin-top:10%;
margin-bottom:10%;
margin-left: 10%;
margin-right:10%;
padding-left:10%;
padding-right:10%;
text-align:center;
line-height:31px;
text-overflow:ellipsis;
transition: all 0.3s ease-in;
:hover{
    font-size:1.16em;
    color:#009a44;
    border:1px solid #009a44;
    background-color:#F5F4F4
}
`

//------------------------------------------------------------------

export const SummaryWapper=styled.div`
overflow:hidden;
margin-top:1.5%
margin-left:15%;
margin-right:15%;
width:70%;
border:1px solid #d4d4d4;
border-radius: 5px;
box-shadow: 3px 3px 3px 3px rgba(170,170,170,0.5);
background-color: #F5F4F4;
cursor:default;
font-size: 1.33rem;
.marketPlaces{
    margin-top:3%;
    margin-left:6%;
    font-size:1em;
    color:#009a44;
    font-weight:700;
}

@media only screen and (max-width:420px ){
    margin-left:0;
    margin-right:0;
    height:100%;
    width:98%;
    font-size: 1em;
  }

`

export const SummaryDeal=styled.div`
overflow: hidden;
float:left;
height:65%
width:23%;
margin-top:2%;
margin-bottom:4%;
margin-left:6%;
margin-right:3%;
border: 3px solid #d4d4d4;
border-radius: 0.2em;
background-color:#fff;

.title{
    font-size:0.9em;
    color:#009a44;
    text-align:center;
    margin-top:5%;
    margin-bottom:5%;
    height:15%;
    width:100%;
    border-bottom: 0.042em solid #d4d4d4;
    transition: all 0.3s ease-in;
    :hover{
        border-bottom: 0.084em solid #009a44;
        font-size:1em;
    }
}

@media only screen and (max-width:420px ){
    width:90%;
    height:25%;
    font-size:1em;
  }

`

export const Counter=styled.div`
display:inline-block;
height:45%;
width: 23%;
margin-left:7%;
margin-top:3%;
margin-bottom:6%;
box-shadow: 0.125em 0.125em  0.125em  0.125em  rgba(170,170,170,0.5);
font-size: 2em;
text-align:center;
line-height:1.5em;
transition: all 0.5s ease;
:hover{
    border:0.042em solid #009a44;
    font-size:1.8em;
    color:#009a44;
}

@media only screen and (max-width:420px ){
  height: 40%;
  line-height:2.5em;   
  font-size: 3em;
  :hover{
    font-size:3em;
  }
  }
`
//------------------------------------------------------------------------


export const ProductInforWapper = styled.div`
display:inline-block;
float:right;
width:55%;
height:80%;
margin-top:2%;
margin-right:10%;
font-size:1rem;

cursor:default;
  .fade-enter {
    opacity: 0;
  }
  
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 3000ms ease-in;
  }
  
  .fade-leave {
    opacity: 0.5;
  }
  
  .fade-leave.fade-leave-active {
    opacity: 0;
    transition: opacity 3000ms ease-out;
  }

  @media only screen and (max-width:420px){
    float:none;
    width:100%;
    margin-right:0;
    margin-left:0;
  }

`

export const Product = styled.div`
width:91%;
border: 2px solid #d4d4d4;
box-shadow: 3px 3px 3px 3px rgba(170,170,170,0.5);
border-radius:5px;
margin-bottom:3%;
font-size: 1em;
color:#656363;
transition: all 0.3s ease;
:hover{
    background-color:#F5F4F4;
}

div{
    display:inline-block;
    margin-top: 3%;
    margin-left:7%;
    margin-right:3%;
    margin-bottom:2.5%
    color:#8F8E94;
}

span{
    color: #656363
    transition: all 0.3s ease;
    :hover{
        color:#009a44;
        font-size:1.22em;
    }
}

.productName{
    display:block;
    line-height:125%;
    border-bottom: 1.5px solid #009a44;
    margin-right:0;
    font-size:1.38em;
    font-weight:700;
    color:#009a44;
    transition: all 0.3s ease;

    :hover{
        font-size:1.55em;
        border-bottom: 2px solid #009a44;
    }

    
}

@media only screen and (max-width:420px){
  width:98%;
}

`

const BasicButton =styled.div`
background-color:#F5F4F4;
border: 2px solid #009a44;
border-radius:5px;
text-align:center;
color:#009a44;
cursor:pointer;
font-size:1.11rem
:hover{
  border: 3px solid #009a44;
  font-size:1.1em;
  font-weight:600;
}
`

export const Button = styled(BasicButton)`
  z-index:1;
  position:fixed;
  bottom:5%;
  right: 5%;
  height: 5%;
  width: 4%;
  padding-top: 1.5%;
  cursor:pointer;
  font-size:1em;
  
  @media only screen and (max-width:420px){
    bottom:10%;
    right:8%;
    height: 5%;
     width: 10%;
  }
  @media only screen and (max-width:380px){
    width:9%;
    height:4%;
  }
  @media only screen and (min-width:768px){
    width:7%;
    height:3.5%;
  }
  @media only screen and (min-width:1024px){
    width:5%;
    height:3%;
  }

  
`
export const LoadMore = styled(BasicButton)`
width: 20%;
height:30px;
margin-left: 35%;
margin-right:40%;
padding-top:1%;
font-size: 1.1em;
 @media only screen and (max-width:420px){
  width: 40%;
  margin-left: 30%;
 }

`
//----------------------------------------------------
export const DisclaimWapper = styled.div`
width: 70%;
margin-top:2%;
margin-left: 15%;
margin-right: 15%;
font-size:1.33rem;
border:1px solid #d4d4d4;
border-radius:5px;
box-shadow: 3px 3px 3px 3px rgba(170,170,170,0.5);
@media only screen and (max-width:420px){
  width:98%;
  margin-left: 0;
  margin-right: 0;
}
`
export const DisclaiminTitle =styled.div`
overflow:auto;
width:100%;
border:1px solid #009a44;
border-top-left-radius:5px;
border-top-right-radius:5px;
span{
  &.title{
    float:left;
    margin-top:3%;
    margin-left:6%;
    margin-bottom:3%;
    font-size:1em;
    color:#009a44;
    font-weight:700;
  }

  &.icon{
    float:right
    margin-top:3%;
    margin-right:6%;
    margin-bottom:3%;
    border: solid black;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 4px;
  }

  &.icon-down{
 
    transform: rotate(45deg);
  }

  &.icon-up{
    margin-top:3.5%;
    transform: rotate(-135deg);
  }
    
}
:hover{
  background-color: #d4d4d4;
}

`
export const Disclaiminfo =styled.div`

width:100%;
border:1px solid #009a44;
border-bottom-left-radius:5px;
border-bottom-right-radius:5px;
p{
  margin-left:6%;
  margin-top:3%;
  margin-bottom:3%;
  .claimInfo{
    font-size:1.2em;
    color: #009a44;
    font-weight:600;
  }
  .term{
    font-size:1em;
    color:#777777;
    &:hover{
      color:black;
      font-weight:500;
    }
  }
  .email{
    font-size:1.1em;
    color:#009a44;
    font-weight:600
  }
  .last{
    color:#009a44;
  }
}
`