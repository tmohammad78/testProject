import { FC, useCallback, useContext, useEffect, useState } from "react";
import { DataContext } from "src/context/data-context";
import { newAnswer } from "../../type/newAnswer";
import Button from "../button";
import './style.scss';

const ButtonList: FC = () => {
    const { state, dispatch } = useContext(DataContext)
    // const [list, setList] = useState(listButton);
    useEffect(() => {
        console.log("Scsdc");

        console.log(state);

    })
    const handlerClick = (item: any) => {
        let status = ''
        const [obj] = state.answers[state.step].filter((answer: any) => answer.id === item.id).map((obj: any) => {
            if (obj.correct) {
                status = 'correct'
            } else {
                status = 'incorrect'
            }
            return obj;
        })
        obj.status = status;
        console.log(obj)
        dispatch({
            type: "NextStep",
            step: state.step + 1
        })
        dispatch({
            type: "SETRESULT",
            result: [...state.result, status]
        })
    }
    return (
        <div className="buttonList">
            {state.answers[state.step] && state.answers[state.step].map((item: newAnswer, i: number) => {
                return (
                    <Button className={item.status} key={item.id} onClick={() => handlerClick(item)}  >
                        {item.answer}
                    </Button>
                );
            })}
        </div>
    )
}
export default ButtonList;