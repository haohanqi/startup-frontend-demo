import styled from 'styled-components';
import {pagewapperKeyFrame} from './keyframes'

export const HeaderWapper = styled.div`
  overflow:auto;
  z-index:1;
  position:sticky;
  height:60px;
  top: 0;
  background-color:#F5F4F4;
  width:100%;
  border-bottom: 1px solid #f0f0f0;
  box-shadow:0 4px 8px 0 rgba(7, 17, 27, 0.1);
  font-size:1rem;
  .fa-bars{
    display:none;
  }

  @media only screen and (max-width:420px ){
    height:55px;
    .fa-bars{
      display:inline-block;
      width:20px;
      position: absolute;
      top: 15px;
      left: 15px;
      cursor: pointer;
    }
    .route{
      transition:all 0.8s ease;
      transform: rotate(90deg);
    }

  }

`

export const Logo = styled.div`
float:left;
height:100%;
width:10%;
transition: all 0.3s ease;
:hover{
  background-color:#DFDEDE;
}
@media only screen and (max-width:420px){
  display:none;
}

`

export const PagesWapper = styled.div`
overflow:auto;
float:right;
height:100%;
width:40%;
font-size:1em;
&.showup{

}
@media only screen and (max-width:420px ){
  display:none;
  &.showup{
    display:block;
  }
  &.animation{
    animation-name: ${pagewapperKeyFrame};
    animation-duration: 0.8s;
    animation-timing-function: ease;
  }
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

