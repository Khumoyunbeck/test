import React, {useEffect, useState} from 'react';
import {Button, Form, Input} from 'antd';
import "./update_order.css"
import AdminHeader from "../../components/admin_header/admin_header";
import axios from "axios";
import {MainApi} from "../../api";
import {toast} from "react-toastify";
import {useParams} from "react-router";

function UpdateOrder() {
    const {id} = useParams()

    const [form] = Form.useForm()

    useEffect(() => {
        if (!!id)
            axios.get(`${MainApi}/order/${id}`).then(res => {
                form.setFieldsValue(res?.data?.data)
            })
    }, [id])

    const onFinish = (values) => {
        axios.put(`${MainApi}/order/${id}`, values).then(res => {
            toast.success("Muvafaqiyali yangilandi")
        }).catch(er => console.log(er))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className="contain">
            <AdminHeader/>
            <div className="fields">
                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Ism"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input disabled/>
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone!',
                            },
                        ]}
                    >
                        <Input disabled/>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default UpdateOrder;
