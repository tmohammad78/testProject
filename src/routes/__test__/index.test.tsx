import React from 'react';
import { Redirect as MockRedirect } from 'react-router';
import { AuthContext } from '../../context/auth-context';
import { render } from '@testing-library/react';
import AuthGaurd from '../authGaurd';
import {
    Switch,
    Route,
    BrowserRouter,
} from "react-router-dom";
jest.mock("react-router", () => {
    return {
        Redirect: jest.fn(() => null)
    }
})
const renderComponent = (state) => {
    const dispatch = jest.fn(() => null)
    const login = jest.fn(() => null)
    const component = () => {
        return (
            <div>Test</div>
        )
    }
    return render(
        <AuthContext.Provider value={{ state, dispatch, login }}>
            <BrowserRouter>
                <AuthGaurd path="/" Component={component} />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}
xdescribe("Test the routing", () => {
    test("sss", () => {
        const fakeState = {
            status: '',
            user: {
                firstname: '',
                lastname: ''
            },
            error: {
                firstname: '',
                lastname: '',
                valid: false
            }
        }
        const { debug } = renderComponent(fakeState);
        // expect(MockRedirect).toHaveBeenCalled({
        //     to: "/"
        // }, {})
        debug()
        // expect(MockRedirect).toBeCalledTimes(1)
    })
})