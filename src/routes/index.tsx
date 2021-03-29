import { lazy, Suspense } from "react";
import {
    Switch,
    Route,
    BrowserRouter,
} from "react-router-dom";

import AuthGaurd from "./authGaurd";
import Spinner from "../components/spinner";

const QuestionPage = lazy(() => import("../pages/questions"))
const AuthenticationPage = lazy(() => import("../pages/authentication"))
const NotFound = lazy(() => import("../pages/notFound"))

const renderSpinner = () => {
    return (
        <Spinner showSpinner></Spinner>
    )
}
const Routes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={renderSpinner()} >
                <Switch>
                    <AuthGaurd path="/" exact Component={QuestionPage} />
                    <Route path="/login" component={AuthenticationPage} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes;