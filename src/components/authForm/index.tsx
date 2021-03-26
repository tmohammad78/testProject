
import { memo, useState } from "react";

import { AuthUser } from "../../type/authType";
import AuthInputForm from "../authInput";
import Button from "../button";

import "./style.scss";

interface Props {
    handlerSubmitForm: ({ firstname, lastname }: AuthUser) => void
}

const AuthForm = ({ handlerSubmitForm }: Props) => {

    const [infoUser, setInfoUser] = useState<AuthUser>({
        firstname: '',
        lastname: ''
    })

    const handlerChange = (e: React.FormEvent<EventTarget>) => {
        let target = e.target as HTMLInputElement;
        setInfoUser((prev: AuthUser) => ({
            ...prev,
            [target.id]: target.value
        }))
    }

    return (
        <div className="loginForm">
            <AuthInputForm
                id="firstname"
                className="input"
                icon="user"
                placeHolder="First name"
                handlerChange={handlerChange} />
            <AuthInputForm
                id="lastname"
                className="input"
                icon="user"
                placeHolder="Last name"
                handlerChange={handlerChange} />
            <Button
                bgColor="#39e9e6"
                color="white"
                className="button"
                onClick={() => handlerSubmitForm(infoUser)} >Submit</Button>
        </div>
    )
}
export default memo(AuthForm);