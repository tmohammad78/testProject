
import React from 'react'
import { render, screen } from "@testing-library/react"

import IconBox from '../index';
import { DataContext } from '../../../context/data-context';

const customRender = (ui, { providerProps, ...renderOptions }) => {
    return render(
        <DataContext.Provider {...providerProps}>
            {ui}
        </DataContext.Provider>,
        renderOptions
    )
}

xdescribe("Icon Box component", () => {

    test("render component", () => {
        jest.mock('../../iconElement', () => <div data-testid="icon" ></div>)
        const dd = {
            state: {
                result: [true]
            }
        }
        const { getByTestId } = render(
            <DataContext.Provider value={dd}>
                <IconBox />
            </DataContext.Provider>
        )
        // expect(screen.getByRole('img')).toHaveAttribute('alt', "tick")
        expect(getByTestId(/icon/)).toBeInTheDocument();
    })
})