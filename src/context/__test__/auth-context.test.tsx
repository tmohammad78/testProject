import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { AuthContext, AuthProvider } from '../auth-context'

describe("Auth Context", () => {
    test("when firstname has no value", () => {
        const { getByText } = render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {
                        value => <span>This is {value.state.user.firstname}</span>
                    }
                </AuthContext.Consumer>
            </AuthProvider>
        )
        expect(getByText("This is")).toBeTruthy();
    })

    test("when Mohammad login", () => {
        const { getByText } = render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {
                        value => <>
                            <span>This is {value.state.user.firstname} {value.state.user.lastname}</span>
                            <button onClick={() => value.dispatch({
                                type: "LOGIN",
                                payload: {
                                    firstname: "Mohammad",
                                    lastname: "Taheri ",
                                    status: "SUCCESS"
                                }
                            })}>Click</button>
                        </>
                    }
                </AuthContext.Consumer>
            </AuthProvider>
        )

        fireEvent.click(getByText("Click"))
        expect(getByText("This is Mohammad Taheri")).toBeInTheDocument()
    })
})