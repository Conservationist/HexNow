import styled, {keyframes} from 'styled-components';

export const Sizes = {
    small: '12px',
    medium: '16px',
    large: '20px',
    x_large: '24px',
    xx_large: '28px',
    xxx_large: '32px'
}
export const Colors = {
    main_white: '#FEFEFF',
    main_dark: '#2A2D34',
    secondary_dark: '#595959',
    main_light: '#FED18C',
    secondary_light: '#FE654F'
}
export const INPUT = styled.input`
    display: block;
    width: 20%;
    height: 20px;
    font-weight: 100;
    font-size: 2em;
    padding-bottom: 5px;
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
`
const fadeIn = keyframes`
from {
  transform: scale(0);
  opacity: 0;
}

to {
  transform: scale(1);
  opacity: 1;
}
`;

const fadeOut = keyframes`
from {
  transform: scale(1);
  opacity: 0;
}

to {
  transform: scale(0);
  opacity: 1;
}
`;
export const Fade = styled.div`
    visibility: ${props => props.out ? 'hidden' : 'visible'};
    animation: ${props => props.out ? fadeOut : fadeIn} 1s linear;
    transition: visibility 1s linear;
`;