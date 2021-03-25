import { FC, useContext } from 'react';
import { DataContext } from '../../context/data-context';

import './style.scss';

const TitleQuestion: FC = () => {

    const { state } = useContext(DataContext)
    return (
        <div className="spanBox" >
            <span>{state.questions[state.step]}</span>
        </div>
    )
}

export default TitleQuestion;