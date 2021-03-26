import React, { createContext, ReactNode, useReducer } from "react";

import { ContextState } from "../type/contextState";

interface IActions {
    type: string,
    payload: any
}
type DataContext = {
    state: ContextState,
    dispatch: (action: IActions) => void
}

const initial: ContextState = {
    questions: [],
    answers: [
        [{
            answer: '',
            correct: false,
            id: 0
        }]
    ],
    result: [],
    step: 0
}

export const DataContext = createContext<DataContext>({ state: initial, dispatch: () => { } })

const reducer = (state: ContextState, action: IActions) => {
    switch (action.type) {
        case "SET":
            const { questions, answers } = action.payload;
            return {
                ...state,
                answers,
                questions
            }
        case "NextStep":
            const { step } = action.payload;
            return {
                ...state,
                step
            }
        case "SETRESULT":
            const { result } = action.payload;
            return {
                ...state,
                result
            }
        default:
            return state;
    }
}

function DataProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initial)
    return (
        <DataContext.Provider value={{ state, dispatch }} >
            {children}
        </DataContext.Provider>
    )
}
export { DataProvider }