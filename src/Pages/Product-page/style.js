import styled from 'styled-components'

//Cata component---------------------------------------------------
export const CataWapper = styled.ul`
display:block;
height:500px;
width: 216px;
background-color:#fff;
margin-left:216px;
margin-top: 380px;
padding-top:20px;
padding-bottom:20px;
padding-left:10px;
padding-right:10px;

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
:hover{
    font-size:24px;
    color:#009a44
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

`

export const SummaryDeal=styled.div`
float:left;
width:250px;
height:130px;
background-color:black;
margin-top:40px
margin-bottom:20px
margin-left:50px;
margin-right:20px;


`