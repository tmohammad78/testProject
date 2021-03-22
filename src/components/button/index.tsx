import { ButtonStyle } from "./style";
import { memo, ReactNode } from 'react'
interface Props {
    children: ReactNode,
    color?: string,
    borderColor?: string;
    onClick?: (e?: React.MouseEvent) => void;
    className?: string;
}
const Button = ({ onClick, className, children, ...props }: Props): any => {

    return (
        <ButtonStyle className={className} onClick={onClick} {...props}>
            {children}
        </ButtonStyle>
    )
}
export default memo(Button);