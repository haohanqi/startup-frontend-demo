import React, { Component } from 'react';
import {SummaryWapper,SummaryDeal} from '../style'
class Summary extends Component {
    render() {
        return (
            <SummaryWapper>
               <div>MarketPlaces</div>
               <SummaryDeal></SummaryDeal>
               <SummaryDeal></SummaryDeal>
               <SummaryDeal></SummaryDeal>
            </SummaryWapper>

            
        );
    }
}

export default Summary;