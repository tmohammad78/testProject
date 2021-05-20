import { memo } from 'react'

import { InputStyle } from './style'

export interface Props {
    /**
     * className of input
     */
    className?: string
    /**
     * id for input tag
     */
    id?: string
    /**
     * placeHolder
     */
    placeHolder?: string
    /**
     * border of input
     */
    border?: string
    /**
     * color of text
     */
    color?: string
    /**
     * handler change method
     */
    handlerChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({
    placeHolder,
    border,
    className,
    handlerChange,
    ...props
}: Props) {
    return (
        <InputStyle
            border={border}
            className={className}
            onChange={handlerChange}
            placeholder={placeHolder}
            type="text"
            {...props}
        />
    )
}
export default memo(Input)
