import styled from 'styled-components';
import {Colors} from '../_themes/text.style'

export const H1 = styled.h1`   
    font-size: 40px;
    color: ${Colors.main_white};
    text-align: center;
    text-transform: ${props => props.textTransform};
    font-weight: 100;
    margin: 0;
    padding: 0;
`
export const DIV = styled.div`
    height: 200px;
    position: absolute;
    top: 35%;
    right: 0;
    left: 0;
    bottom: 0;
`