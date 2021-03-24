import { FC, useContext, useEffect, useState } from "react";

import { DataContext } from "src/context/data-context";
import { newAnswer } from "../../type/newAnswer";
import Button from "../button";
import Spinner from "../spinner";
import Wrapper from "../wrapper-spinner";
import './style.scss';


const ButtonList: FC = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedId, setSelectedId] = useState<number | null>(null)
    const { state, dispatch } = useContext(DataContext)

    const handlerClick = (e: any, item: newAnswer) => {
        e.preventDefault()
        setLoading(true)
        operationDispatch(item);
        setSelectedId(item.id)
    }
    const checkStatus = (item: newAnswer): boolean => {
        return state.answers[state.step].filter((answer: newAnswer) => answer.id === item.id).flatMap((obj: newAnswer) => {
            return obj.correct;
        })[0]
    }
    const operationDispatch = (item: newAnswer) => {
        dispatch({
            type: "SETRESULT",
            result: [...state.result, checkStatus(item)]
        })
        setTimeout(() => {
            dispatch({
                type: "NextStep",
                step: state.step + 1
            })
            setLoading(false)
        }, 1000)
    }
    return (
        <>
            <Wrapper showSpinner={loading}>
                <div className="buttonList">
                    {state.answers[state.step] && state.answers[state.step].map((item: newAnswer, i: number) => {
                        return (
                            <Button className={selectedId === item.id ? item.correct ? "correct" : "incorrect" : ""} key={item.id} id={item.id} onClick={(e) => handlerClick(e, item)}  >
                                {item.answer}
                            </Button>
                        );
                    })}
                </div>
            </Wrapper>
        </>
    )
}
export default ButtonList;