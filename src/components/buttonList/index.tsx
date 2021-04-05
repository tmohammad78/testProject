import React, { FC, useContext, useState } from 'react'

import { DataContext } from '../../store/context/data-context'
import { DataAction } from '../../store/context/type/data'
import { newAnswer } from '../../type/newAnswer'
import Wrapper from '../spinner'
import Button from '../button'

import './style.scss'

/**
 * show list of buttton for answers
 */
const ButtonList: FC = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedId, setSelectedId] = useState<number | null>(null)
    const { state, dispatch } = useContext(DataContext)

    const handlerClick = (e: any, item: newAnswer) => {
        e.preventDefault()
        setLoading(true)
        operationDispatch(item)
        setSelectedId(item.id)
    }
    /**
     * check correct answer and return boolean
     * @param item :newAnswer objet
     * @returns : return a boolean type
     */
    const checkStatus = (item: newAnswer): boolean => {
        return state.answers[state.step]
            .filter((answer: newAnswer) => answer.id === item.id)
            .flatMap((obj: newAnswer) => {
                return obj.correct
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
        setTimeout(() => {
            dispatch({
                type: DataAction.NextStep,
                payload: {
                    step: state.step + 1
                }
            })
            setLoading(false)
        }, 1000)
    }
    /**
     * To handler Render Button
     */
    const handlerRenderButton = () => {
        return state.answers[state.step].map((item: newAnswer) => {
            const className =
                selectedId === item.id
                    ? item.correct
                        ? 'correct'
                        : 'incorrect'
                    : ''
            return (
                <Button
                    className={className}
                    id={item.id}
                    key={item.id}
                    onClick={(e) => handlerClick(e, item)}>
                    {item.answer}
                </Button>
            )
        })
    }
    return (
        <Wrapper showSpinner={loading}>
            <div className="buttonList">
                {state.answers[state.step] && handlerRenderButton()}
            </div>
        </Wrapper>
    )
}
export default ButtonList
