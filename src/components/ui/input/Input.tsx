import React from 'react';
import cl from './Input.module.css'
const Input = ({...children}: any) => {
    return (
        <input className={cl.myInput} {...children} />
    );
};

export default Input;