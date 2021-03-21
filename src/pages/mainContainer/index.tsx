import axios from "axios";
import { createContext, Dispatch, FC, useEffect, useReducer, useState } from "react";
import { factoryMethod } from '../../utils/factoryMethod'
import Spinner from "src/components/spinner";
import QuestionBox from "src/components/questionBox";
import { ContextState } from "src/type/contextState";
import RestApi from "src/Api/rest";

const initialState: ContextState = {
    questions: [],
    answers: [],
    step: 0,
    result: []
}
// export const DataContext = createContext<
//     { data: ContextState; setData: Dispatch<any> }>
//     ({ data: initialState, setData: () => null })
export const DataContext = createContext(null)
function reducer(state: ContextState, action: any): ContextState {
    switch (action.type) {
        case "setData":
            return {
                ...state,
                ...state.questions,
                ...state.answers
            }
        default:
            return { ...state }
    }
    // console.log(item, state, 'ddd')
    // return { ...state, ...item }
}

const QuestionContainer: FC = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchData();
    }, [])
    /**
     * This method is responsible to fetch data , call factory method to create 
     * new object and set questions
     */
    const fetchData = () => {
        setLoading(true)
        axios.get(RestApi.getQuestions())
            .then(({ data }: any) => {
                const { questions, answers } = factoryMethod(data.results)
                setData({ questions, answers });
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <>
            {loading && <Spinner />}
            {
                data && !loading &&
                <DataContext.Provider value={{ data, setData }}>
                    <QuestionBox />
                </DataContext.Provider>
            }
        </>
    )
}
export default QuestionContainer;