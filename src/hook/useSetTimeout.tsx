import { useEffect, useRef } from "react";

const UseSetTimeOut = (callback: any, delay: any) => {
    const savedCallback = useRef<any>();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setTimeout(tick, delay);
            return () => clearTimeout(id);
        }
    }, [delay]);
}
export { UseSetTimeOut }