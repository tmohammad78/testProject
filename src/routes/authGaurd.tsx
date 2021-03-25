import { useContext, useEffect } from "react";
import {
    Route,
    Redirect,
    RouteComponentProps
} from "react-router-dom";


import AuthenticationPage from "../pages/authentication";
import { AuthContext } from "../context/auth-context";


const AuthGaurd = (props: any) => {
    const { state } = useContext(AuthContext)
    useEffect(() => {
        console.log(state.user);
    })
    return state.status === "success" ? (
        <Route component={AuthenticationPage} {...props} />
    ) : (
        <Redirect to={{
            pathname: '/login'
        }} />
    )

}
export default AuthGaurd;