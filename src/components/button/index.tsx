import React, { memo, ReactNode } from 'react'

import { ButtonStyle } from "./style";
export interface Props {
    /**
     * Text to show in the button
     */
    children: ReactNode,
    /**
     * color of text button
     */
    color?: string,
    /**
     * padding right and left
     */
    prl?: number;
    /**
     * padding top and bottom
     */
    ptb?: number;
    /**
     * background color of button
     */
    bgColor?: string;
    /**
     * border color of button
     */
    borderColor?: string;
    /**
     * onClick handler for check event
     */
    onClick?: (e?: React.MouseEvent) => void;
    /**
     * specific className
     */
    className?: string;
    /**
     * id of button
     */
    id?: number;
    /**
     * font size
     */
    fontSize?: number;
}

const Button = ({ onClick, className, id, children, ...props }: Props) => {
    return (
        <ButtonStyle className={className} onClick={onClick} id={id?.toString()} {...props}>
            {children}
        </ButtonStyle>
    )
}
export default memo(Button);