import styled from 'styled-components';
import {Colors} from '../_themes/text.style'

export const ModalStyles = {
    overlay: {
        position: "fixed",
        top: "40%",
        left: "50%",
        width: "360px",
        minHeight: "350px",
        maxHeight: "370px",
        marginTop: "-150px",
        marginLeft: "-180px",
        backgroundColor: Colors.main_white,
        borderRadius: "5px",
        zIndex: 99,
        overflow: "auto"
    },
    content: {
        backgroundColor: Colors.main,
        border: 0,
        top: "5px",
        left: "5px",
        right: "5px",
        bottom: "5px",
        padding: "10px",
        color: Colors.main_dark
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
    color: ${Colors.main_dark};
    font-weight: 100;
    text-align: center;
    margin-top: 0;
    text-transform: uppercase;
    margin-bottom: 5px;
    
`
export const ContentDiv = styled.div`
    display: block;
    text-align:center;
`
export const CloseModal = styled.span`
    text-decoration: none;
    font-size: 32px;
    color: ${Colors.main_dark};
    font-weight: 100;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    opacity: 1;
    &:hover {
        opacity: .7;
    }
`
export const RegisterText = styled.p`
    text-align: center;
    color: ${Colors.main_dark};
    margin-top: 0;
`
export const RegisterLink = styled.a`
    text-decoration: none;
    color: ${Colors.main_dark};
    margin-top: 0;
    cursor: pointer;
    border-bottom: 1px solid ${Colors.secondary_light};
    opacity: 1;
    &:hover {
        opacity .7;
    }
`
export const ModalInput = styled.input`
    color: ${Colors.main_dark};
    text-align: left;
    padding-left: 10px;
    border-radius: 5px;
    width: 80%;
    height: 30px;
    margin-bottom: 15px;
    outline: 0;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    background: #e7e6e6;
    border: 1px solid #e7e6e6;
`
export const SignInButton = styled.button`
    border-radius: 5px;
    width: 80%;
    height: 40px;
    outline: 0;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    color: ${Colors.main_white};
    font-size: 16px;
    font-weight: 100;
    background: ${Colors.secondary_light};
    border: 1px solid #e7e6e6;
    &:hover {
        background: #FF7F69;
    }

`