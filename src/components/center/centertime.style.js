import styled from 'styled-components';
import {Colors} from '../_themes/text.style'

export const H1 = styled.h1`   
font-size: 64px;
color: ${Colors.main_white};
text-align: center;
text-transform: ${props => props.textTransform};
font-weight: 100;
margin: 0;
`