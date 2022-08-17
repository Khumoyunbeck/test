import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Select} from 'antd';
import "./update_car.css"
import AdminHeader from "../../components/admin_header/admin_header";
import axios from "axios";
import {MainApi} from "../../api";
import {toast} from "react-toastify";
import {useParams} from "react-router";
import {fields} from "../../components/add_card_form/fields";
import {Editor} from "react-draft-wysiwyg";
import {ContentState, convertToRaw, EditorState} from "draft-js";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";

function UpdateCar() {
    const {id} = useParams()

    const [form] = Form.useForm()
    const {Option} = Select
    const [op1, setOp1] = useState("")
    const [op2, setOp2] = useState("")
    const [data, setData] = useState({})

    useEffect(() => {
        if (!!id)
            axios.get(`${MainApi}/car/${id}`).then(res => {
                form.setFieldsValue(res?.data?.data)
                setData(res?.data?.data)
            })
    }, [id])

    const onFinish = (values) => {
        const formData = new FormData()
        console.log(op1, "op1")
        console.log(op2, "op2")
        Object.keys(values).forEach(
            key =>
                key !== 'photo' &&
                key !== 'opisaniya' &&
                key !== 'opisaniyaru' &&
                formData.append(key, values[key])
        )

        formData.append("opisaniya", op1)
        formData.append("opisaniyaru", op2)

        axios.put(`${MainApi}/car/${id}`, formData).then(res => {
            toast.success("Muvafaqiyali yangilandi")
        }).catch(er => console.log(er))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const field = fields.find(i => i.key === "madel")

    const [editorState1, setEditorState1] = useState();
    const [editorState2, setEditorState2] = useState();

    const onEditorStateChange1 = (editorState) => {
        setEditorState1(editorState)
        setOp1(draftToHtml(convertToRaw(editorState.getCurrentContent())).toString())
    }

    const onEditorStateChange2 = (editorState) => {
        setEditorState2(editorState)
        setOp2(draftToHtml(convertToRaw(editorState.getCurrentContent())).toString())
    }

    useEffect(() => {
        if (data?.opisaniya) {
            const {contentBlocks, entityMap} = htmlToDraft(data?.opisaniya);
            const contentState = ContentState.createFromBlockArray(
                contentBlocks,
                entityMap
            );
            setEditorState1(EditorState.createWithContent(contentState))
            setOp1(data?.opisaniya)
        }
        if (data?.opisaniyaru) {
            const {contentBlocks, entityMap} = htmlToDraft(data?.opisaniyaru);
            const contentState = ContentState.createFromBlockArray(
                contentBlocks,
                entityMap
            );
            setEditorState2(EditorState.createWithContent(contentState))
            setOp2(data?.opisaniyaru)
        }

    }, [data])

    return (
        <div className="contain pb50">
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
                    {/*<Form.Item*/}
                    {/*    label="madelru"*/}
                    {/*    name="madelru"*/}
                    {/*    rules={[*/}
                    {/*        {*/}
                    {/*            required: true,*/}
                    {/*            message: 'Please input your Model (ru)!',*/}
                    {/*        },*/}
                    {/*    ]}*/}
                    {/*>*/}
                    {/*    <select*/}
                    {/*        className='main_selector form-control'>*/}
                    {/*        {field?.select?.map((select, index1) =>*/}
                    {/*            !!select.label ? (*/}
                    {/*                <optgroup*/}
                    {/*                    label={select.label}*/}
                    {/*                    key={index1}*/}
                    {/*                >*/}
                    {/*                    {select?.optgroup?.map(*/}
                    {/*                        (opt, index2) => (*/}
                    {/*                            <option*/}
                    {/*                                value={opt.value}*/}
                    {/*                                key={index2}*/}
                    {/*                            >*/}
                    {/*                                {opt.name}*/}
                    {/*                            </option>*/}
                    {/*                        )*/}
                    {/*                    )}*/}
                    {/*                </optgroup>*/}
                    {/*            ) : (*/}
                    {/*                <option*/}
                    {/*                    value={select.value}*/}
                    {/*                    key={index1}*/}
                    {/*                >*/}
                    {/*                    {select.name}*/}
                    {/*                </option>*/}
                    {/*            )*/}
                    {/*        )}*/}
                    {/*    </select>*/}
                    {/*</Form.Item>*/}
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

                    {/*<Form.Item*/}
                    {/*    label="Marka (ru)"*/}
                    {/*    name="markaru"*/}
                    {/*    rules={[*/}
                    {/*        {*/}
                    {/*            required: true,*/}
                    {/*            message: 'Please input your marka (ru)!',*/}
                    {/*        },*/}
                    {/*    ]}*/}
                    {/*>*/}
                    {/*    <Select>*/}
                    {/*        {*/}
                    {/*            fields.find(i => i.key === "marka").select.map((y, k) => {*/}
                    {/*                return (*/}
                    {/*                    <Option value={y.value}>{y.label}</Option>*/}
                    {/*                )*/}
                    {/*            })*/}
                    {/*        }*/}
                    {/*    </Select>*/}
                    {/*</Form.Item>*/}

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
                        name="divigitel"
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
                        name="yoqilgiru"
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
                        name="narxi"
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
                                required: false,
                                message: 'Please input your aksiya!',
                            },
                        ]}
                    >
                        <Select>
                            {
                                fields.find(i => i.key === "aksiya").select.map((y, k) => {
                                    return (
                                        <Option value={y.value}>{y.name}</Option>
                                    )
                                })
                            }
                        </Select>
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
                        <Editor
                            editorState={editorState1}
                            value={data?.opisaniya}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={onEditorStateChange1}
                            toolbar={{
                                options: [
                                    "inline",
                                    "blockType",
                                    "fontSize",
                                    "fontFamily",
                                    "list",
                                    "textAlign",
                                    "colorPicker",
                                    "link",
                                    "embedded",
                                    "emoji",
                                    "image",
                                    "remove",
                                    "history",
                                ],
                                colorPicker: {
                                    popupClassName: "colorModal",
                                },
                                link: {
                                    popupClassName: "colorModal",
                                },
                                image: {
                                    popupClassName: "colorModal",
                                },
                            }}
                        />
                    </Form.Item>
                    <div className=" m-b-20">
                        <Form.Item
                            label="Opisaniya (ru)"
                            name="opisaniyaru"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your opisaniya!',
                                },
                            ]}
                        >
                            <Editor
                                editorState={editorState2}
                                value={data?.opisaniyaru}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={onEditorStateChange2}
                                toolbar={{
                                    options: [
                                        "inline",
                                        "blockType",
                                        "fontSize",
                                        "fontFamily",
                                        "list",
                                        "textAlign",
                                        "colorPicker",
                                        "link",
                                        "embedded",
                                        "emoji",
                                        "image",
                                        "remove",
                                        "history",
                                    ],
                                    colorPicker: {
                                        popupClassName: "colorModal",
                                    },
                                    link: {
                                        popupClassName: "colorModal",
                                    },
                                    image: {
                                        popupClassName: "colorModal",
                                    },
                                }}
                            />
                        </Form.Item>
                    </div>

                    <Form.Item
                        label="Holati"
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
                                fields.find(i => i.key === "status").select.map((y, k) => {
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
