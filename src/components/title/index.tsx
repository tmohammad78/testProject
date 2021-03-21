import { useContext } from 'react';
import { DataContext } from 'src/context/data-context';
import './style.scss';

const TitleQuestion = () => {

    const { state, dispatch } = useContext(DataContext)
    return (
        <div className="spanBox" >
            <span>{state.questions[state.step]}</span>
        </div>
    )
}

export default TitleQuestion;