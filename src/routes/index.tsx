import { lazy, Suspense } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import AuthGaurd from './authGaurd'
import Spinner from '../components/spinner'

const QuestionPage = lazy(() => import('../pages/questions'))
const AuthenticationPage = lazy(() => import('../pages/authentication'))
const NotFound = lazy(() => import('../pages/notFound'))

const renderSpinner = () => {
    return <Spinner showSpinner />
}

function Routes() {
    return (
        <BrowserRouter>
            <Suspense fallback={renderSpinner()}>
                <Switch>
                    <AuthGaurd Component={QuestionPage} exact path="/" />
                    <Route component={AuthenticationPage} path="/login" />
                    <Route component={NotFound} path="*" />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes
