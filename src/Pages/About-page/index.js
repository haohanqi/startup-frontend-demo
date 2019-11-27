import React, { Component } from 'react';
import {connect} from 'react-redux'
import {changeAnimationStatus,renderTimeLine} from './store/actionCreator'
import Email from './components/Email'
import TimeLine from './components/TimeLine'
import {BackgroundHeader,MissionSection,MissionWapper,
    MissionDetail,AboutUs,ProblemSection,ProblemWapper,
    ProblemDetail,ImageContainer,ServerSection,
    MarketplaceWapper,TranscationWapper,
    TitleWapper,DetailsWapper,Icon,BasicButton,
    ContactSection,FooterSection,AboutFooterWapper,QuickLinkWapper,QuickLink,ContactWapper} from './style'
import { Link } from 'react-router-dom';

class index extends Component {
    constructor(props){
        super(props)
        this.bindEvent = this.bindEvent.bind(this);
        this.handleScrollChange=this.handleScrollChange.bind(this);
        this.handleFuturePlanClick=this.handleFuturePlanClick.bind(this)
    }

    handleScrollChange(){
        console.log(document.documentElement.scrollTop)
        if(document.documentElement.scrollTop<280){
            this.props.changeAnimationStatus(false)
            return
        }
            this.props.changeAnimationStatus(true)
        
    }

    handleFuturePlanClick(){
         this.props.renderTimeLine(true);
    }

    bindEvent(){
        window.addEventListener('scroll',this.handleScrollChange)
    }
    
