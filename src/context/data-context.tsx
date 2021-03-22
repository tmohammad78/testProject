import { createContext, ReactNode, useReducer } from "react";
import { ContextState } from "src/type/contextState";

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
export const DataContext = createContext<any>(initial)

const reducer = (state: ContextState, action: any) => {
    switch (action.type) {
        case "SET":
            const { questions, answers } = action;
            return {
                ...state,
                answers,
                questions
            }
        case "NextStep":
            const { step } = action;
            return {
                ...state,
                step
            }
        case "SETRESULT":
            const { result } = action;
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