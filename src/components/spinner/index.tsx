import { ReactNode } from "react";

import "./style.scss";

interface Props {
    children: ReactNode,
    showSpinner: boolean
}
const Spinner = ({ children, showSpinner }: Props) => {
    return (
        <div className={showSpinner ? "spinner" : ""}>
            <div className="inner-spinner"  >
                <div className="loading">
                </div>
            </div>
            {children}
        </div>
    )
}
export default Spinner;