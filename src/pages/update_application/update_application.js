import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Image, Input, Row} from 'antd';
import "./update_application.css"
import AdminHeader from "../../components/admin_header/admin_header";
import axios from "axios";
import {MainApi} from "../../api";
import {toast} from "react-toastify";
import {useParams} from "react-router";

function UpdateApplication() {
    const {id} = useParams()
    const [data, setData] = useState({})
    const [form] = Form.useForm()

    const [file, setFile] = useState([])


    const handleFile = e => {
        setFile([...e.target.files])
    }

    useEffect(() => {
        if (!!id)
            axios.get(`${MainApi}/bank/${id}`).then(res => {
                setData(res?.data?.data)
                let a = {}
                Object.entries((res?.data?.data)).forEach(item => {
                    if (item[0] !== "photo") {
                        a = {...a, [item[0]]: item[1]}
                    }
                })
                form.setFieldsValue(a)
            })
    }, [id])

    const onFinish = (values) => {
        const formData = new FormData()
        Object.keys(values).forEach(
            key =>
                key !== 'photo' &&
                key !== '_id' &&
                key !== '__v' &&
                key !== 'date' &&
                formData.append(key, values[key])
        )
        if (file.length)
            file.forEach(file => formData.append('photo', file))
        if (!!localStorage.getItem("user_id")) {
            formData.append("userId", localStorage.getItem("user_id"))
        }
        if (!!localStorage.getItem("admin_id")) {
            formData.append("userId", localStorage.getItem("admin_id"))
        }
        if (!!localStorage.getItem("bank_id")) {
            formData.append("userId", localStorage.getItem("admin_id"))
        }
        axios.put(`${MainApi}/bank/${id}`, formData).then(res => {
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
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Surname"
                        name="surname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your surname!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Father name"
                        name="father_name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your father name!',
                            },
                        ]}
                    >
                        <Input/>
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
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Relative number"
                        name="relative_number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your relative\' number!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="House number"
                        name="house_number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your house number!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Relative number2"
                        name="relative_number2"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your relative number2!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Maosh"
                        name="maosh"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your relative maosh!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Photo"
                        name="photo"
                    >
                        <input
                            onChange={event => handleFile(event)}
                            type='file'
                            name='files'
                            multiple
                        />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <Row gutter={16} className="ml200">
                    <Col span={8}>
                        <Image
                            width={200}
                            src={data.photo?.[0]}
                        />
                    </Col>
                    <Col span={8}>
                        <Image
                            width={200}
                            src={data?.photo?.[1]}
                        />
                    </Col>
                    <Col span={8}>
                        <Image
                            width={200}
                            src={data?.photo?.[2]}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default UpdateApplication;
