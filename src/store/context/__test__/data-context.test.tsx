import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { DataContext, DataProvider } from '../data-context'

function componentStep(value) {
    return (
        <div>
            step:{value.state.step}
        </div>
    )
}
function componentQuestion(value) {
    const questions = ["What's up?"]
    const answers = [{
        answer: 'Nothing',
        correct: true,
        id: 0
    }]
    return (
        <div>
            {value.state.questions.length > 0 ? value.state.questions.map((item, i) => {
                return (
                    <div key={i}>
                        {item}
                    </div>
                )
            }) : "No Value"}
            <button onClick={() => value.dispatch({
                type: "SET",
                payload: {
                    questions,
                    answers
                }

            })} >click</button>
        </div>
    )
}

function ProviderHOC(component) {
    return render(
        <DataProvider>
            <DataContext.Consumer>
                {component}
            </DataContext.Consumer>
        </DataProvider>
    )
}
describe("when render in the first", () => {
    test("check step in the first render", () => {
        const { getByText } = ProviderHOC(componentStep)
        expect(getByText("step:0")).toBeInTheDocument();
    })

    test("when we dispatch new items ", () => {
        const { getByText } = ProviderHOC(componentQuestion)
        expect(getByText("No Value")).toBeInTheDocument();
        fireEvent.click(getByText("click"))
        expect(getByText("What's up?")).toBeInTheDocument();
    })
})