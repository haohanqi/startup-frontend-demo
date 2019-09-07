import React, { Component } from 'react';
import {SummaryWapper,SummaryDeal,Counter} from '../style'
class Summary extends Component {
    render() {
        return (
            <SummaryWapper>
               <div className='marketPlaces'>MarketPlaces</div>
               <SummaryDeal>
                    <div className='title'>Total Transcations</div>
                    <Counter>7</Counter>
                    <Counter>3</Counter>
                    <Counter>4</Counter>
               </SummaryDeal>
               
               <SummaryDeal>
               <div className='title'>On-Going Deals</div>
                    <Counter>1</Counter>
                    <Counter>4</Counter>
                    <Counter>4</Counter>
               </SummaryDeal>

               <SummaryDeal>
               <div className='title'>New Posts</div>
                    <Counter>1</Counter>
                    <Counter>0</Counter>
                    <Counter>0</Counter>
               </SummaryDeal>
            </SummaryWapper>

            
        );
    }
}

export default Summary;