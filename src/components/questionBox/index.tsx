import ButtonList from "../buttonList";
import TitleQuestion from "../title";

interface Props {
    question: string;
    answers: any
}
const QuestionBox = ({ question, answers }: Props) => {
    return (
        <>
            <TitleQuestion question={question} />
            <ButtonList listButton={answers} />
        </>
    )
}
export default QuestionBox;