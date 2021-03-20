import { useEffect, useState } from "react";
import { newAnswer } from "src/type/newAnswer";
import { newObjData } from "src/type/newObjData";
import { newQuestion } from "src/type/newQuestion";
import ButtonList from "../buttonList";
import TitleQuestion from "../title";

interface Props {
    data: newObjData
}
const QuestionBox =
    ({ data }: Props) => {
        const [state, setState] = useState({
            answers: data.answers,
            questions: data.questions,
            step: 0,
            finished: false
        })

        const handlerNextStep = () => {
            if (state.step + 1 >= data.answers.length) {
                setState({
                    ...state,
                    finished: true
                })
            } else {
                setTimeout(() => {
                    setState((prev) => ({
                        ...prev,
                        step: prev.step + 1
                    }))
                }, 1000)
            }

        }
        return (
            <>
                {
                    !state.finished &&
                    <>
                        <TitleQuestion question={state.questions[state.step]} />
                        <ButtonList listButton={state.answers[state.step]} callNextStep={handlerNextStep} />
                    </>
                }
                {state.finished && <div>Finished</div>}
            </>
        )
    }
export default QuestionBox;