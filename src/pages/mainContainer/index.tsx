import React, { FC, useContext, useEffect, useState } from "react";
import axios from "axios";

import { factoryMethod } from '../../utils/factoryMethod'
import { DataContext } from "../../context/data-context";
import QuestionBox from "../../components/questionBox";
import Spinner from "../../components/spinner";
import RestApi from "../../Api/rest";
import { QuestionList } from "./_model/questionList";


const QuestionContainer: FC = () => {
    const [loading, setLoading] = useState(true)
    const { dispatch } = useContext(DataContext)

    useEffect(() => {
        fetchData();
    }, [])
    /**
     * This method is responsible to fetch data , call factory method to create 
     * new object and set questions
     */
    const fetchData = () => {
        axios.get(RestApi.getQuestions())
            .then(({ data }: { data: { results: QuestionList[] } }) => {
                const { questions, answers } = factoryMethod(data.results)
                dispatch({
                    type: "SET",
                    payload: {
                        questions,
                        answers
                    }
                })
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <Spinner showSpinner={loading}>
            { !loading && <QuestionBox />}
        </Spinner>
    )
}
export default QuestionContainer;