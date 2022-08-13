import React, {useState} from 'react';
import SignOptions from "../sign-options/sign-options";
import UserLogin from "../../pages/user_login/user_login";
import Register from "../../pages/register/register";

function AdminPage(props) {
    const [step, setStep] = useState("enter")

    let Content = () =>
        ({
            enter: <SignOptions setStep={setStep}/>,
            sign_up: <Register/>,
            sign_in: <UserLogin/>,
        }[step])

    return (
        <div>
            <Content/>
        </div>
    );
}

export default AdminPage;
