import React from 'react';
import {Colors, Sizes} from '../_themes/text.style';
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