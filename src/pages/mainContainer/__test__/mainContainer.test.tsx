import React from 'react'
import { render, screen } from '@testing-library/react'

import QuestionContainer from '../index';

const axios = {
    get: jest.fn().mockResolvedValue({
        res: {
            data: {

            }
        }
    })
}

jest.mock("../../../components/spinner");
describe("main container component", () => {
    test("fetch data", async () => {
        axios.get.mockResolvedValue({
            res: {
                data: {
                    results: [{
                        correct_answer: "a",
                        incorrect_answers: ["b", "c", "d"],
                        question: "Which one is true",
                    }]
                }
            }
        })
        const { getByText } = render(<QuestionContainer />)
        // expect(getByText("Loading")).toHaveTextContent("Loading...")
        screen.debug()
    })
})