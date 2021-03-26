import { FC, useContext } from "react";

import { DataContext } from "../../context/data-context";
import ButtonList from "../buttonList";
import TitleQuestion from "../title";
import IconBox from "../iconBox";

import "./style.scss";

const QuestionBox: FC = () => {
    const { state } = useContext(DataContext)
    const questionLenght = state.questions.length;
    return (
        <>
            <IconBox />
            <TitleQuestion />
            <ButtonList />
            {state.step === questionLenght &&
                questionLenght > 0 && <div className="finished">Finished</div>}
        </>
    )
}
export default QuestionBox;