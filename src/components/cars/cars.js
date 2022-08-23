import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Modal, Table} from "antd";
import {useNavigate} from "react-router";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import axios from "axios";
import {MainApi} from "../../api";

function Cars({dataSource, deleteCar, getCars}) {

    const navigate = useNavigate()

    const handleClick = (props) => {
        navigate(`/admin/card/${props}`)
    }

    const [type, setType] = useState(null)


    useEffect(() => {
        if (!!localStorage.getItem("user_token")) {
            setType("user")
        }
        if (!!localStorage.getItem("bank_token")) {
            setType("bank")
        }
        if (!!localStorage.getItem("admin_token")) {
            setType("admin")
        }
        if (!!localStorage.getItem("moderator_token")) {
            setType("moderator")
        }
    }, [])


    const onChange = (e, id) => {
        if (type === "moderator") {
            Modal.confirm({
                centered: true,
                title: "Rostan ham status o'zgartirmoqchimisiz",
                icon: <ExclamationCircleOutlined/>,
                onOk() {
                    axios
                        .put(`${MainApi}/car/a/${id}`)
                        .then((res) => {
                            getCars()
                        })
                        .catch((err) => console.log(err));
                },
            })
        }
    };

    const columns = [
        {
            title: 'Madel',
            dataIndex: 'madel',
            key: 'madel',
        },
        {
            title: 'Marka',
            dataIndex: 'marka',
            key: 'marka',
        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: 'color',
        },
        {
            title: 'Colorru',
            dataIndex: 'colorru',
            key: 'colorru',
        },
        {
            title: 'Yili',
            dataIndex: 'yili',
            key: 'yili',
        },
        {
            title: 'Divigitel',
            dataIndex: 'divigitel',
            key: 'divigitel',
        },
        {
            title: 'Yoqilgi',
            dataIndex: 'yoqilgi',
            key: 'yoqilgi',
        },
        {
            title: 'Yoqilgiru',
            dataIndex: 'yoqilgiru',
            key: 'yoqilgiru',
        },
        {
            title: 'Transmission',
            dataIndex: 'transmission',
            key: 'transmission',
        },
        {
            title: 'Transmissionru',
            dataIndex: 'transmissionru',
            key: 'transmissionru',
        },
        {
            title: 'Kuzuv',
            dataIndex: 'kuzuv',
            key: 'kuzuv',
        },
        {
            title: 'Kuzuvru',
            dataIndex: 'kuzuvru',
            key: 'kuzuvru',
        },
        {
            title: 'Perevod',
            dataIndex: 'perevod',
            key: 'perevod',
        },
        {
            title: 'Perevodru',
            dataIndex: 'perevodru',
            key: 'perevodru',
        },
        {
            title: 'Yurgani',
            dataIndex: 'yurgani',
            key: 'yurgani',
        },
        {
            title: 'Narxi',
            dataIndex: 'narxi',
            key: 'narxi',
        },
        {
            title: 'Aksiya',
            dataIndex: 'aksiya',
            key: 'aksiya',
        },
        {
            title: 'Opisaniya',
            dataIndex: 'opisaniya',
            key: 'opisaniya',
            render: function (html) {
                return <div dangerouslySetInnerHTML={{__html: html}}/>
            }
        },
        {
            title: 'Opisaniyaru',
            dataIndex: 'opisaniyaru',
            key: 'opisaniyaru',
            render: function (html) {
                return <div dangerouslySetInnerHTML={{__html: html}}/>
            }
        },
        {
            title: 'Status',
            dataIndex: 'data',
            key: 'data',
            render: (value) => {
                if (type === "moderator") {
                    return (
                        <Checkbox
                            onChange={e => onChange(e, value?._id)}
                            checked={value?.status}
                            disabled={value?.status}
                        />
                    )
                } else
                    return (
                        <Button>
                            {value?.status ? "Active" : "Inactive"}
                        </Button>
                    )
            }
        },
        {
            title: 'Batafsil',
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="primary" onClick={() => handleClick(props)}>Batafsil</Button>
                )
            }
        },
        !(type === "moderator") ? {
            title: "O'chirish",
            dataIndex: '_id',
            key: '_id',
            render: (props) => {
                return (
                    <Button type="ghost" onClick={() => deleteCar(props)}>O'chirish</Button>
                )
            }
        } : {},
    ];

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} scroll={{x: "max-content"}}/>
        </div>
    );
}

export default Cars;
