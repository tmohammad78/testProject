import { FC, useContext } from "react";

import { DataContext } from "../../context/data-context";
import ButtonList from "../buttonList";
import TitleQuestion from "../title";
import IconBox from "../iconBox";

const QuestionBox: FC = () => {
    const { state } = useContext(DataContext)
    return (
        <>
            <IconBox />
            <TitleQuestion />
            <ButtonList />
            {state.step === state.questions.length && <div>Finished</div>}
        </>
    )
}
export default QuestionBox;