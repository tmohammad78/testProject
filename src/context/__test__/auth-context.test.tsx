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

    test("when Mohammad login should show error", () => {
        const { getByText } = render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {
                        value => <>
                            {!value.state.error.valid &&
                                <span className="error">{value.state.error.firstname}</span>}
                            <button onClick={() =>
                                value.login({ firstname: "Mohammad", lastname: "Taheri" })}
                            >Click</button>
                        </>
                    }
                </AuthContext.Consumer>
            </AuthProvider >
        )

        fireEvent.click(getByText("Click"))
        expect(document.querySelector(".error").textContent).toEqual("The firstname is incorrect")
    })
    test("when Hamed Kazemi login should not show error", () => {
        const { getByText } = render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {
                        value => <>
                            {!value.state.error.valid &&
                                <span className="error">{value.state.error.firstname}</span>}
                            <span>{value.state.user.firstname}</span>
                            <button onClick={() =>
                                value.login({ firstname: "hamed", lastname: "Kazemi" })}
                            >Click</button>
                        </>
                    }
                </AuthContext.Consumer>
            </AuthProvider >
        )

        fireEvent.click(getByText("Click"))
        expect(getByText("hamed")).toBeInTheDocument()
    })

    test("check result on then of login function ", () => {
        let result
        const { getByText } = render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {
                        value => <>
                            {!value.state.error.valid &&
                                <span className="error">{value.state.error.firstname}</span>}
                            <button onClick={() =>
                                value.login({ firstname: "Mohammad", lastname: "Taheri" }).then(res => {
                                    result = res
                                })}
                            >Click</button>
                        </>
                    }
                </AuthContext.Consumer>
            </AuthProvider >
        )
        expect(result).toBeFalsy
    })
})