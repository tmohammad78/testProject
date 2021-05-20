import React, { memo, useCallback, useState } from 'react'
import { useHistory } from 'react-router'

import { useAuth } from '../../store/context/auth-context'
import { AuthUser } from '../../type/authType'
import ErrorMessage from '../errorMessage'
import AuthInputForm from '../authInput'
import Button from '../button'

import './style.scss'

/**
 * Auth form component to show login form
 * @returns
 */
function AuthForm() {
    const { state, login } = useAuth()
    const history = useHistory()
    const [infoUser, setInfoUser] = useState<AuthUser>({
        firstname: '',
        lastname: ''
    })
    /**
     * Pass params to login from context and return result of validation to redirect slash path
     * @param : get firstname and lastname
     */
    const handlerSubmitForm = ({ firstname, lastname }: AuthUser) => {
        login({ firstname, lastname }).then((res) => {
            return res ? history.push('/') : ''
        })
    }
    /**
     * To setState items
     * @param e :event of changes
     */
    const handlerChange = (e: React.FormEvent<EventTarget>) => {
        const target = e.target as HTMLInputElement
        setInfoUser((prev: AuthUser) => ({
            ...prev,
            [target.id]: target.value
        }))
    }

    const handlerSubmit = () => handlerSubmitForm(infoUser)

    return (
        <div className="loginForm">
            <AuthInputForm
                className="input"
                handlerChange={handlerChange}
                icon="user"
                id="firstname"
                placeHolder="First name"
            />
            {!state.error.valid && (
                <ErrorMessage message={state.error.firstname} />
            )}
            <AuthInputForm
                className="input"
                handlerChange={handlerChange}
                icon="user"
                id="lastname"
                placeHolder="Last name"
            />
            {!state.error.valid && (
                <ErrorMessage message={state.error.lastname} />
            )}
            <Button
                bgColor="#39e9e6"
                className="button"
                color="white"
                onClick={handlerSubmit}>
                Submit
            </Button>
        </div>
    )
}

export default memo(AuthForm)
