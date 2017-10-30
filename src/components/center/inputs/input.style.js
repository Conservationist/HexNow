import styled from 'styled-components';
import {Colors} from '../../_themes/text.style';

export const DIV = styled.div`
    height: 200px;
    position: absolute;
    top: 60%;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    text-align: center;
`;
export const H1 = styled.h1`   
    font-size: 35px;
    color: ${Colors.main_white};
    text-align: center;
    text-transform: ${props => props.textTransform};
    font-weight: 100;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
`;
export const INPUT = styled.input`
    display: block;
    width: 20%;
    height: 20px;
    font-weight: 100;
    font-size: 2em;
    padding-bottom: 4px;
    margin: 0 auto;
    display: block;
    background: 0;
    border: 0;
    border-bottom: 3px solid ${Colors.main_white};
    color: ${Colors.main_white};
    outline: 0;
    text-align: center;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
`;