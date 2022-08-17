import React from 'react';
import {Button} from "antd";

function SignOptions({setStep}) {
    return (
        <div className="cn">
            <div className='accountbg'></div>
            <div className='accountbg1'></div>
            <div className="buttons">
                <Button type="primary" block onClick={() => setStep("login")}>
                    Kirish
                </Button>
                <Button block onClick={() => setStep("register")}>Registratsiya</Button>
            </div>
        </div>
    );
}

export default SignOptions;
