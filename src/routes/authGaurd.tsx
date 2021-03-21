import React, { Component, useContext, useEffect } from "react";
import {
    Route,
    Redirect,
    RouteComponentProps
} from "react-router-dom";


import AuthenticationPage from "src/pages/authentication";
import { AuthContext } from '../context/auth-context';

interface Props extends RouteComponentProps { }

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