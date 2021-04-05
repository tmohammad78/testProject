import { newAnswer } from '../../type/newAnswer'
import { newObjData } from '../../type/newObjData'

export interface ContextState {
    questions: string[]
    answers: newAnswer[][]
    step: number
    result: boolean[]
}

export type DataContextType = {
    state: ContextState
    dispatch: (action: DataActions) => void
}

export enum DataAction {
    SET = 'SET',
    NextStep = 'NextStep',
    SETRESULT = 'SETRESULT'
}

export interface setAction {
    type: DataAction.SET
    payload: newObjData
}

export interface setNextStepAction {
    type: DataAction.NextStep
    payload: {
        step: number
    }
}

export interface setResult {
    type: DataAction.SETRESULT
    payload: {
        result: boolean[]
    }
}

export type DataActions = setAction | setNextStepAction | setResult
