
import { FC, ReactNode, useState } from "react";
import { AuthUser } from "src/type/authType";
import Button from "../button";
import Input from "../input";
import "./style.scss";

interface Props {
    handlerSubmitForm: ({ firstname, lastname }: AuthUser) => void
}
const AuthForm = ({ handlerSubmitForm }: Props) => {
    const [data, setData] = useState<AuthUser>({
        firstname: '',
        lastname: ''
    })
    const handlerChange = (e: any) => {
        setData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }
    return (
        <div className="loginForm">
            <label className="label" htmlFor="firstname" >
                FirstName
            </label>
            <Input placeHolder="First name" handlerChange={handlerChange} id="firstname" className="input" type="text" />
            <label className="label" htmlFor="lastname" >
                LastName
            </label>
            <Input placeHolder="last name" handlerChange={handlerChange} id="lastname" className="input" type="text" />
            <Button className="button" onClick={() => handlerSubmitForm(data)} >Submit</Button>
        </div>
    )
}
export default AuthForm;