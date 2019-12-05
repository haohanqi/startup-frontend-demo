import React, { Component } from 'react';
import Lottie from "react-lottie";
import * as loadingData from '../../../animation/loading.json'
class Loading extends Component {

   
    render() {
        return (
            <div className='loading'>
             <Lottie options={defaultLoading} height={220} width={220} />
            </div>
        );
    }
}

const defaultLoading={
    loop: true,
    autoplay: true,
    animationData: loadingData.default,    
}

export default Loading;