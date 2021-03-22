import {
    Switch,
    Route,
    BrowserRouter,
} from "react-router-dom";

import AuthenticationPage from "../pages/authentication";
import QuestionPage from "../pages/questions";
import NotFound from "../pages/notFound";
import AuthGaurd from "./authGaurd";

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <AuthGaurd path="/" exact component={QuestionPage} />
                <Route path="/login" component={AuthenticationPage} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;