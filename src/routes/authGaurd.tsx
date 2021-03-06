import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthContext } from '../store/context/auth-context'

function AuthGaurd({ Component, ...res }: any) {
    const { state } = useContext(AuthContext)
    return (
        <Route
            {...res}
            render={(props) => {
                if (state.status === 'success') {
                    return <Component {...props} {...res} />
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/login'
                            }}
                        />
                    )
                }
            }}
        />
    )
}

export default AuthGaurd
