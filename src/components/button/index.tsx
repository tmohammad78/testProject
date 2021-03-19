import { ButtonStyle } from "./style";
import { ReactNode } from 'react'
interface Props {
    children: ReactNode,
    color?: string,
    borderColor?: string;
    onClick?: (e?: React.MouseEvent) => void
}
const Button = ({ onClick, children, ...props }: Props): any => {
    return (
        <ButtonStyle onClick={onClick} {...props}>
            {children}
        </ButtonStyle>
    )
}
export default Button;