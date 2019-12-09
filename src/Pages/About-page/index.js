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
    ContactSection,FooterSection,AboutFooterWapper,
    QuickLinkWapper,QuickLink,ContactWapper} from './style'
import {  Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
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
        if(document.documentElement.scrollTop<200){
            this.props.changeAnimationStatus(false)
            return
        }
            this.props.changeAnimationStatus(true)
        
    }

    handleFuturePlanClick(){
         this.props.renderTimeLine(true);
         scroll.scrollMore(600);
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
                       <p>Moken Exchange shortens the distance between the new-era technology adaptation and enterprises’ industrial needs. Internally, through integrated technical specialty, Moken Exchange fosters the efficiency and effectiveness within enterprise 
                       internal management and operations. Externally,
                        Moken Exchange brings the ultimate transparency and 
                        solves the trust issue among complicated transactions. 
                        </p>
                    </AboutUs>
                    
                    <MissionWapper className={this.props.animationActive ? 'animation' : 'display' }>
                        <div className='title'>Mission</div>
                        
                        <MissionDetail>
                            <div className='missionName'>Transparency</div>
                            <div className='missionDescription'> You are the owner of the true information which is proof of tampering and manipulation  
                            </div>
                        </MissionDetail>
                        
                        <MissionDetail>
                        <div className='missionName'>Smart Execution</div>
                        <div className='missionDescription'>Programed smart contract increases the efficiency in execution.  
                        </div>
                        </MissionDetail>
                        
                        <MissionDetail>
                        <div className='missionName'>Low-Costs</div>
                        <div className='missionDescription'>Either internal operation or external transaction, efficiency is harnessed through decreased human error and increased collaboration. </div>
                        </MissionDetail>
                       
                        <MissionDetail>
                        <div className='missionName'>Asset Digitalization</div>
                        <div className='missionDescription'>Blockchain is the tool to the realization of the asset digitalization.  
 
                        </div>
                        </MissionDetail>
                    </MissionWapper>
                </MissionSection>

                <ProblemSection>
                    <ImageContainer className={this.props.animationActive ? 'animation' : 'display'}></ImageContainer>
                    <ProblemWapper className={this.props.animationActive ? 'animation' : 'display' } >
                       <div className='title'>Problems to Be solved</div>
                       
                       <ProblemDetail>
                         <div className='missionName'>Idealiazation</div>
                         <div className='missionDescription'> Identification of the tangible needs from daily operation 
                         to adopt blockchain technology 
                         </div>
                       </ProblemDetail>
                       
                       <ProblemDetail>
                         <div className='missionName'>Trial-run</div>
                         <div className='missionDescription'>Key functions/features are developed and presented for enterprise use. 
                         Future development of additional features will be discussed. </div>
                       </ProblemDetail>
                       
                       <ProblemDetail>
                         <div className='missionName'>Custom Development</div>
                         <div className='missionDescription'>In use of the enterprise-grade decentralized applications to the realization of the blockchain technology advantages and benefits.

                         </div>
                       </ProblemDetail>
                       
                       <ProblemDetail>
                         <div className='missionName'>Demo</div>
                         <div className='missionDescription'>Visual presentation of the product with direct 
                         understanding of the technology. Execution team is able to make the decision with confidence.

                         </div>
                       </ProblemDetail>
                    </ProblemWapper>
                </ProblemSection>
                
                <ServerSection>
                    
                    <TitleWapper>
                      <div className='title'>Best BlockChain Servers</div>
                      <span></span>
                      <p className='description'>Moken Exchange’s young team of consultants, 
                      portfolio managers and full-stack developers provides professional and proactive services in application development.
                       Moken Exchanges strives to shorten the distance of the new-ear technology with the enterprise in use.
                      </p>
                    </TitleWapper>

                    <MarketplaceWapper>
                        <div className='head'>MarketPlace</div>
                        
                        <DetailsWapper>
                        <div className='title'>Global Accessibility</div>
                           <Icon><i class="fa fa-globe fa-5x"></i></Icon>
                           <div className='info'>Mineral commodity stakeholders from the globe have access to the platform.</div> 
                        </DetailsWapper>
                        
                        <DetailsWapper>
                        <div className='title'>Product Categories</div>
                           <Icon><i class="fa fa-sitemap fa-5x"></i></Icon>
                           <div className='info'> Information of mineral concentrate and industrial commodity can be posted and searched.
                           </div> 
                        </DetailsWapper>
                        
                        <DetailsWapper>
                        <div className='title'>Collaboration Platform</div>
                        <Icon><i class="fa fa-internet-explorer fa-5x"></i></Icon>
                        <div className='info'>Platform provides the direct linkages between the end users 
                        and service providers for physical commodity trading.
                        </div> 
                        </DetailsWapper>
                        
                        <DetailsWapper>
                        <div className='title'>Identify Verification</div>
                           <Icon ><i class="fa fa-id-card fa-5x"></i></Icon>
                           <div className='info'>Validity and credibility of platform member is verified for 
                           ensuring a secure trading partner. 
                           </div> 
                        </DetailsWapper>

                        <Link to='/product' style={{ textDecoration: 'none' }}>
                           <BasicButton>ENTER MARKETPLACE</BasicButton>
                        </Link>

                    </MarketplaceWapper>
                    
                    <TranscationWapper>
                        <div className='head'>BlockChian Transcation</div>
                        <DetailsWapper>
                           <div className='title'>Security</div>
                           <Icon><i class="fa fa-lock fa-5x"></i></Icon>
                           <div className='info'>Within permissioned network, each party’s 
                           identify is classified .</div>   
                        </DetailsWapper>
                        
                        <DetailsWapper>
                        <div className='title'>Transparency</div>
                        <Icon><i class="fa fa-file fa-5x"></i></Icon>
                        <div className='info'>Each ledger is an independent 
                        records of everyone’s actions. Long-term post-deal 
                        lawsuit process can be replaced with short-term
                         pre-deal preparation.
                        </div> 
                        </DetailsWapper>
                        
                        <DetailsWapper>
                        <div className='title'>Traceability</div>
                        <Icon><i class="fa fa-search fa-5x"></i></Icon>
                        <div className='info'>end-product can be traced back to the material 
                        which was used for production
                        </div> 
                        </DetailsWapper>
                        
                        <DetailsWapper>
                        <div className='title'>Visible Supply Chain</div>
                        <Icon><i class="fa fa-connectdevelop fa-5x"></i></Icon>
                        <div className='info'>Each action along the supply chain is recorded with
                         timestamp and stakeholder’s signature, the whole processing and logistics are revealed in comprehensive manner. 
                        </div>         
                        </DetailsWapper>
                        
                        <BasicButton onClick={this.handleFuturePlanClick}>FUTURE ADD PLANS</BasicButton>

                    </TranscationWapper>
                    
                    
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
                     <p className='discription'>Blockchain is said to be the technology of the new era, but most enterprises are still new to the technology and unsure of the benefits to be enjoyed. Among all the blockchain merits, Moken Exchange intends to foster trust within complicated trades for the parties to conduct transactions. 
                     Moken Exchange utilizes integrated technical specialty to enhance the adaptation of blockchain technology for enterprises of various industries. We work closely with the clients to shorten the distance between the technology adaptation and the enterprise’s daily operation. 
                     Moken Exchange paved the path for the clients to embrace the new world of blockchain technology. 
                     </p>
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