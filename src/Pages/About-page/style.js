import styled from 'styled-components'
import { missionKeyFrames, aboutKeyFrames,rightIn,leftIn  } from './keyframes'

const head = `
text-align:center;
font-size:2em;
color:#a9cd2e;
font-weight:700;
`

export const BasicButton = styled.div`
width:40%;
height:40px;
background-color:#a9cd2e;
border-radius:5px;
margin: auto;
text-align:center;
line-height:35px;
color:#fff;
font-size:1.2em;
cursor:pointer;
:hover{
    background-color:black;
}
`




export const BackgroundHeader = styled.div`
height:450px;
width:100%;
background-color:#F5F5F5;
`

export const MissionSection = styled.div`
overflow:hidden;
width:100%;
`
export const MissionWapper = styled.div`
overflow:hidden;
width:55%;
height:600px;
margin-left:5%;
padding-top:3%;
font-size:1rem;
.title{
    margin-left:10%;
    margin-bottom:6%;
    height:30px;
    font-size: 3em;
    font-weight: 700;
    color:#a9cd2e;
}
&.display{
  display:none;
}

&.animation{
    animation-name: ${missionKeyFrames};
    animation-duration: 1s;
    animation-timing-function: ease;
}


`

export const MissionDetail = styled.div`
overflow:hidden;
float:left;
width: 30%;
height: 200px;
margin-left:10%;
margin-bottom:10%;
border-radius:5px;
border: 1px solid #a9cd2e;
.missionName{
    width:100%;
    font-size:2em;
    text-align:center;
    margin-top:80px; 
};

.missionDescription{
     display:none;
     width:90%;
     font-size:1.5em;
     text-align:center;
     margin-top:20px;
     margin-left:5%;
     margin-right:5%;
     color:black;
     cursor:default;
};

transition: all 1s linear;
&:hover{
    background-color:#a9cd2e;
    height:200px;
    .missionName{
        display:none;
    }
    .missionDescription{
        margin-top:70px;
        display:block;
        color:#666666;
    }

}
`

export const AboutUs = styled.div`
float:right;
width: 30%;
height:600px;
margin-right:5%;
margin-left:5%;
padding-top:3%;

font-size:1rem;
&.animation{
    animation-name: ${aboutKeyFrames};
    animation-duration: 0.5s;
    animation-timing-function: ease;
};
&.display{
    opacity:0;
}

span{
    color:#a9cd2e;
    font-size:3em;
    font-weight:700;
}

div{
    margin-top:6%;
    padding-bottom:3%;
    font-size:1.5em;
    border-bottom: 1px solid #a9cd2e
}

p{
    margin-top:6%;
    font-size:1.5em;
    color:#666666;
}

`
export const ProblemSection = styled(MissionSection)`
background-color:#F5F5F5;

`

export const ProblemWapper = styled(MissionWapper)`
float:right;
border-top:none;
&.animation{
    animation-name: ${missionKeyFrames};
    animation-duration: 3s;
    animation-timing-function: ease;
}
`

export const ProblemDetail = styled(MissionDetail)`

`
export const ImageContainer = styled.div`
float:left;
background-color:#a9cd2e;
width:35%;
height:600px;
margin-left:5%;
&.animation{
    animation-name: ${missionKeyFrames};
    animation-duration: 3s;
    animation-timing-function: ease;
}
&.display{
    display:none;
}
`


export const ServerSection = styled(MissionSection)`

`

export const MarketplaceWapper = styled(MissionWapper)`
width:35%;
height:1000px;
margin-top:0%;
margin-left:8%;
.head{
    ${head};
}
`

export const TranscationWapper = styled(MarketplaceWapper)`
float:right;
margin-right:8%;
margin-left:0;
font-size:1rem;
.head{
   ${head}
}

`
export const TitleWapper = styled.div`
margin-top:5%;
width:30%;
height:300px;
margin-left:35%;
margin-right:35%;
text-align:center;
color: #a9cd2e;
.title{
    font-size:2em;
    font-weight:700;
}

span{
    display:block;
    width:80%;
    height:2px;
    border-top:1px solid #a9cd2e;
    margin:10% 10%;
}

p{
    font-size:1.5em;
}
`
export const DetailsWapper = styled.div`
overflow:hidden;
width:80%;
height:155px;
margin:10% 10%;
.title{
    width:60%;
    float:right;
    margin-top:8%;
    margin-left:0;
    margin-bottom:0;
    margin-right:5%;
    color:black;
    font-size:1.5em;
    text-align:center;

}
.info{
    width:60%;
    float:right;
    margin-top:3%;
    margin-right:5%;
    color:#666666;
    font-size:1.3em;
}
`

