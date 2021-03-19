import './style.scss';

interface Props {
    question: string
}
const TitleQuestion = ({ question }: Props) => {

    return (
        <div className="spanBox" >
            <span>{question}</span>
        </div>
    )
}

export default TitleQuestion;