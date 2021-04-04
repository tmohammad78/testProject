import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import QuestionContainer from '../index';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
jest.mock("../../../components/spinner");
jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("main container component", () => {
    test("Sddd", () => {

    })
    test("fetch data", async () => {
        const data = {
            data: {
                results: [{
                    correct_answer: "a",
                    incorrect_answers: ["b", "c", "d"],
                    question: "Which one is true",
                }]
            }
        };
        await waitFor(() => mockedAxios.get.mockResolvedValueOnce(data))
        const { debug } = render(<QuestionContainer />)
        debug()

    })
})