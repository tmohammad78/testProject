import { ReactNode } from "react";
import "./style.scss";

const Wrapper = ({ children, showSpinner }: { children: ReactNode, showSpinner: boolean }) => {
    return (
        <div className={showSpinner ? "wrapper-spinner" : ""}>
            <div className="inner-spinner"  >
                <div className="loading">
                </div>
            </div>
            {children}
        </div>
    )
}
export default Wrapper;