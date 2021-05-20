import React, { memo, useEffect, useState } from 'react'

import Input from '../input'

import './style.scss'

interface Props {
    icon: string
    handlerChange: (e: React.FormEvent<EventTarget>) => void
    placeHolder?: string
    id?: string
    className?: string
}

function AuthInputForm({ icon, handlerChange, ...props }: Props) {
    const [src, setSrc] = useState('')
    useEffect(() => {
        loadIcon()
    }, [])

    const loadIcon = async () => {
        try {
            const { default: src } = await import(`../../img/${icon}.svg`)
            setSrc(src)
        } catch (err) {
            console.log('In loading image we have problem ')
        }
    }
    return (
        <div className="input-parent">
            <div className="icon">
                <img alt={icon} className="" src={src} />
            </div>
            <div className="input">
                <Input
                    border="none"
                    color="white"
                    {...props}
                    handlerChange={handlerChange}
                />
            </div>
        </div>
    )
}

// AuthInputForm.defaultProps = defaultProps
export default memo(AuthInputForm)
