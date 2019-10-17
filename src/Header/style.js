import styled from 'styled-components';


export const HeaderWapper = styled.div`
  z-index:1;
  position:absolyte;
  top:0;
  left:0;
  background-color:#F5F4F4;
  height:56px;
  width:100%;
  border-bottom: 1px solid #f0f0f0;
  box-shadow:0 4px 8px 0 rgba(7, 17, 27, 0.1);

`

export const Logo = styled.div`
position:absolute;
top:0;
left:0;
height:56px;
width:120px;
transition: all 0.3s ease;
:hover{
  background-color:#DFDEDE
}
`

export const PagesWapper = styled.div`
position:relative;
overflow:auto;
float:right
height:56px;
width:360px;
`

export const Page = styled.div`
position:relative;
float: left;
height:56px;
width:100px;
margin-left:10px;
margin-right:10px;
text-align:center;
line-height:50px;
font-size:18px;
color: #716E6E
transition: all 0.4s ease;
:hover{
  background-color:#DFDEDE
  font-size:20px;
  color:#3E3D3D
}
`

