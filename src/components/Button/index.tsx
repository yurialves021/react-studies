import React from "react";
import style from './Button.module.scss';

const Button = (props : {children: string, type?: "button" | "submit" | "reset" | undefined}) => {

    const {children, type = "button"} = props; 

    return (
        <button type={type} className={style.botao}>{children}</button>
    );
}

export default Button;