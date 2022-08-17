import React from 'react';
import {Button} from "antd";

function SignOptions({setStep}) {

    return (
        <div className="cn">
            <div className='accountbg'></div>
            <div className='accountbg1'></div>
            <div className="buttons">
                <Button type="primary" block onClick={() => setStep("sign_in")}>
                    Kirish
                </Button>
                <Button block onClick={() => setStep("sign_up")}>Registratsiya</Button>
            </div>
        </div>
    );
}

export default SignOptions;