export const Icon = styled.div`
float:left;
width:23%;
height:80px;
border-radius:100%;
border: 1px solid #a9cd2e;
margin-left:5%;
margin-top:8%;
`


export const ContactSection = styled(ProblemSection)``
export const EmailForm = styled.form`
overflow:hidden;
float:right;
margin-top:5%;
margin-bottom:5%;
width:50%;

input{
    display:block;
    border:1px solid black;
    color:#333B43;
    padding-left:1%;
    height:30px;
    margin-left:5%;
    margin-top:5%;
    border-radius:5px;
}
.name{
    display: inline-block;
    width:30%;
    padding-left:1%;
    
}

.contact{
    width:40%;
}

.subject{
    width:50%;
}
.message{
    display:block;
    border:1px solid black;
    color:#333B43;
    padding-left:1%;
    width:50%;
    height:250px;
    margin-left:5%;
    margin-top:5%;
    border-radius:5px;
}

.formButton{
    display:block;
    width:20%;
    margin-bottom:5%;
}

`

export const TimeLineSection = styled(MissionSection)`
padding-top:5%;
padding-bottom:5%;
background-color:#e9f0f5;
// &::before{
//         float:right
//         content: '';
// 		height: 600px;
//         width: 4px;
//         background-color:red;
// }

`

export const TimeButton = styled.div`
width:6%;
height:86px;
border:2px solid #fff;
border-radius: 100%;
margin:0% auto;

.month{
    font-size:1.5em;
    text-align:center;
    margin:18% auto;
}

.date{
    font-size:1.5em;
    text-align:center;
    margin:0 auto;
}

transition: all 0.5s linear;

&:hover{
    border:4px solid red;
    background-color:#fff;

}
`
export const VerticalLine = styled.div`
width:0%;
border-left:5px solid #d7e4ed;
height:150px;
margin:1% auto;
`

export const PlanWapper = styled.div`
overflow:hidden;
width:100%;
`

export const Plan = styled.div`
 overflow:;
 float:left;
 width:30%;
 height:250px;
 margin-right:5%;
 margin-left:10%;
 border:1px solid #fff;
 border-radius:10px;
 background-color:#fff;
 &.even{
   float:right;
   margin-left:5%;
   margin-right:10%;
 }
 &.animation{
    animation-name: ${rightIn};
    animation-duration: 0.8s;
    animation-timing-function: ease;
}
&.evenAnimation{
    animation-name: ${leftIn};
    animation-duration: 1s;
    animation-timing-function: ease;
}

&.none{
    opacity:0;
}

.title{
    width:100%;
    height:20%;
    background-color:red;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    color:#fff;
    text-align:center;
    font-size:2em;
    padding-top:5%;
}

.even{
    background-color:#a9cd2e;
}
.content{
    font-size:1.5em;
    color:#666666;
    padding-top:2%;
    padding-left:2%;
    padding-right:2%;
    padding-bottom:2%;
}
`
export const FooterSection=styled(MissionSection)`
background-color:black;
color:#fff;

`

export const AboutFooterWapper =styled.div`
float:left;
display: block;
width:20%;
height:400px;
margin:5% 0% 5% 10%;
.title{
    font-size: 1.5em;
    margin-bottom:20%;
}

.discription{
    font-size:1em; 
}

`
export const QuickLinkWapper =styled(AboutFooterWapper)`
padding-left:8%;
`
export const QuickLink = styled.div`
display:block;
font-size:1em;
color:#fff;
margin-top:10%;
a{
    text-decoration: none;
    color:#fff;
}

.icon-right{
    display:inline-block;
    margin-right:5%;
}



`
export const ContactWapper =styled(AboutFooterWapper) `

div {
    font-size:1.2em;
    font-weight:700;
    margin-bottom:5%;
    .contactInfo {
        font-weight:200;
        font-size:0.9em;
     }
    
}
 

`

