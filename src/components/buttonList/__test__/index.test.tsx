import React from 'react'
import {act} from 'react-test-renderer';
import {fireEvent, render, screen} from '@testing-library/react'

import {DataContext} from '../../../store/context/data-context'
import ButtonList from '../index'

jest.mock("../../../components/spinner");

//// should test render of child component and states
describe("Button list component", () => {

    test("when button clicked , handler function should called ", () => {
        const fakeState = {
            questions: ["test"],
            answers: [
                [{
                    answer: 'answer1',
                    correct: false,
                    id: 0
                }, {
                    answer: 'answer2',
                    correct: true,
                    id: 0
                }]
            ],
            result: [],
            step: 0
        }
        const dispatch = jest.fn()
        act(() => {
            render(
                <DataContext.Provider value={{state: fakeState, dispatch}}>
                    <ButtonList/>
                </DataContext.Provider>
            )
        })
        expect(screen.getByText("Spinner")).toBeInTheDocument()
        // fireEvent.click(screen.getByText("Spinner"))
    })
})
