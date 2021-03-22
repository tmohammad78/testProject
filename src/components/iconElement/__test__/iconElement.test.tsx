import { cleanup, fireEvent, render } from '@testing-library/react'
import renderer, { act } from 'react-test-renderer';
import React from 'react'
import Icon from '../index';

xdescribe("icon element", () => {
    it("icon render", () => {
        act(() => {
            const { getByText } = render(<Icon name="test" />)
        })

        // console.log(getByText)
    })
})