import { ButtonStyle } from "./style";
import { ReactNode } from 'react'
interface Props {
    children: ReactNode
}
const Button = ({ children }: Props): any => {
    return (
        <ButtonStyle>
            {children}
        </ButtonStyle>
    )
}
export default Button;