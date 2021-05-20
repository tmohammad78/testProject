import { withRouter } from 'react-router'

import AuthForm from '../../components/authForm'
import './style.scss'

function AuthenticationPage() {
    return (
        <div className="auth-page">
            <div className="wrapper">
                <AuthForm />
            </div>
        </div>
    )
}

export default withRouter(AuthenticationPage)
