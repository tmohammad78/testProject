import { memo } from "react";
import "./style.scss";

interface Props {
    /**
     * message of error
     */
    message: string;
    /**
     * type of error
     */
    type?: string
}
const ErrorMessage = ({ message, type }: Props) => {
    return (
        <div className="err-box" >
            <span className={`message ${type}`} >{message}</span>
        </div>
    )
}
export default memo(ErrorMessage);