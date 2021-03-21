import { FC, useContext, useEffect, useState } from "react";
import { DataContext } from "src/pages/mainContainer";
import { newAnswer } from "src/type/newAnswer";
import { newObjData } from "src/type/newObjData";
import { newQuestion } from "src/type/newQuestion";
import ButtonList from "../buttonList";
import IconBox from "../iconBox";
import TitleQuestion from "../title";

const QuestionBox: FC = () => {
    const { data, setData } = useContext(DataContext)
    const [state, setState] = useState({
        step: 0,
        finished: false,
        iconStatus: ['']
    })
    console.log(data)

    // const handlerNextStep = () => {

    //     data[0].answers[state.step].find((item: any) => {
    //         const a = Object.keys(item).includes("status")
    //         if (a) {
    //             setState((prev: any) => ({
    //                 ...prev,
    //                 iconStatus: [...prev.iconStatus, item.status === "correct"]
    //             }))
    //         }
    //     })

    //     if (state.step + 1 >= data[0].answers.length) {
    //         setState({
    //             ...state,
    //             finished: true
    //         })
    //     } else {
    //         setTimeout(() => {
    //             setState((prev) => ({
    //                 ...prev,
    //                 step: prev.step + 1
    //             }))
    //         }, 1000)
    //     }
    //     console.log("sss", state.iconStatus)
    // }
    return (
        <>
            {
                !state.finished &&
                <>
                    {/* <TitleQuestion /> */}
                    <ButtonList />
                </>
            }
            {state.finished && <div>Finished</div>}
        </>
    )
}
export default QuestionBox;