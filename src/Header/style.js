import styled from 'styled-components';


export const HeaderWapper = styled.div`
  overflow:auto;
  z-index:1;
  background-color:#F5F4F4;
  height:10%;
  width:100%;
  border-bottom: 1px solid #f0f0f0;
  box-shadow:0 4px 8px 0 rgba(7, 17, 27, 0.1);
  @media only screen and (max-width:420px ){
    height:8%;
  }

`

export const Logo = styled.div`
float:left;
height:60px;
width:10%;
transition: all 0.3s ease;
:hover{
  background-color:#DFDEDE
}
@media only screen and (max-width:420px){
  width:20%;
  height:50px;
}

`

export const PagesWapper = styled.div`
overflow:auto;
float:right;
height:100%;
width:30%;
font-size:18px;

@media only screen and (max-width:420px ){
  width:50%
}
`

export const Page = styled.div`
float: left;
height:100%;
width:29%;
margin-left:2%;
margin-right:2%;
text-align:center;
line-height:60px;
color: #716E6E;
transition: all 0.4s ease;
:hover{
  background-color:#DFDEDE
  font-size:1.11em;
  color:#3E3D3D
}

@media only screen and (max-width:420px ){
  line-height:50px;
  margin-left:3%;
  
  width:27%;
  font-size:0.7em;
  :hover{
    font-size:0.75em;
  }
}
`

