import React, { createContext, ReactNode, useContext, useReducer } from 'react'

import {
    ContextType,
    AuthActions,
    AuthAction,
    AuthContextState
} from './type/auth'
import { validation } from '../utils/validation'
import { AuthUser } from '../type/authType'

const initial: AuthContextState = {
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

export const AuthContext = createContext<ContextType>({
    state: initial,
    dispatch: () => {
        //
    },
    login: () => Promise.resolve(true)
})

const reducer = (
    state: AuthContextState,
    action: AuthActions
): AuthContextState => {
    switch (action.type) {
        case AuthAction.LOGIN: {
            const { user, status } = action.payload
            return {
                ...state,
                status,
                user
            }
        }
        case AuthAction.ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}

function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initial)

    const login = ({ firstname, lastname }: AuthUser): Promise<boolean> => {
        const error = validation({ firstname, lastname })
        if (error.valid) {
            dispatch({
                type: AuthAction.LOGIN,
                payload: {
                    status: 'success',
                    user: {
                        firstname,
                        lastname
                    }
                }
            })
        }
        dispatch({
            type: AuthAction.ERROR,
            payload: error
        })
        return new Promise((resolve) => {
            resolve(error.valid)
        })
    }

    return (
        <AuthContext.Provider value={{ state, dispatch, login }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)
export { AuthProvider, useAuth }
