import { useHistory, withRouter } from "react-router";
import AuthForm from "src/components/authForm";
import { useAuth } from "src/context/auth-context";
import { AuthUser } from "src/type/authType";

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