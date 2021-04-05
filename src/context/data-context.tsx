import React, { createContext, ReactNode, useReducer } from 'react'

import {
    ContextState,
    DataAction,
    DataActions,
    DataContextType
} from './type/data'

const initial: ContextState = {
    questions: [],
    answers: [
        [
            {
                answer: '',
                correct: false,
                id: 0
            }
        ]
    ],
    result: [],
    step: 0
}

export const DataContext = createContext<DataContextType>({
    state: initial,
    dispatch: () => {
        //
    }
})

const reducer = (state: ContextState, action: DataActions) => {
    switch (action.type) {
        case DataAction.SET: {
            const { questions, answers } = action.payload
            return {
                ...state,
                answers,
                questions
            }
        }
        case DataAction.NextStep: {
            const { step } = action.payload
            return {
                ...state,
                step
            }
        }
        case DataAction.SETRESULT: {
            const { result } = action.payload
            return {
                ...state,
                result
            }
        }
        default:
            return state
    }
}

function DataProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initial)
    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataProvider }
