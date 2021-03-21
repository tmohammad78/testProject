import { ReactNode } from "react";
import { InputStyle } from "./style";

interface Props {
    className: string
}
const Input = ({ className, ...props }: Props) => {

    return (
        <InputStyle className={className} {...props}></InputStyle>
    )
}
export default Input;