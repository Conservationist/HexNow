import React from 'react';
import {BackgroundImage, BackgroundImageDarken} from './background.style.js'

function Background({img}){
    return(
        <div>
            <BackgroundImage image={img}/>
            <BackgroundImageDarken/>
        </div>
    )
}
export default Background;