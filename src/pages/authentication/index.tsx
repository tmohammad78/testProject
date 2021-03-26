import { useHistory, withRouter } from "react-router";

import AuthForm from "../../components/authForm";
import { useAuth } from "../../context/auth-context";
import { AuthUser } from "../../type/authType";

import "./style.scss";

const AuthenticationPage = () => {
    const { dispatch } = useAuth();
    const history = useHistory()
    const handlerForm = ({ firstname, lastname }: AuthUser) => {
        dispatch({
            type: "LOGIN",
            payload: {
                status: "success",
                user: {
                    firstname,
                    lastname
                }
            }
        })
        history.push("/")
    }
    return (
        <div className="auth-page" >
            <div className="wrapper">
                <AuthForm handlerSubmitForm={handlerForm} />
            </div>
        </div>
    )
}

export default withRouter(AuthenticationPage);