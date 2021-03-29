import React, { FC, useContext, useRef, useState } from "react";


import { DataContext } from "../../context/data-context";
import { DataAction } from "../../context/type/data";
import { newAnswer } from "../../type/newAnswer";
import Wrapper from "../spinner";
import Button from "../button";

import './style.scss';

/**
 * show list of buttton for answers
 */
const ButtonList: FC = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedId, setSelectedId] = useState<number | null>(null)
    const { state, dispatch } = useContext(DataContext)
    const timeout = useRef<any>(null);

    // useEffect(() => {
    //     console.log(timeout.current);
    //     return () => clearTimeout(timeout.current)
    // }, [timeout.current])
    const handlerClick = (e: any, item: newAnswer) => {
        e.preventDefault()
        setLoading(true)
        operationDispatch(item);
        setSelectedId(item.id)
    }
    /**
     * check correct anwser and return boolean 
     * @param item :newAnswer objet
     * @returns : return a boolean type 
     */
    const checkStatus = (item: newAnswer): boolean => {
        return state.answers[state.step].filter((answer: newAnswer) => answer.id === item.id).flatMap((obj: newAnswer) => {
            return obj.correct;
        })[0]
    }
    /**
     * to set result and dispatch for next step
     * to show a delay , we set false spinner in the setTimeout
     * @param item : newAnswer object
     */
    const operationDispatch = (item: newAnswer) => {
        dispatch({
            type: DataAction.SETRESULT,
            payload: {
                result: [...state.result, checkStatus(item)]
            }
        })
        timeout.current = setTimeout(() => {
            dispatch({
                type: DataAction.NextStep,
                payload: {
                    step: state.step + 1
                }
            })
            setLoading(false)
        }, 1000)
    }
    return (
        <Wrapper showSpinner={loading}>
            <div className="buttonList">
                {state.answers[state.step] && state.answers[state.step].map((item: newAnswer, i: number) => {
                    return (
                        <Button className={selectedId === item.id ? item.correct ? "correct" : "incorrect" : ""}
                            key={item.id}
                            id={item.id}
                            onClick={(e) => handlerClick(e, item)}  >
                            {item.answer}
                        </Button>
                    );
                })}
            </div>
        </Wrapper>
    )
}
export default ButtonList;