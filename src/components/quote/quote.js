import React from 'react';
import {DIV, P} from './quote.style'
import quotes from '../../quotes.json';

function Quote(){
    function GetQuote(){
        const quoteArr = quotes.quotes;
        const random_number = Math.round(Math.random() * quoteArr.length);
        let selected_quote = quoteArr[random_number];
        if(selected_quote.quote.length > 150){
            return GetQuote();
        }
        return selected_quote;
    };
    const display_quote = GetQuote();
    return(
        <DIV>
            <P>"{display_quote.quote}"</P>
            <P>-{display_quote.author}</P>
        </DIV>
    );
}
export default Quote;