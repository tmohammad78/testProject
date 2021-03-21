
import { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext(null);

function AuthProvider({ children }: any): any {
    const [state, setState] = useState<any>({
        loading: false,
        status: '',
        user: null
    })
    useEffect(() => {
        setState({
            loading: true,
            status: 'success',
            user: {
                firstName: "Hamed",
                lastName: "kazemi"
            }
        })
    }, [])
    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext)
export { AuthProvider, useAuth }