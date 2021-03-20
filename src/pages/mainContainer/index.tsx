import axios from "axios";
import { useEffect, useState } from "react";
import { factoryMethod } from '../../utils/factoryMethod'
import { newQuestion } from "src/type/newQuestion";
import Spinner from "src/components/spinner";
import QuestionBox from "src/components/questionBox";
import { newObjData } from "src/type/newObjData";

const QuestionContainer = () => {
    const [data, setData] = useState<any>();
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
            .then(({ data }: any) => {
                const { questions, answers } = factoryMethod(data.results)
                setData(factoryMethod(data.results));
                setLoading(false)
            })
            .catch((err) => console.log(err));
    }
    return (
        <>
            {loading && <Spinner />}
            {data && !loading && <QuestionBox data={data} />}
        </>
    )
}
export default QuestionContainer;