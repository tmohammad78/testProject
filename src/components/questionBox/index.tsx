import { FC, useContext } from "react";
import { DataContext } from "src/context/data-context";

import ButtonList from "../buttonList";
import IconBox from "../iconBox";
import TitleQuestion from "../title";

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