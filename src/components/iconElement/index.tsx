import { memo, useEffect, useState } from "react";

import './style.scss'

interface Props {
    name: string;
}

const Icon = ({ name, ...props }: Props) => {
    const [state, setState] = useState({
        src: ''
    })
    useEffect(() => {
        loadImage()
    }, [])
    const loadImage = async () => {
        try {
            const { default: src } = await import(`../../img/${name}.svg`);
            setState({
                src
            })
        } catch (err) {
            console.log("In loading image we have problem ");
        }
    }
    return (
        <img className="image" alt={name} src={state.src}  {...props} />
    )
}

export default memo(Icon);