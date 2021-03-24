import axios from "axios";
import { FC, useContext, useEffect, useState } from "react";
import { factoryMethod } from '../../utils/factoryMethod'
import Spinner from "../../components/spinner";
import RestApi from "../../Api/rest";
import { DataContext } from "../../context/data-context";
import QuestionBox from "../../components/questionBox";


const QuestionContainer: FC = () => {
    const [loading, setLoading] = useState(false)
    const { state, dispatch } = useContext(DataContext)

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