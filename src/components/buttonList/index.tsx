import { FC, useContext, useEffect } from "react";

import { DataContext } from "src/context/data-context";
import { newAnswer } from "../../type/newAnswer";
import Button from "../button";
import './style.scss';

const ButtonList: FC = () => {
    const { state, dispatch } = useContext(DataContext)
    useEffect(() => {
        console.log(state.result);

        const time = setTimeout(() => {
            dispatch({
                type: "NextStep",
                step: state.step + 1
            })
        }, 1000)
        return () => clearTimeout(time)
    }, [state.result])
    const handlerClick = (e: any, item: any) => {
        e.preventDefault()
        let status = ''
        const [obj] = state.answers[state.step].filter((answer: any) => answer.id === item.id).map((obj: any) => {
            console.log(obj)
            if (obj.correct) {
                status = 'correct'
            } else {
                status = 'incorrect'
            }
            return obj;
        })
        obj.status = status;
        dispatch({
            type: "SETRESULT",
            result: [...state.result, status]
        })
    }
    return (
        <div className="buttonList">
            {state.answers[state.step] && state.answers[state.step].map((item: newAnswer, i: number) => {
                return (
                    <Button className={item.status} key={item.id} onClick={(e) => handlerClick(e, item)}  >
                        {item.answer}
                    </Button>
                );
            })}
        </div>
    )
}
export default ButtonList;