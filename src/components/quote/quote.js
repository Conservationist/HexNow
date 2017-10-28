import React from 'react';
import {DIV, P} from './quote.style'

function Quote({quoteBody, quoteAuthor}){
    return(
        <DIV>
            <P>"{quoteBody}"</P>
            <P>- {quoteAuthor}</P>
        </DIV>
    );
}
export default Quote;