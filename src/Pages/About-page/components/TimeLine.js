import React, { Component } from 'react';
import {TimeButton,VerticalLine,TimeLineSection,PlanWapper,Plan,TitleWapper} from '../style'
class TimeLine extends Component {
    constructor(props){
        super(props)
        this.state={
            index0: true,
            index1: false,
            index2: false,
            index3: false,
        }
        this.handleClick=this.handleClick.bind(this)
        
    }

    handleClick(e){
        console.log(e.target,e.target.getAttribute('name'))
        this.setState({
            ...this.state,
            [e.target.getAttribute('name')]: true
            },()=>{console.log(this.state.index1)});
    }
    
    render() {
        return (
            <TimeLineSection>
           
            <TitleWapper>
            <div className='title'>Developing Plans for 2019</div>
            <span></span>
            <p className='description'>Moken Exchange is a blockchain development firm. Based on the technology specialty, we assist clients with tailored service to achieve the successful adaptation of blockchain technology. 
            Moken Exchange is in the process of developing a blockchain-powered trading platform, targeting the global mineral commodity industry. The development is as follows:
            
            </p>
            </TitleWapper>
         
       <div className='plansection'>
          <PlanWapper>
               
               <Plan className={this.state.index0 ? 'animation':'none'}>
                 <div className='title'>MarketPlace Developing</div>
                 <p className='content'>dhaodha  dada  da da usus d f ussussu ususu sstst ssysy dada
                 dadad dssiis suususu susuusus susu usssu sysususu sususu ysusuus
                 ususu sususu sususu sususu susu ususus</p>
               </Plan>  
               <TimeButton name='index0' onClick={this.handleClick} >
                <div className='month' name='index0'>Oct</div>
                <div className='date' name='index0'>10 th</div>
               </TimeButton>
        
               <VerticalLine/>
            </PlanWapper>
               
            
            <PlanWapper>
               <Plan className={this.state.index1 ? 'even evenAnimation':'none'}>
                <div className='title even'></div>
                <p className='content'>dhaodha  dada  da da usus d f ussussu ususu sstst ssysy dada
                dadad dssiis suususu susuusus susu usssu sysususu sususu ysusuus
                ususu sususu sususu sususu susu ususus</p>               
                </Plan>
               
               <TimeButton name='index1' onClick={this.handleClick}>
                <div className='month' name='index1'>Oct</div>
                <div className='date' name='index1'>10 th</div>
               </TimeButton>
               
               <VerticalLine/>
            </PlanWapper>

            <PlanWapper>
               <Plan className={this.state.index2 ? 'animation':'none'}>
                <div className='title even'></div>
                <p className='content'>dhaodha  dada  da da usus d f ussussu ususu sstst ssysy dada
                dadad dssiis suususu susuusus susu usssu sysususu sususu ysusuus
                ususu sususu sususu sususu susu ususus</p>
               </Plan>
               
               <TimeButton name='index2' onClick={this.handleClick}>
                <div className='month' name='index2'>Oct</div>
                <div className='date' name='index2'>10 th</div>
               </TimeButton>
               
               <VerticalLine/>
            </PlanWapper>
               
            <PlanWapper>
               
              <Plan className={this.state.index3? 'even evenAnimation':'none'}>
                 <div className='title '></div>
                 <p className='content'>dhaodha  dada  da da usus d f ussussu ususu sstst ssysy dada
                 dadad dssiis suususu susuusus susu usssu sysususu sususu ysusuus
                 ususu sususu sususu sususu susu ususus</p>
               </Plan>
               
               <TimeButton name='index3' onClick={this.handleClick}>
                <div className='month' name='index3'>Oct</div>
                <div className='date' name='index3' >10 th</div>
               </TimeButton>
               
               <VerticalLine/>
             </PlanWapper>
             </div>

            </TimeLineSection>
        );
    }
}

export default TimeLine;