import styled from 'styled-components';
import {Colors} from '../_themes/text.style'

export const ModalStyles = {
    overlay: {
        position: "fixed",
        top: "40%",
        left: "50%",
        width: "600px",
        height: "400px",
        marginTop: "-150px",
        marginLeft: "-300px",
        backgroundColor: Colors.main_dark,
        borderRadius: "4px",
        zIndex: 99
    },
    content: {
        top: "15px",
        left: "15px",
        right: "15px",
        bottom: "15px",
        padding: "10px"
    }
}

export const SPAN = styled.span`
    font-size: 16px;
    color: ${Colors.main_white};
    font-weight: 100;
    text-transform: capitalize;
    cursor: pointer;
    height: 100px;
    width: 100px;
    opacity: .7;
    &:hover{
        opacity 1;
    }
`
export const DIV = styled.div`
    position: fixed;
    left: 20px;
    top: 15px;
`
export const H1 = styled.h1`
    font-size: 32px;
    color: ${Colors.secondary_dark};
    font-weight: 100;
    text-align: center;
    margin-top: 0;
    text-transform: uppercase;
    margin-bottom: 30px;
`
export const ContentDiv = styled.div`
    display: block;
    text-align:center;
`
export const CloseModal = styled.span`
    text-decoration: none;
    font-size: 32px;
    color: ${Colors.secondary_dark};
    font-weight: 100;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
`