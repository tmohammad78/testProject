import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { AuthType } from '../type/authType';

type ContextType = {
    state: AuthType,
    dispatch: (action: IActions) => void
}
interface IActions {
    type: string,
    payload: AuthType
}

const initial: AuthType = {
    loading: false,
    status: '',
    user: {
        firstname: '',
        lastname: ''
    }
}

export const AuthContext = createContext<ContextType>({ state: initial, dispatch: () => { } });

const reducer = (state: AuthType, action: IActions) => {
    switch (action.type) {
        case "LOGIN":
            const { user, status } = action.payload;
            return {
                ...state,
                status,
                user
            }
        default:
            return state;
    }
}
function AuthProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initial)
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext)
export { AuthProvider, useAuth }