    componentDidMount(){
        this.bindEvent()
    }
    render() {
        return (
            <div>
                <BackgroundHeader/>
                
                <MissionSection >
        
                    <AboutUs className={this.props.animationActive ? 'animation ' : 'display' }>
                       <span>About Our Company</span>
                       <div>We Bring a New Way to do Transcation</div>
                       <p>dhaodha  dada  da da usus d f ussussu ususu sstst ssysy dada
                       dadad dssiis suususu susuusus susu usssu sysususu sususu ysusuus
                       ususu sususu sususu sususu susu ususus </p>
                    </AboutUs>
                    
                    <MissionWapper className={this.props.animationActive ? 'animation' : 'display' }>
                        <div className='title'>Mission</div>
                        
                        <MissionDetail>
                            <div className='missionName'>BlockChain</div>
                            <div className='missionDescription'>this is a solution using blockchain technology dad dadadad wdreeg</div>
                        </MissionDetail>
                        
                        <MissionDetail>
                        <div className='missionName'>BlockChain</div>
                        <div className='missionDescription'>this is a solution using blockchain technology dad dadadad wdreeg</div>
                        </MissionDetail>
                        
                        <MissionDetail>
                        <div className='missionName'>BlockChain</div>
                        <div className='missionDescription'>this is a solution using blockchain technology dad dadadad wdreeg</div>
                        </MissionDetail>
                       
                        <MissionDetail>
                        <div className='missionName'>BlockChain</div>
                        <div className='missionDescription'>this is a solution using blockchain technology dad dadadad wdreeg</div>
                        </MissionDetail>
                    </MissionWapper>
                </MissionSection>

                <ProblemSection>
                    <ImageContainer className={this.props.animationActive ? 'animation' : 'display'}></ImageContainer>
                    <ProblemWapper className={this.props.animationActive ? 'animation' : 'display' } >
                       <div className='title'>Problems to Be solved</div>
                       <ProblemDetail></ProblemDetail>
                       <ProblemDetail></ProblemDetail>
                       <ProblemDetail></ProblemDetail>
                       <ProblemDetail></ProblemDetail>
                    </ProblemWapper>
                </ProblemSection>
                
                <ServerSection>
                    
                    <TitleWapper>
                      <div className='title'>Best BlockChain Servers</div>
                      <span></span>
                      <p className='description'>Praesent mattis commodo 
                      augue Aliquam ornare hendrerit augue Cras 
                      tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet ligula Etiam .</p>
                    </TitleWapper>
                    
                    <TranscationWapper>
                        <div className='head'>BlockChian Transcation</div>
                        <DetailsWapper>
                           <div className='title'>Creative</div>
                           <Icon/>
                           <div className='info'>Lorem ipsum dolor sit amet 
                           consectetuer adipiscing elit sit amet Suspendisse et justo amet.</div>   
                        </DetailsWapper>
                        
                        <DetailsWapper>
                        <div className='title'>Creative</div>
                        <Icon/>
                        <div className='info'>Lorem ipsum dolor sit amet 
                        consectetuer adipiscing elit sit amet Suspendisse et justo amet.</div> 
                        </DetailsWapper>
                        
                        <DetailsWapper>
                        <div className='title'>Creative</div>
                        <Icon/>
                        <div className='info'>Lorem ipsum dolor sit amet 
                        consectetuer adipiscing elit sit amet Suspendisse et justo amet.</div> 
                        </DetailsWapper>
                        
                        <DetailsWapper>
                        <div className='title'>Creative</div>
                        <Icon/>
                        <div className='info'>Lorem ipsum dolor sit amet 
                        consectetuer adipiscing elit sit amet Suspendisse et justo amet.</div>         
                        </DetailsWapper>
                        
                        <BasicButton onClick={this.handleFuturePlanClick}>FUTURE ADD PLANS</BasicButton>

                    </TranscationWapper>
                    
                    <MarketplaceWapper>
                        <div className='head'>MarketPlace</div>
                        
                        <DetailsWapper>
                        <div className='title'>Creative</div>
                           <Icon/>
                           <div className='info'>Lorem ipsum dolor sit amet 
                           consectetuer adipiscing elit sit amet Suspendisse et justo amet.</div> 
                        </DetailsWapper>
                        
                        <DetailsWapper>
                        <div className='title'>Layered PSD</div>
                           <Icon/>
                           <div className='info'>Lorem ipsum dolor sit amet 
                           consectetuer adipiscing elit sit amet Suspendisse et justo amet.</div> 
                        </DetailsWapper>
                        
                        <DetailsWapper>
                        <div className='title'>Layered PSD</div>
                        <Icon/>
                        <div className='info'>Lorem ipsum dolor sit amet 
                        consectetuer adipiscing elit sit amet Suspendisse et justo amet.</div> 
                        </DetailsWapper>
                        
                        <DetailsWapper>
                        <div className='title'>Transcation</div>
                           <Icon/>
                           <div className='info'>Lorem ipsum dolor sit amet 
                           consectetuer adipiscing elit sit amet Suspendisse et justo amet.</div> 
                        </DetailsWapper>

                        <Link to='/product' style={{ textDecoration: 'none' }}>
                           <BasicButton>ENTER MARKETPLACE</BasicButton>
                        </Link>

                        </MarketplaceWapper>
                </ServerSection>

                {
                    this.props.timeLineShowUp ? <TimeLine></TimeLine> : null
                }
                
                <ContactSection>
                    <Email></Email>
                    <ImageContainer></ImageContainer>
                </ContactSection>
      
                <FooterSection>
                   <AboutFooterWapper>
                     <div className='title'>About Company</div>
                     <p className='discription'>Lorem ipsum dolor sit amet,
                      consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Suspendisse et justo. Praesent mattis commodo</p>
                   </AboutFooterWapper>
                  
                   <QuickLinkWapper>
                    <div className='title'>Quick Links</div>
                    <QuickLink>
                    <div className='icon-right'>></div>
                    <a href=''>hyperledger composer</a>
                    </QuickLink>
                    
                    <QuickLink><div className='icon-right'>></div>
                    <a href=''>hyperledger composer</a>
                    </QuickLink>
                    
                    <QuickLink><div className='icon-right'>></div>
                    <a href=''>hyperledger composer</a>
                    </QuickLink>
                    
                    <QuickLink><div className='icon-right'>></div>
                    <a href=''>hyperledger composer</a>
                    </QuickLink>
                    
                    <QuickLink><div className='icon-right'>></div>
                    <a href=''>hyperledger composer</a>
                    </QuickLink>
                    
                    <QuickLink><div className='icon-right'>></div>
                    <a href=''>hyperledger composer</a>
                    </QuickLink>


                   </QuickLinkWapper>
                   
                   <ContactWapper>
                    <div className='title'>Contact Us</div>
                    
                    <div >Address: <span className='contactInfo'>107 Avondale ave NY ON Toronto</span></div>
                    <div >Email: <span className='contactInfo'>haohanqiharry@gmail.com</span></div>
                    <div >Phone: <span className='contactInfo'>(+1) 647-829-5577</span></div>
                    <div >Fax: <span className='contactInfo'>(+1) 647-829-5577</span></div>



                   </ContactWapper>
                
                </FooterSection>

                

            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        animationActive: state.get('aboutPage').get('animationActive'),
        timeLineShowUp:state.get('aboutPage').get('timeLineShowUp')
    }
}

const mapDispatichToProps ={
    changeAnimationStatus,
    renderTimeLine
}
export default connect(mapStateToProps,mapDispatichToProps)(index);