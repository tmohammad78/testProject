import { memo, useEffect, useState } from "react";

import Input from "../input";

import "./style.scss";
interface Props {
    icon: string;
    handlerChange: (e: React.FormEvent<EventTarget>) => void;
    placeHolder?: string;
    id?: string;
    className?: string;
}

const AuthInputForm = ({ icon, handlerChange, ...props }: Props) => {
    const [src, setSrc] = useState('')

    useEffect(() => {
        loadIcon()
    }, [])

    const loadIcon = async () => {
        try {
            const { default: src } = await import(`../../img/${icon}.svg`);
            setSrc(src)
        } catch (err) {
            console.log("In loading image we have problem ");
        }
    }
    return (
        <div className="input-parent" >
            <div className="icon" >
                <img className="" alt={icon} src={src} />
            </div>
            <div className="input" >
                <Input color="white" border="none" {...props} handlerChange={handlerChange} />
            </div>
        </div>
    )
}
export default memo(AuthInputForm);