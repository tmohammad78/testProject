import Routes from './routes'
import { AuthProvider } from './store/context/auth-context'

function App(): JSX.Element {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}

export default App
