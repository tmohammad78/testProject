import { memo } from "react";

import { InputStyle } from "./style";

interface Props {
    className?: string;
    id?: string;
    placeHolder?: string;
    border?: string;
    color?: string;
    handlerChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({ placeHolder, border, className, handlerChange, ...props }: Props) => {

    return (
        <InputStyle type="text"
            onChange={handlerChange}
            placeholder={placeHolder}
            className={className}
            border={border}
            {...props}>
        </InputStyle>
    )
}
export default memo(Input);