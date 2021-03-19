import { ButtonStyle } from "./style";
import { ReactNode } from 'react'
interface Props {
    children: ReactNode,
    color?: string
}
const Button = ({ children, ...props }: Props): any => {
    return (
        <ButtonStyle {...props}>
            {children}
        </ButtonStyle>
    )
}
export default Button;