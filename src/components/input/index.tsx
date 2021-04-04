import React, { memo } from "react";

import { InputStyle } from "./style";

export interface Props {
    /**
     * className of input
     */
    className?: string;
    /**
     * id for input tag
     */
    id?: string;
    /**
     * placeHolder 
     */
    placeHolder?: string;
    /**
     * border of input
     */
    border?: string;
    /**
     * color of text
     */
    color?: string;
    /**
     * handler change method
     */
    handlerChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const Input = ({ placeHolder, border, className, handlerChange, ...props }: Props) => {

    return (
        <InputStyle type="text"
            aria-label="input"
            onChange={handlerChange}
            placeholder={placeHolder}
            className={className}
            border={border}
            {...props}>
        </InputStyle>
    )
}
export default memo(Input);