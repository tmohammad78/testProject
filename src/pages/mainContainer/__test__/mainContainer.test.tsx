import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
// import mockAxios from 'jest-mock-axios';
import QuestionContainer from '../index';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
jest.mock("../../../components/spinner");
jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>;
xdescribe("main container component", () => {
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
        mockedAxios.get.mockResolvedValueOnce(data)
        act(async () => {
            render(<QuestionContainer />)
        })
        expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    })
})