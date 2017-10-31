import React from 'react';
import {ModalInput} from './sign_in.style';

const LoginInput = ({inputType, inputName, inputPlaceholder, InputValue}) => {

    return (
        <ModalInput onChange={(e, name) => InputValue(e.target.value, e.target.name)}name={inputName} placeholder={inputPlaceholder} field={inputType}/>
    );
};

export default LoginInput;