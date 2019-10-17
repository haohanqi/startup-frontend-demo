import styled from 'styled-components'

//Cata component---------------------------------------------------
export const CataWapper = styled.ul`
display:block;
height:500px;
width: 216px;
background-color:#fff;
margin-left:216px;
margin-top: 323px;
padding-top:20px;
padding-bottom:20px;
padding-left:10px;
padding-right:10px;
cursor:default;
box-shadow: 3px 3px 3px 3px rgba(170,170,170,0.5);
border-radius: 5px;
font-size: 20px;

span{
    margin-bottom:20px;
    margin-left:60px;
}
`

export const CataInfo = styled.li`
overflow: hidden;
display:block;
height:31px;
width:166px;
border:1px solid #d4d4d4;
border-radius: 20px;
margin-top:20px;
margin-bottom:10px;
margin-left: 10px;
padding-left:10px;
padding-right:10px;
text-align:center;
line-height:31px;
color: #656363;
text-overflow:ellipsis;
transition: all 0.3s ease-in;
:hover{
    font-size:28px;
    color:#009a44;
    border:1px solid #009a44;
}

`
//------------------------------------------------------------------

export const SummaryWapper=styled.div`
position:absolute;
overflow:hidden;
top:100px;
left: 213px;
height:250px;
width: 1000px;
border:1px solid #d4d4d4;
border-radius: 5px;
box-shadow: 3px 3px 3px 3px rgba(170,170,170,0.5);
background-color: #F5F4F4;
cursor:default;
.marketPlaces{
    margin-top:20px;
    margin-left:30px;
    font-size:24px;
}

`

export const SummaryDeal=styled.div`
float:left;
width:250px;
height:150px;
margin-top:20px;
margin-bottom:20px;
margin-left:50px;
margin-right:20px;
border:1px solid #d4d4d4;
border-radius: 5px;
background-color:#fff;

.title{
    font-size:20px;
    text-align:center;
    margin-top:10px;
    margin-bottom:10px;
    height:30px;
    width:250px;
    border-bottom: 1px solid #d4d4d4;
    transition: all 0.3s ease-in;
    :hover{
        border-bottom: 2px solid #009a44;
        font-size:22px;
        color:#009a44;
    }
}

`

export const Counter=styled.div`
display:inline-block;
height:80px;
width: 60px;
margin-left: 17px;
box-shadow: 3px 3px 3px 3px rgba(170,170,170,0.5);
font-size: 40px;
text-align:center;
line-height:80px;
transition: all 0.5s ease;
:hover{
    border:1px solid #009a44;
    font-size:45px;
    color:#009a44;
}
`
//------------------------------------------------------------------------


export const ProductInforWapper = styled.div`
position:absolute;
top: 380px;
left:500px;
height:1200px;
width: 718px;
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

`

export const Product = styled.div`
height: 150px;
width: 693px;
border: 1px solid #d4d4d4;
box-shadow: 3px 3px 3px 3px rgba(170,170,170,0.5);
border-radius:5px;
margin-left: 19px;
margin-bottom:20px;
font-size: 18px;
color:#656363;
transition: all 0.3s ease;
:hover{
    background-color:#F5F4F4;
}

div{
    display:inline-block;
    margin-top: 20px;
    margin-left:70px;
    margin-right:20px;
    color:#8F8E94;
}

span{
    color: #656363
    transition: all 0.3s ease;
    :hover{
        color:#009a44;
        font-size:22px;
    }
}

.productName{
    display:block;
    line-height:35px;
    border-bottom: 1px solid #d4d4d4;
    margin-right:0;
    font-size:25px;
    font-weight:700;
    transition: all 0.3s ease;

    :hover{
        color:#009a44;
        font-size:28px;
        border-bottom: 2px solid#009a44;
    }
}

  


`