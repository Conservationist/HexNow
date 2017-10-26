import styled from 'styled-components';

export const H1 = styled.h1`
    text-align: center;
    color: red;
`
export const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.image});
    background-color: transparent;
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    z-index: -2;
    backdrop-filter: none;
    transform: translateZ(0);
    width: 100%;
    height: 100vh;
`
export const BackgroundImageDarken = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: .5;
    z-index: -1;
    width: 100%;
    height: 100vh;
`