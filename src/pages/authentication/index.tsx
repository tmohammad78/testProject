import { useHistory, withRouter } from "react-router";

import AuthForm from "../../components/authForm";
import { useAuth } from "../../context/auth-context";
import { AuthUser } from "../../type/authType";

const AuthenticationPage = () => {
    const { dispatch } = useAuth();
    const history = useHistory()
    const handlerForm = ({ firstname, lastname }: AuthUser) => {
        dispatch({
            type: "LOGIN",
            payload: {
                status: "success",
                firstname,
                lastname
            }
        })
        history.push("/")
    }
    return (
        <div>
            <AuthForm handlerSubmitForm={handlerForm} />
        </div>
    )
}

export default withRouter(AuthenticationPage);