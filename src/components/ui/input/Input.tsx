import React from 'react';
import cl from './Input.module.css'
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input: React.FC<InputProps> = (props) => {
    return (
        <input className={cl.myInput} {...props} />
    );
};

export default Input;
