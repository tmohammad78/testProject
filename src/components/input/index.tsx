import { ReactNode } from "react";
import { InputStyle } from "./style";

interface Props {
    className: string;
    type: string,
    id: string;
    placeHolder?: string;
    handlerChange: (e: any) => void
}
const Input = ({ type, placeHolder, className, handlerChange, ...props }: Props) => {

    return (
        <InputStyle type={type}
            onChange={handlerChange}
            placeholder={placeHolder}
            className={className}
            {...props}>
        </InputStyle>
    )
}
export default Input;