import React, {useEffect} from 'react';
import {Button, Form, Input, Select} from 'antd';
import "./update_car.css"
import AdminHeader from "../../components/admin_header/admin_header";
import axios from "axios";
import {MainApi} from "../../api";
import {toast} from "react-toastify";
import {useParams} from "react-router";
import {fields} from "../../components/add_card_form/fields";

function UpdateCar() {
    const {id} = useParams()

    const [form] = Form.useForm()
    const {Option} = Select
    useEffect(() => {
        if (!!id)
            axios.get(`${MainApi}/car/${id}`).then(res => {
                form.setFieldsValue(res?.data?.data)
            })
    }, [id])

    const onFinish = (values) => {
        axios.put(`${MainApi}/car/${id}`, values).then(res => {
            toast.success("Muvafaqiyali yangilandi")
        }).catch(er => console.log(er))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const field = fields.find(i => i.key === "madel")

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
                        label="Model"
                        name="madel"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your model!',
                            },
                        ]}
                    >
                        <select
                            className='main_selector form-control'>
                            {field?.select?.map((select, index1) =>
                                !!select.label ? (
                                    <optgroup
                                        label={select.label}
                                        key={index1}
                                    >
                                        {select?.optgroup?.map(
                                            (opt, index2) => (
                                                <option
                                                    value={opt.value}
                                                    key={index2}
                                                >
                                                    {opt.name}
                                                </option>
                                            )
                                        )}
                                    </optgroup>
                                ) : (
                                    <option
                                        value={select.value}
                                        key={index1}
                                    >
                                        {select.name}
                                    </option>
                                )
                            )}
                        </select>
                    </Form.Item>

                    <Form.Item
                        label="madelru"
                        name="madelru"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Model (ru)!',
                            },
                        ]}
                    >
                        <select
                            className='main_selector form-control'>
                            {field?.select?.map((select, index1) =>
                                !!select.label ? (
                                    <optgroup
                                        label={select.label}
                                        key={index1}
                                    >
                                        {select?.optgroup?.map(
                                            (opt, index2) => (
                                                <option
                                                    value={opt.value}
                                                    key={index2}
                                                >
                                                    {opt.name}
                                                </option>
                                            )
                                        )}
                                    </optgroup>
                                ) : (
                                    <option
                                        value={select.value}
                                        key={index1}
                                    >
                                        {select.name}
                                    </option>
                                )
                            )}
                        </select>
                    </Form.Item>
                    <Form.Item
                        label="Marka"
                        name="marka"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your marka!',
                            },
                        ]}
                    >
                        <Select>
                            {
                                fields.find(i => i.key === "marka").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>

                    </Form.Item>

                    <Form.Item
                        label="Marka (ru)"
                        name="markaru"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your marka (ru)!',
                            },
                        ]}
                    >
                        <Select>
                            {
                                fields.find(i => i.key === "marka").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Color"
                        name="color"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your color!',
                            },
                        ]}
                    >
                        <Select>

                        {
                            fields.find(i => i.key === "color").select.map((y, k) => {
                                return (
                                    <Option value={y.value}>{y.label}</Option>
                                )
                            })
                        }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Colorru"
                        name="colorru"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your color ru!',
                            },
                        ]}
                    >
                        <Select>

                        {
                            fields.find(i => i.key === "colorru").select.map((y, k) => {
                                return (
                                    <Option value={y.value}>{y.label}</Option>
                                )
                            })
                        }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Yili"
                        name="yili"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your yili!',
                            },
                        ]}
                    >
                        <Select>
                        {
                            fields.find(i => i.key === "yili").select.map((y, k) => {
                                return (
                                    <Option value={y.value}>{y.label}</Option>
                                )
                            })
                        }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Divigitel"
                        name="Divigitel"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your divigitel!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Yoqilgi"
                        name="yoqilgi"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your yoqilgi!',
                            },
                        ]}
                    >
                        <Select>

                        {
                            fields.find(i => i.key === "yoqilgi").select.map((y, k) => {
                                return (
                                    <Option value={y.value}>{y.label}</Option>
                                )
                            })
                        }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Yoqilgi ru"
                        name="Yoqilgi ru"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your yoqilgi (ru)!',
                            },
                        ]}
                    >
                        <Select>

                        {
                            fields.find(i => i.key === "yoqilgiru").select.map((y, k) => {
                                return (
                                    <Option value={y.value}>{y.label}</Option>
                                )
                            })
                        }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Transmission"
                        name="transmission"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your transmission!',
                            },
                        ]}
                    >
                        <Select>

                        {
                            fields.find(i => i.key === "transmission").select.map((y, k) => {
                                return (
                                    <Option value={y.value}>{y.label}</Option>
                                )
                            })
                        }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Transmission (ru)"
                        name="transmissionru"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your transmissionru!',
                            },
                        ]}
                    >
                        <Select>

                        {
                            fields.find(i => i.key === "transmissionru").select.map((y, k) => {
                                return (
                                    <Option value={y.value}>{y.label}</Option>
                                )
                            })
                        }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Kuzuv"
                        name="kuzuv"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your kuzuv!',
                            },
                        ]}
                    >
                        <Select>
                        {
                            fields.find(i => i.key === "kuzuv").select.map((y, k) => {
                                return (
                                    <Option value={y.value}>{y.label}</Option>
                                )
                            })
                        }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Kuzuvru"
                        name="kuzuvru"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your kuzuvru!',
                            },
                        ]}
                    >
                        <Select>
                        {
                            fields.find(i => i.key === "kuzuvru").select.map((y, k) => {
                                return (
                                    <Option value={y.value}>{y.label}</Option>
                                )
                            })
                        }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Perevod"
                        name="perevod"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your perevod!',
                            },
                        ]}
                    >
                        <Select>
                        {
                            fields.find(i => i.key === "perevod").select.map((y, k) => {
                                return (
                                    <Option value={y.value}>{y.label}</Option>
                                )
                            })
                        }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Perevod (ru)"
                        name="perevodru"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your perevod (ru)!',
                            },
                        ]}
                    >
                        <Select>
                        {
                            fields.find(i => i.key === "perevodru").select.map((y, k) => {
                                return (
                                    <Option value={y.value}>{y.label}</Option>
                                )
                            })
                        }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Yurgani"
                        name="yurgani"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your yurgani!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Narxi"
                        name="Narxi"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your narxi!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Aksiya"
                        name="aksiya"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your aksiya!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Opisaniya"
                        name="opisaniya"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your opisaniya!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Opisaniya (ru)"
                        name="opisaniya (ru)"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your opisaniyaru!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Kredit"
                        name="credit"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your credit!',
                            },
                        ]}
                    >
                        <Select>
                            {
                                fields.find(i => i.key === "aksiya").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.label}</Option>
                                    )
                                })
                            }
                        </Select>
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
            </div>
        </div>
    )
        ;
}

export default UpdateCar;
