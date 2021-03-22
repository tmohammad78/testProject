import { FC, memo, useContext, useEffect, useState } from "react"
import { DataContext } from "src/context/data-context"
import Icon from "../iconElement"
import "./style.scss";


const IconBox: FC = () => {
    const { state } = useContext(DataContext)
    return (
        <div className="iconBox">
            {
                state.result.map((status: string, i: number) => {
                    return (
                        <Icon key={i}
                            name={status === "correct" ? 'tick' : 'times'} />
                    )
                })
            }
        </div>
    )
}
export default memo(IconBox);