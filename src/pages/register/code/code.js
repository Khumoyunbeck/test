import React, {useEffect, useRef, useState} from 'react';
import ReactCodeInput from "react-code-input"
import {Button, Form} from "antd";
import {ResendLink} from "./check-email.e";
import "./code.css"
import axios from "../../../api";
import {useNavigate} from "react-router";

function CheckEmail({k, setStep}) {
    const [timer, setTimer] = useState('00:00');
    const Ref = useRef(null);
    const navigate = useNavigate()
    const props = {
        className: "reactCodeInput",
        inputStyle: {
            fontFamily: "Poppins",
            margin: "10px",
            width: "60px",
            minHeight: "60px",
            borderRadius: "3px",
            fontSize: "20px",
            backgroundColor: "",
            textAlign: "center",
            color: "lightskyblue",
            border: "2px solid lightskyblue",
        },
    }

    const onFinish = (values) => {
        console.log(values, "values")

        axios.post(`user/verify`, {
            "key": k,
            "code": values?.code
        }).then(e => {
                localStorage.setItem("user_token", e?.data?.data?.token);
                localStorage.removeItem("bank_token")
                localStorage.removeItem("admin_token")
                localStorage.removeItem("moderator_token")
                navigate("/admin/cards")
            }
        )
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleResendSms = async () => {
        setStep("register")
        clearTimer(getDeadTime())
    }

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }


    const startTimer = (e) => {
        let {total, minutes, seconds}
            = getTimeRemaining(e);
        if (total >= 0) {

            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e) => {
        setTimer('01:00');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 60);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    return (
        <div className="codePage">
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                className="formSpec"
            >
                <Form.Item
                    label="Code"
                    name="code"
                    style={{marginBottom: 0}}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <ReactCodeInput
                        inputMode="numeric"
                        name="smsCode"
                        fields={6}
                        {...props}
                    />
                </Form.Item>
                {timer === "00:00" ? (
                    <div className="lres">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <span>Don't get SMS?</span>
                        <ResendLink
                            onClick={() => {
                                handleResendSms()
                            }}
                        >
                            Resend
                        </ResendLink>
                    </div>
                ) : (
                    <div className="App">
                        <h2>{timer}</h2>
                    </div>
                )}
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="e-button"
                    >
                        Confirm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CheckEmail;
