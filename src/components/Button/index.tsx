import React from "react";
import style from './Button.module.scss';

const Button = (props : {children: string}) => {

    const {children} = props; 

    return (
        <button className={style.botao}>{children}</button>
    );
}

export default Button;