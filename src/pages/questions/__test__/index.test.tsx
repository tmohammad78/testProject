import { render } from "@testing-library/react"
import QuestionPage from '../index';
import React from 'react'

jest.mock("../../../components/spinner");
describe("Question page component ", () => {
    test("tt", () => {
        const { getByText } = render(<QuestionPage />)
        expect(getByText(/Spinner/)).toBeInTheDocument();
    })
})