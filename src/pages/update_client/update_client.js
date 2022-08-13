import React, {useEffect, useState} from 'react';
import {Button, Form, Image, Input} from 'antd';
import "./update_client.css"
import AdminHeader from "../../components/admin_header/admin_header";
import axios from "axios";
import {MainApi} from "../../api";
import {toast} from "react-toastify";
import {useParams} from "react-router";

function UpdateClients() {
    const {id} = useParams()
    const [data, setData] = useState({})

    const [form] = Form.useForm()

    useEffect(() => {
        if (!!id)
            axios.get(`${MainApi}/client/${id}`).then(res => {
                setData(res?.data?.data)
                form.setFieldsValue(res?.data?.data)
            })
    }, [id])

    const onFinish = (values) => {
        axios.put(`${MainApi}/client/${id}`, values).then(res => {
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
                <div style={{marginLeft: "300px", marginBottom:"25px"}}>
                    <Image src={data?.photo} className="sp-img"/>
                </div>
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
                        label="Region"
                        name="region"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your region!',
                            },
                        ]}
                    >
                        <Input disabled/>
                    </Form.Item>

                    <Form.Item
                        label="date"
                        name="date"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
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

export default UpdateClients;
