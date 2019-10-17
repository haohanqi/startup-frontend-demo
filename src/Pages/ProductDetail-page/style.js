import styled from 'styled-components'

export const UserInfoWapper = styled.div`

float: left;
height: 700px;
width: 400px;
margin-left:20px;
margin-top:35px;
box-shadow: 3px 3px 10px 3px rgba(170,170,170,0.5);
border-radius:5px;
cursor:default;
&.hidden{
    display: none;
}

.userID{
    padding-left:20px;
    margin-top:20px;
    margin-bottom:25px;
    height:35px;
    font-size:20px;
    font-weight:600;
    color:#009a44;
    border-bottom: 1px solid #d4d4d4;
    transition: all 0.3s ease;
    :hover{
        font-size:22px;
        border-bottom: 2px solid #009a44;

    }
  
}

`
export const InfoWapper = styled.div`

width:380px;
padding-left:20px;
transition: all 0.8s ease;
margin-top:30px;
margin-bottom:30px;
div{
    margin-top: 20px;
    margin-bottom:20px;
    font-size:18px;
    font-weight:600;
    transition: all 0.8s ease;

}

span{
    margin-left:10px;
    font-size:16px
    font-weight:200;
    color: #8F8E94;
    transition: all 0.3s ease;

}




.title{
    font-size:20px;
    border-bottom: 1px solid #d4d4d4;
    line-height:30px;
    color:#009a44;
    transition: all 0.8s ease;

}



:hover{
    
    background-color:#F5F4F4;
    div{
        font-size:18px;
        color:#009a44;
    }
    span{
        font-size:18px;
        color:black;
    }
    
    
    .title{
        font-size:22px;
        border-bottom:2px solid #009a44;

    }
}

`
export const Tag = styled.span`
display:inline-block;
padding:8px 8px;
border: 1px solid #d4d4d4;
border-radius: 20px;
:hover{
    border:1px solid #009a44;
}

`
//-----------------------------------------------------------------------------------

export const ProductDetailWapper = styled.div`
float: right;
width: 700px;
margin-right:150px;
margin-top:35px;
margin-bottom: 20px;
box-shadow: 3px 3px 10px 3px rgba(170,170,170,0.5);
border-radius:5px;
cursor:default;

`

export const ProductDetailHeader = styled.div`
box-sizing: border-box;
width:700px;
padding-left: 20px;
padding-top: 20px;
border-bottom: 1px solid #d4d4d4
transition: all 0.3s ease;

div{
    margin-bottom: 30px;
    font-weight:600;
    font-size:22px;
    color: #009a44;
    
}

span{
    margin-left: 15px;
    font-size: 18px;
    font-weight:200;
    color: #8F8E94;
    transition: all 0.3s ease;

}

:hover{

    background-color: #F5F4F4;
    border-top: 2px solid #009a44;
    border-bottom: 2px solid #009a44;

    
    span{
        font-size:20px;
        font-weight:600;
    }

}
`

export const ProductDetailInfoWapper=styled.div`
box-sizing: border-box;
padding-left: 20px;
padding-top: 20px;
width:700px;
border-bottom: 1px solid #d4d4d4;
transition: all 0.3s ease;

.title{
    font-size: 22px;
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
margin-left: 75px;
margin-top: 20px;
transition: all 0.3s ease;


div{
    margin-top:30px;
    margin-bottom: 30px;
    font-size: 22px;
    color:#009a44;
    transition: all 0.3s ease;

}

span{
    font-size:18px;
    color: #8F8E94 ;
    transition: all 0.3s ease;

}

:hover{

    span{
        font-size:20px;
        font-weight:600;

    }
   
    

}

`



