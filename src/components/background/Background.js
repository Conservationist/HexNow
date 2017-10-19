import React from 'react';
import {BackgroundImage} from './background.style.js'

function Background({img}){
    console.log(img);
    return(
        <div>
        <BackgroundImage image={img}/>
        </div>
    )
}
export default Background;