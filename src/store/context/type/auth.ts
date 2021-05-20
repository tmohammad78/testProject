import { AuthType, AuthUser, ErrorAuth } from '../../../type/authType'

export type ContextType = {
    state: AuthContextState
    dispatch: (action: AuthActions) => void
    login: ({ firstname, lastname }: AuthUser) => Promise<boolean>
}

export interface AuthContextState extends AuthType {
    error: ErrorAuth
}

export enum AuthAction {
    ERROR = 'ERROR',
    LOGIN = 'LOGIN'
}

export interface ErrorAction {
    type: AuthAction.ERROR
    payload: ErrorAuth
}

export interface LoginAction {
    type: AuthAction.LOGIN
    payload: AuthType
}

export type AuthActions = ErrorAction | LoginAction
