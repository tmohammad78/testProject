import React from 'react';
import { render } from '@testing-library/react'
import Input from '../index'
import user from '@testing-library/user-event';
describe("input component", () => {
    test("input type and value and props ", () => {
        const handlerChange = jest.fn(() => { })
        const { getByLabelText, rerender } = render(<Input handlerChange={handlerChange} />)
        const input = getByLabelText('input');
        user.type(input, "test")
        expect((input as any).value).toEqual("test")
        expect(input).toHaveAttribute('type', "text")
        rerender(<Input placeHolder="this is test" handlerChange={handlerChange} />)
        expect(input).toHaveAttribute('placeHolder', "this is test")
    })
})