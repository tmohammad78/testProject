import { FC } from 'react';
import QuestionContainer from '../mainContainer';
import "./style.scss";

const QuestionPage: FC = () => {
    return (
        <div className="main-box">
            <div className="inner" >
                <div className="inner-child" ></div>
            </div>
            <QuestionContainer />
        </div>
    )
}
export default QuestionPage;