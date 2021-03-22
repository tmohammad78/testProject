
import { createContext, ReactNode, useContext, useReducer } from 'react';
import { AuthType } from 'src/type/authType';


const initial: AuthType = {
    loading: false,
    status: '',
    user: {
        firstname: '',
        lastname: ''
    }
}

export const AuthContext = createContext<any>(initial);

const reducer = (state: AuthType, action: any) => {
    switch (action.type) {
        case "LOGIN":
            const { firstname, lastname, status } = action.payload;
            return {
                ...state,
                status,
                user: {
                    firstname,
                    lastname
                }
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