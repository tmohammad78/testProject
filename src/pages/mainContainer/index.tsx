import axios from "axios";
import { createContext, Dispatch, FC, useContext, useEffect, useReducer, useState } from "react";
import { factoryMethod } from '../../utils/factoryMethod'
import Spinner from "src/components/spinner";
import RestApi from "src/Api/rest";
import { DataContext } from "src/context/data-context";
import QuestionBox from "src/components/questionBox";


const QuestionContainer: FC = () => {
    const [loading, setLoading] = useState(false)
    const { state, dispatch } = useContext(DataContext)

    useEffect(() => {
        fetchData();
        console.log("Scsdc", state);
    }, [])
    useEffect(() => {

        console.log("Scsdc", state);
    })
    /**
     * This method is responsible to fetch data , call factory method to create 
     * new object and set questions
     */
    const fetchData = () => {
        setLoading(true)
        axios.get(RestApi.getQuestions())
            .then(({ data }: any) => {
                const { questions, answers } = factoryMethod(data.results)
                dispatch({
                    type: "SET",
                    questions,
                    answers
                })
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
                state && !loading &&
                <QuestionBox />
            }
        </>
    )
}
export default QuestionContainer;