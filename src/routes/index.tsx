import {
    Switch,
    Route,
    BrowserRouter,
} from "react-router-dom";

import AuthenticationPage from "../pages/authentication";
import NotFound from "../pages/notFound";
import QuestionPage from "../pages/questions";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={AuthenticationPage} />
                <Route path="/app" component={QuestionPage} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;