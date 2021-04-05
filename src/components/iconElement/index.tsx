import { memo, useEffect, useState } from 'react'

import './style.scss'

interface Props {
    name: string
}

function Icon({ name, ...props }: Props) {
    const [state, setState] = useState({
        src: ''
    })
    useEffect(() => {
        loadImage()
    }, [])
    const loadImage = async () => {
        try {
            const { default: src } = await import(`../../img/${name}.svg`)
            setState({
                src
            })
        } catch (err) {
            console.log('In loading image we have problem ')
        }
    }
    return <img alt={name} className="image" src={state.src} {...props} />
}

export default memo(Icon)
