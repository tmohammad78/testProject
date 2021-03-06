import React, { FC } from 'react'

import { DataProvider } from '../../store/context/data-context'
import QuestionContainer from '../mainContainer'

import './style.scss'

const QuestionPage: FC = () => {
    return (
        <DataProvider>
            <div className="main-box">
                <div className="inner">
                    <div className="inner-child" />
                </div>
                <QuestionContainer />
            </div>
        </DataProvider>
    )
}
export default QuestionPage
