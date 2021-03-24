import { ButtonStyle } from "./style";
import React, { memo, ReactNode } from 'react'
interface Props {
    children: ReactNode,
    color?: string,
    borderColor?: string;
    onClick?: (e?: React.MouseEvent) => void;
    className?: string;
    id?: number
}
const Button = ({ onClick, className, id, children, ...props }: Props): any => {
    return (
        <ButtonStyle className={className} onClick={onClick} id={id?.toString()} {...props}>
            {children}
        </ButtonStyle>
    )
}
export default memo(Button);