import styled from 'styled-components'

export const UserInfoWapper = styled.div`

float: left;
width: 27.8%;
margin-left:2%;
margin-top:3%;
box-shadow: 3px 3px 10px 3px rgba(170,170,170,0.5);
border-radius:5px;
cursor:default;
font-size:1.22rem;
&.hidden{
    display: none;
}

.userID{
    padding-left:5%;
    margin-top:5%;
    margin-bottom:2.5%;
    height:35px;
    font-size:1em;
    font-weight:600;
    color:#009a44;
    border-bottom: 1px solid #d4d4d4;
    transition: all 0.3s ease;
    :hover{
        border-bottom: 2px solid #009a44;

    }
  
}
   @media only screen and (max-width:420px){
       float:none;
       margin-left:0;
       width:100%;
       height:700px;
       .userID{
        padding-top:5%;
        :hover{
            border-bottom: 2px solid #009a44;
        }
       }
   }

   @media only screen and (min-width:768px){
       width:35%;
   }

`
export const InfoWapper = styled.div`

width:95%;
padding-left:5%;
transition: all 0.8s ease;
margin-top:8%;
margin-bottom:8%;
div{
    margin-top: 5%;
    margin-bottom:5%;
    font-size:0.85em;
    font-weight:600;
    transition: all 0.8s ease;

}

span{
    margin-left:2.5%;
    font-size:1em;
    font-weight:200;
    color: #8F8E94;
    transition: all 0.3s ease;
    
}

.title{
    font-size:0.9em;
    border-bottom: 1px solid #d4d4d4;
    line-height:30px;
    color:#009a44;
    transition: all 0.8s ease;

}



:hover{
    
    background-color:#F5F4F4;
    div{
        
        color:#009a44;
    }
    span{
        color:black;
    }
    
    
    .title{
        font-size:1em;
        border-bottom:2px solid #009a44;

    }
}

`
export const Tag = styled.span`
display:inline-block;
padding:2% 2%;
border: 1px solid #d4d4d4;
border-radius: 20px;
:hover{
    border:1px solid #009a44;
}

`
//-----------------------------------------------------------------------------------

export const ProductDetailWapper = styled.div`
float: right;
width:48.6%;
margin-right:10%;
margin-top:3%;
margin-bottom: 10%;
box-shadow: 3px 3px 10px 3px rgba(170,170,170,0.5);
border-radius:5px;
font-size:1.22rem;
cursor:default;

@media only screen and (max-width: 420px){
    float:none;
    width:100%;
    margin-left:0;
}

`

export const ProductDetailHeader = styled.div`
box-sizing: border-box;
width:100%;
padding-left:3%;
padding-top:3%;
border-bottom: 1px solid #d4d4d4
transition: all 0.3s ease;
border:${props =>console.log(props.border) || "none"};

div{
    margin-bottom: 5%;
    font-weight:600;
    font-size:1em;
    color: #009a44;
    
}

span{
    margin-left: 2%;
    font-size: 0.81em;
    font-weight:300;
    color: #8F8E94;
    transition: all 0.3s ease;
}

:hover{

    background-color: #F5F4F4;
    border-top: 2px solid #009a44;
    border-bottom: 2px solid #009a44;

    
    span{
        font-size:0.9em;
        font-weight:600;
        &.user {
            padding-left: 1%;
            padding-right: 1%;
            color:black;
            border: 1px solid #009a44;
            border-radius: 10px;
            background-color: #009a44;
        }
    }

}
`

export const ProductDetailInfoWapper=styled.div`
box-sizing: border-box;
padding-left: 5%;
padding-top: 5%;
width:100%;
border-bottom: 1px solid #d4d4d4;
transition: all 0.3s ease;

.title{
    font-size: 1em;
    font-weight:600;
    color: #009a44
}
:hover{
    background-color: #F5F4F4;
    border-top:2px solid #009a44;
    border-bottom: 2px solid #009a44;
}

`
export const ProductInfoDetail=styled.div`
margin-left: 13%;
margin-top: 6%;
transition: all 0.3s ease;


div{
    margin-top:7%;
    margin-bottom: 7%;
    font-size: 1em;
    color:#009a44;
    transition: all 0.3s ease;
}

span{
    font-size:0.81em;
    color: #8F8E94 ;
    transition: all 0.3s ease;

}

:hover{

    span{
        font-size:0.9em;
        font-weight:600;

    }
   
    

}

`

export const Button = styled.div`

width: 25%;
height:25px;
margin-left: 37.5%;
margin-right: 37.5%;
margin-bottom:5%
border-radius:20px;
border:1px solid #009a44;
font-size:0.9em;
color:#8F8E94;
text-align:center;
padding-top:2%;
vertical-align: middle;
:hover{
    border:2px solid #009a44;
    color:#009a44;
}

`



