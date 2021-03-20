import axios from "axios";
import { useEffect, useState } from "react";
import { factoryMethod } from '../../utils/factoryMethod'
import { newQuestion } from "src/type/newQuestion";
import Spinner from "src/components/spinner";

const QuestionContainer = () => {
    const [questions, setQuestions] = useState<newQuestion[] | null>();
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
        axios.get("https://opentdb.com/api.php?amount=10&category=18&type=multiple")
            .then(({ data }) => {
                setQuestions(factoryMethod(data.results));
                setLoading(false)
            })
    }
    return (
        <div>
            {loading && <Spinner />}
            {questions && questions.map((item) => {
                return <div>{item.question}</div>
            })
            }
        </div>
    )
}
export default QuestionContainer;