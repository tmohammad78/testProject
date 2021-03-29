import React, { memo, useState } from "react";
import { useHistory } from "react-router";

import { useAuth } from "../../context/auth-context";
import { AuthUser } from "../../type/authType";
import ErrorMessage from "../errorMessage";
import AuthInputForm from "../authInput";
import Button from "../button";

import "./style.scss";

/**
 * Auth form component to show login form
 * @returns 
 */
const AuthForm = () => {
    const { state, login } = useAuth();
    const history = useHistory()
    const [infoUser, setInfoUser] = useState<AuthUser>({
        firstname: '',
        lastname: ''
    })
    /**
     * pass params to login from context and return result of validation to 
     * redirect slash path
     * @param : get firstname and lastname  
     */
    const handlerSubmitForm = ({ firstname, lastname }: AuthUser) => {
        login({ firstname, lastname }).then((res) => {
            return res ? history.push("/") : ''
        });
    }
    /**
     * to setState items
     * @param e :event of changes
     */
    const handlerChange = (e: React.FormEvent<EventTarget>) => {
        let target = e.target as HTMLInputElement;
        setInfoUser((prev: AuthUser) => ({
            ...prev,
            [target.id]: target.value
        }))
    }

    return (
        <div className="loginForm">
            <AuthInputForm
                id="firstname"
                className="input"
                icon="user"
                placeHolder="First name"
                handlerChange={handlerChange} />
            {!state.error.valid && <ErrorMessage message={state.error.firstname} />}
            <AuthInputForm
                id="lastname"
                className="input"
                icon="user"
                placeHolder="Last name"
                handlerChange={handlerChange} />
            {!state.error.valid && <ErrorMessage message={state.error.lastname} />}
            <Button
                bgColor="#39e9e6"
                color="white"
                className="button"
                onClick={() => handlerSubmitForm(infoUser)} >Submit</Button>
        </div>
    )
}
export default memo(AuthForm);