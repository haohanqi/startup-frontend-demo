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
font-size: 24px;
.gold{
  color:#F1EE1A;
  border:1px solid #F1EE1A;
}
.silver{
  color:#E1E1DB;
  border:1px solid #E1E1DB;
}
.copper{
  color:#B87333;
  border:1px solid #B87333;
}
.zinc{
  color:#B6B6B5;
  border:1px solid #B6B6B5;
}

span{
    width:40%;
    margin-bottom:8%;
    margin-left:18%;
    margin-right:20%;
}

@media only screen and (max-width:420px ){
  float:none;
  margin-top: 4%;
  width: 100%;
  margin-left: 0;
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
font-size:24px;
.marketPlaces{
    margin-top:3%;
    margin-left:6%;
    font-size:1em;
}

@media only screen and (max-width:420px ){
    margin-left:0;
    margin-right:0;
    height:100%;
    width:100%;
    font-size: 1em;
  }

`

export const SummaryDeal=styled.div`
overflow: hidden;
float:left;
height:65%
width:25%;
margin-top:2%;
margin-bottom:4%;
margin-left:5%;
margin-right:3%;
border:0.042em solid #d4d4d4;
border-radius: 0.2em;
background-color:#fff;

.title{
    font-size:0.9em;
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
        color:#009a44;
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
  }

`

export const Product = styled.div`
width:91%;
border: 1px solid #d4d4d4;
box-shadow: 3px 3px 3px 3px rgba(170,170,170,0.5);
border-radius:5px;
margin-bottom:3%;
font-size: 18px;
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
    border-bottom: 1px solid #d4d4d4;
    margin-right:0;
    font-size:1.38em;
    font-weight:700;
    transition: all 0.3s ease;

    :hover{
        color:#009a44;
        font-size:1.55em;
        border-bottom: 2px solid#009a44;
    }

    
}

@media only screen and (max-width:420px){
  width:100%;
}

  


`