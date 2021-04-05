import { render } from '@testing-library/react'
import { act } from 'react-test-renderer'
import React from 'react'
import Icon from '../index'

describe.skip('icon element', () => {
    it('icon render', () => {
        act(() => {
            const { getByText } = render(<Icon name="test" />)
        })

        // console.log(getByText)
    })
})
