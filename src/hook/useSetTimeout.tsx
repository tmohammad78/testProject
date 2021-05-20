import { useEffect, useRef } from 'react'

const UseSetTimeOut = (callback: any, delay: any) => {
    const savedCallback = useRef<any>()
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])
    useEffect(() => {
        function tick() {
            savedCallback.current()
        }

        if (delay !== null) {
            const id = setTimeout(tick, delay)
            return () => clearTimeout(id)
        }
    }, [delay])
}
export { UseSetTimeOut }
