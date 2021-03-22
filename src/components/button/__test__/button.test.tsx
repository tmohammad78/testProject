import { cleanup, fireEvent, render } from '@testing-library/react'
import React from 'react'

import renderer from 'react-test-renderer';
import Button from '../index'

describe("Button component", () => {
    test("snapp shot test and check children value", () => {
        const component = renderer.create(<Button>Test</Button>)
        expect(component.toJSON()).toMatchSnapshot()
        expect(component.root.findByType("button").props.children).toEqual("Test");
    })
    test("handler click function as props should get data when clicked", (done) => {
        function handler(e) {
            expect(e.target.id).toEqual("1")
            done()
        }
        const { getByText } = render(<Button onClick={handler} >click me</Button>)
        const node = getByText("click me")
        fireEvent.click(node, { target: { id: 1 } })
    })
    afterEach(cleanup)
})