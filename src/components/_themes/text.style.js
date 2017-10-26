import styled from 'styled-components';

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
export const P = styled.p`
    padding: ${props => props.padding};    
    font-size:  ${props => props.fontSize};
    color: ${props => props.color};
    text-align: ${props => props.textAlign};
    text-transform: ${props => props.textTransform};
`
export const H1 = styled.h1`
    padding: ${props => props.padding};    
    font-size:  ${props => props.fontSize};
    color: ${props => props.color};
    text-align: ${props => props.textAlign};
    text-transform: ${props => props.textTransform};
`