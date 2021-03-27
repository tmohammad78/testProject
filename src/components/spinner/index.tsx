import { ReactNode } from "react";

import "./style.scss";

export interface Props {
    /**
     * children
     */
    children?: ReactNode,
    /**
     * show spinner 
     */
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